<?php
class ControllerApiContainer extends Controller {
	public function index() {
		$json = array();
		if (isset($this->request->get['key'])) {
			$json['data'] = 'exist';
		} else {
			$json['data'] = 'access denied';
		}

		$this->response->addHeader('Content-Type: application/json');
		$this->response->setOutput(json_encode($json));
	}

	public function delete() {
		$json = array();
		$post_data = json_decode(file_get_contents('php://input'), true);
		$credentials = $this->request->getBearerToken();
		$jwt = JWT::decode($credentials, JWT::getPassKey());
		if ($jwt->email) {
			if(isset($this->request->post['container_id'])){
				$this->load->model('catalog/container');
				$result = $this->model_catalog_container->deleteContainer($this->request->post['container_id']);
				if($result){
					$json['success'] = 'Deleted Successfully.';
				}
			}

		} else {
			$json['error'] = 'access denied.';
		}

		$this->response->addHeader('Content-Type: application/json');
		$this->response->setOutput(json_encode($json));
	}

	public function history() {
		$json = array();
		$post_data = json_decode(file_get_contents('php://input'), true);
		$credentials = $this->request->getBearerToken();
		$jwt = JWT::decode($credentials, JWT::getPassKey());
		if ($jwt->email) {
			if(isset($this->request->post['container_id'])){
				$this->load->model('catalog/container');
				$result = $this->model_catalog_container->getContainer($this->request->post['container_id']);

				if($result){
					$history_array = array();
					$server = $this->request->server['HTTPS'] ? HTTPS_SERVER : HTTP_SERVER;
					$history_data = $this->model_catalog_container->getContainerHistory($this->request->post['container_id']);
					foreach ($history_data as $item) {
						$hitem = $item;
						if($item['filename'] && $item['filename'] != ''){
							$hitem['file'] = $server . 'data/upload/' . $item['filename'];
						}
						$history_array[] = $hitem;
					}
					$json['data'] = $history_array;
				}
			}
		} else {
			$json['error'] = 'access denied.';
		}

		$this->response->addHeader('Content-Type: application/json');
		$this->response->setOutput(json_encode($json));
	}

	public function files() {
		$json = array();
		$post_data = json_decode(file_get_contents('php://input'), true);
		$credentials = $this->request->getBearerToken();
		$jwt = JWT::decode($credentials, JWT::getPassKey());
		if ($jwt->email) {
			if(isset($this->request->post['container_id'])){
				$this->load->model('catalog/container');
				$result = $this->model_catalog_container->getContainer($this->request->post['container_id']);
				if($result){
					$_array = array();
					$server = $this->request->server['HTTPS'] ? HTTPS_SERVER : HTTP_SERVER;
					$_data = $this->model_catalog_container->getContainerFiles($this->request->post['container_id']);
					foreach ($_data as $item) {
						$fitem = $item;
						$fitem['file'] = $server . 'data/upload/' . $item['filename'];
						$fitem['codepath'] = $server . 'index.php?route=api/manager/download&code=' . $item['code'];
						$_array[] = $fitem;
					}
					$json['data'] = $_array;
				}
			}
		} else {
			$json['error'] = 'access denied.';
		}

		$this->response->addHeader('Content-Type: application/json');
		$this->response->setOutput(json_encode($json));
	}

	public function savefiles() {
		$json = array();
		$post_data = json_decode(file_get_contents('php://input'), true);
		$credentials = $this->request->getBearerToken();
		$jwt = JWT::decode($credentials, JWT::getPassKey());
		if ($jwt->email) {


			if(isset($this->request->post['container_id'])){
				$this->load->model('catalog/container');
				if(isset($this->request->files['files'])){
					$filename = $this->upload($this->request->files['files'],'file');
					$_file = isset($filename['code']) ? $filename['code'] : '';
					if($_file != ''){
						$_data = array(
							'user_id' => $jwt->user_id,
							'container_id' => $this->request->post['container_id'],
							'file' => $_file
						);
						$result = $this->model_catalog_container->addContainerFile($_data);
					} else {
						$json['error'] = 'File type not accepted.';
					}

				}
			} else {
				$json['error'] = 'missing inputs.';
			}
		} else {
			$json['error'] = 'access denied.';
		}

		$this->response->addHeader('Content-Type: application/json');
		$this->response->setOutput(json_encode($json));
	}

	public function deletefile() {
		$json = array();
		$post_data = json_decode(file_get_contents('php://input'), true);
		$credentials = $this->request->getBearerToken();
		$jwt = JWT::decode($credentials, JWT::getPassKey());
		if ($jwt->email) {
			$this->load->model('catalog/container');

			if(isset($this->request->post['container_id']) && isset($this->request->post['file_id'])){
				$result = $this->model_catalog_container->getContainerFile($this->request->post['container_id'] , $this->request->post['file_id']);
				if($result){
					$path = DIR_FILES_UPLOAD . $result['filename'];
					if (is_file($path)) {
						unlink($path);
					}
					$this->model_catalog_container->deleteContainerFile($result);
				}


			} else {
				$json['error'] = 'missing inputs.';
			}
		} else {
			$json['error'] = 'access denied.';
		}

		$this->response->addHeader('Content-Type: application/json');
		$this->response->setOutput(json_encode($json));
	}

	public function requestSignature(){
		$json = array();
		$post_data = json_decode(file_get_contents('php://input'), true);
		$credentials = $this->request->getBearerToken();
		$jwt = JWT::decode($credentials, JWT::getPassKey());
		if ($jwt->email) {
			if(isset($this->request->post['shippers']) && isset($this->request->post['container_id'])){
				$this->load->model('catalog/container');
				foreach ($this->request->post['shippers'] as $shipper) {
					$shipper_code = token(30);
					$result = $this->model_catalog_container->requestSignature(array(
						'container_id' => $shipper['container_id'],
						'shipment_id' => $shipper['shipment_id'],
						'shipper_id' => $shipper['shipper_id'],
						'shipper_code' => $shipper_code
					));

					$to = $shipper['email'];
					$subject = "Cargo Signature Request";
					$message = "<h2>We need your signature.</h2>";
					$message .= '<p>please click <a href="' . $this->request->post['home'] . 'signature/' . $shipper_code . '">Here</a></p>';
					$this->sendmail('support@hmcargollc.com',$to,'HM-Cargollc',$subject,$message);
				}
				$json['signatures'] = $this->model_catalog_container->getSignatures($this->request->post['container_id']);
			}
		} else {
			$json['error'] = 'access denied.';
		}
		$this->response->addHeader('Content-Type: application/json');
		$this->response->setOutput(json_encode($json));
	}



	public function saveSignature(){
		$json = array();

		if(isset($this->request->post['code']) && isset($this->request->post['image'])){
			$img = $this->request->post['image'];
			$img = str_replace('data:image/png;base64,', '', $img);
			$img = str_replace(' ', '+', $img);
			$data = base64_decode($img);
			file_put_contents(DIR_FILES_UPLOAD . $this->request->post['code'] . '.png', $data);
			$this->generateImage(DIR_FILES_UPLOAD . "Negotiated_Rate_Arrangement.jpg", DIR_FILES_UPLOAD . "signature_" . $this->request->post['code'] . ".jpg", DIR_FILES_UPLOAD . $this->request->post['code'] . ".png");

			$this->load->model('catalog/container');
			$this->model_catalog_container->setSignatureByCode($this->request->post['code']);


			$this->load->model('account/user');
			$managers = $this->model_account_user->getManagerSignature();
			if($managers){
				foreach ($managers as $manager) {
					$to = $manager['email'];
					$subject = "Cargo Manager Signature Request";
					$message = "<h2>We need your signature.</h2>";
					$message .= '<p>please click <a href="' . $this->request->post['home'] . 'admin/signature">Here</a></p>';
					$this->sendmail('support@hmcargollc.com',$to,'HM-Cargollc',$subject,$message);

				}
			}
			$json['success'] = 'Image Generated';
		} else {
			$json['error'] = 'Missing Code';
		}

		$this->response->addHeader('Content-Type: application/json');
		$this->response->setOutput(json_encode($json));
	}

	private function generateImage($source, $output, $image) {
		$stamp = imagecreatefrompng($image);
		$im = imagecreatefromjpeg($source);

		// Set the margins for the stamp and get the height/width of the stamp image
		$marge_right = 500;
		$marge_bottom = 200; //shipper signature
		//$marge_bottom = 50; //manager signature
		$sx = imagesx($stamp);
		$sy = imagesy($stamp);

		imagecopy($im, $stamp, imagesx($im) - $sx - $marge_right, imagesy($im) - $sy - $marge_bottom, 0, 0, imagesx($stamp), imagesy($stamp));
		header('Content-type: image/png');
		imagejpeg($im,$output,70);
		imagedestroy($im);
		imagedestroy($stamp);
		if (is_file($image)) {
			unlink($image);
		}

	}



	private function generateManagerImage($source, $output, $image) {
		$stamp = imagecreatefrompng($image);
		$im = imagecreatefromjpeg($source);

		// Set the margins for the stamp and get the height/width of the stamp image
		$marge_right = 500;
		//$marge_bottom = 200; //shipper signature
		$marge_bottom = 50; //manager signature
		$sx = imagesx($stamp);
		$sy = imagesy($stamp);

		imagecopy($im, $stamp, imagesx($im) - $sx - $marge_right, imagesy($im) - $sy - $marge_bottom, 0, 0, imagesx($stamp), imagesy($stamp));
		header('Content-type: image/png');
		imagejpeg($im,$output,70);
		imagedestroy($im);
		imagedestroy($stamp);
		if (is_file($image)) {
			unlink($image);
		}

	}

	public function getSignatureByCode(){
		$json = array();
		if(isset($this->request->post['code'])){
			$this->load->model('catalog/container');
			$result = $this->model_catalog_container->getSignatureByCode($this->request->post['code']);
			$json['data'] = $result;
			$server = $this->request->server['HTTPS'] ? HTTPS_SERVER : HTTP_SERVER;
			$json['contract'] = $server . 'data/upload/Negotiated_Rate_Arrangement.jpg';
		} else {
			$json['error'] = 'Missing Code';
		}

		$this->response->addHeader('Content-Type: application/json');
		$this->response->setOutput(json_encode($json));
	}

	public function sendmail($from,$to,$sender,$subject,$body){
		$mail = new Mail('smtp');
		$mail->parameter = "";
		$mail->smtp_hostname = "mail.hmcargollc.com";
		$mail->smtp_username = "smtp@hmcargollc.com";
		$mail->smtp_password = "ttl@2020";
		$mail->smtp_port = "587";
		$mail->smtp_timeout = "5";

		$mail->setTo($to);
		$mail->setFrom($from);
		$mail->setSender(html_entity_decode($sender, ENT_QUOTES, 'UTF-8'));
		$mail->setSubject(html_entity_decode($subject, ENT_QUOTES, 'UTF-8'));
		$mail->setHtml($body);
		$mail->send();

	}

	public function saveManagerSignature(){
		$json = array();
		$post_data = json_decode(file_get_contents('php://input'), true);
		$credentials = $this->request->getBearerToken();
		$jwt = JWT::decode($credentials, JWT::getPassKey());
		if ($jwt->email) {
			if(isset($this->request->post['code']) && isset($this->request->post['image'])){
				$img = $this->request->post['image'];
				$img = str_replace('data:image/png;base64,', '', $img);
				$img = str_replace(' ', '+', $img);
				$data = base64_decode($img);
				file_put_contents(DIR_FILES_UPLOAD . $this->request->post['code'] . '.png', $data);
				$this->generateManagerImage(DIR_FILES_UPLOAD . "signature_" . $this->request->post['code'] . ".jpg", DIR_FILES_UPLOAD . "signature_" . $this->request->post['code'] . ".jpg", DIR_FILES_UPLOAD . $this->request->post['code'] . ".png");

				$this->load->model('catalog/container');
				$this->model_catalog_container->setManagerSignatureByCode($jwt->user_id , $this->request->post['code']);

				$json['success'] = 'Image Generated';
			} else {
				$json['error'] = 'Missing Code';
			}

		} else {
			$json['error'] = 'access denied.';
		}

		$this->response->addHeader('Content-Type: application/json');
		$this->response->setOutput(json_encode($json));
	}

	public function getContainersSignatures(){
		$json = array();
		$post_data = json_decode(file_get_contents('php://input'), true);
		$credentials = $this->request->getBearerToken();
		$jwt = JWT::decode($credentials, JWT::getPassKey());
		if ($jwt->email) {
			$this->load->model('catalog/container');
			$result = $this->model_catalog_container->getContainersSignatures();
			$server = $this->request->server['HTTPS'] ? HTTPS_SERVER : HTTP_SERVER;
			$result_data = array();
			if($result){
				foreach ($result as $item) {
					$item['contract'] = $server . 'data/upload/signature_' . $item['shipper_code'] . '.jpg';
					$item['download'] = $server . 'index.php?route=api/container/downloadcontract&code=signature_' . $item['shipper_code'] . '&name=Negotiated_Rate_Arrangement.jpg';
					$result_data[] = $item;
				}
			}
			$json['data'] = $result_data;

		} else {
			$json['error'] = 'access denied.';
		}

		$this->response->addHeader('Content-Type: application/json');
		$this->response->setOutput(json_encode($json));
	}

	public function downloadcontract(){
		if (isset($this->request->get['code'])) {
			$code = $this->request->get['code'];
		} else {
			$code = 0;
		}

		$file = DIR_FILES_UPLOAD . $this->request->get['code'] . '.jpg';
		$mask = basename($this->request->get['name']);

		if (!headers_sent()) {
			if (is_file($file)) {
				header('Content-Type: application/octet-stream');
				header('Content-Description: File Transfer');
				header('Content-Disposition: attachment; filename="' . ($mask ? $mask : basename($file)) . '"');
				header('Content-Transfer-Encoding: binary');
				header('Expires: 0');
				header('Cache-Control: must-revalidate, post-check=0, pre-check=0');
				header('Pragma: public');
				header('Content-Length: ' . filesize($file));

				readfile($file, 'rb');
				exit;
			} else {
				exit('Error: Could not find file ' . $file . '!');
			}
		} else {
			exit('Error: Headers already sent out!');
		}

	}

	public function getManagerSignatureByCode(){
		$json = array();
		$post_data = json_decode(file_get_contents('php://input'), true);
		$credentials = $this->request->getBearerToken();
		$jwt = JWT::decode($credentials, JWT::getPassKey());
		if ($jwt->email) {
			if(isset($this->request->post['code'])){
				$this->load->model('catalog/container');
				$result = $this->model_catalog_container->getManagerSignatureByCode($this->request->post['code']);
				$json['data'] = $result;
				$server = $this->request->server['HTTPS'] ? HTTPS_SERVER : HTTP_SERVER;
				$json['contract'] = $server . 'data/upload/Negotiated_Rate_Arrangement.jpg';
			} else {
				$json['error'] = 'Missing Code';
			}
		} else {
			$json['error'] = 'access denied.';
		}

		$this->response->addHeader('Content-Type: application/json');
		$this->response->setOutput(json_encode($json));
	}

	public function shippers(){
		$json = array();
		$post_data = json_decode(file_get_contents('php://input'), true);
		$credentials = $this->request->getBearerToken();
		$jwt = JWT::decode($credentials, JWT::getPassKey());
		if ($jwt->email) {
			if(isset($this->request->post['container_id'])){
				$this->load->model('catalog/container');
				$result = $this->model_catalog_container->getContainerShippers($this->request->post['container_id']);
				$container_data = array();
				if($result){
					$json['data'] = $result;
				}
			}

		} else {
			$json['error'] = 'access denied.';
		}

		$this->response->addHeader('Content-Type: application/json');
		$this->response->setOutput(json_encode($json));
	}

	public function get() {
		$json = array();
		$post_data = json_decode(file_get_contents('php://input'), true);
		$credentials = $this->request->getBearerToken();
		$jwt = JWT::decode($credentials, JWT::getPassKey());
		if ($jwt->email) {
			if(isset($this->request->post['container_id'])){
				$this->load->model('catalog/container');
				$result = $this->model_catalog_container->getContainer($this->request->post['container_id']);
				$container_data = array();
				if($result){
					$server = $this->request->server['HTTPS'] ? HTTPS_SERVER : HTTP_SERVER;
					$history_array = array();
					$history_data = $this->model_catalog_container->getContainerHistory($this->request->post['container_id']);
					foreach ($history_data as $item) {
						$hitem = $item;
						if($item['filename'] && $item['filename'] != ''){
							$hitem['file'] = $server . 'data/upload/' . $item['filename'];
						}

						$history_array[] = $hitem;
					}
					$container_data['data'] = $result;
					$container_data['shipments'] = $this->model_catalog_container->getContainerShipments($this->request->post['container_id']);
					$container_data['signatures'] = $this->model_catalog_container->getSignatures($this->request->post['container_id']);
					$container_data['history'] = $history_array;
				}
				$json['data'] = $container_data;
			}

		} else {
			$json['error'] = 'access denied.';
		}

		$this->response->addHeader('Content-Type: application/json');
		$this->response->setOutput(json_encode($json));
	}

	public function list() {
		$json = array();
		$post_data = json_decode(file_get_contents('php://input'), true);
		$credentials = $this->request->getBearerToken();
		$jwt = JWT::decode($credentials, JWT::getPassKey());
		if ($jwt->email) {
			$this->load->model('catalog/container');
			$_data = array(
				'user_id' => $jwt->user_id,
				'user_group_id' => $jwt->user_group_id,
				'is_admin' => $jwt->user_group_id == 1,
			);
			$result = $this->model_catalog_container->getContainers($_data);
			if($result){
				$json['data'] = $result;
			}
		} else {
			$json['error'] = 'access denied.';
		}

		$this->response->addHeader('Content-Type: application/json');
		$this->response->setOutput(json_encode($json));
	}

	public function save() {
		$json = array();
		$post_data = json_decode(file_get_contents('php://input'), true);
		$credentials = $this->request->getBearerToken();
		$jwt = JWT::decode($credentials, JWT::getPassKey());
		if ($jwt->email) {
			$this->load->model('catalog/container');

			//container data
			$container_data = array(
				'user_id' => $jwt->user_id,
				'container_no' => $this->request->post['container']['container_no'],
				'booking_no' => $this->request->post['container']['booking_no'],
				'port_of_loading' => $this->request->post['container']['port_of_loading'],
				'port_of_discharge' => $this->request->post['container']['port_of_discharge'],
				'sailing_date' => $this->request->post['container']['sailing_date'],
				'courier' => $this->request->post['container']['courier'],
				'eta' => $this->request->post['container']['eta']
			);

			if(isset($this->request->post['history']) && isset($this->request->post['history']['container_status_id']) && !empty($this->request->post['history']['container_status_id'])){
				$container_data['container_status_id'] = $this->request->post['history']['container_status_id'];
			}

			if(isset($this->request->post['container_id'])){
				$container_id = $this->request->post['container_id'];
				$this->model_catalog_container->updateContainer($container_id,$container_data);
			} else {
				$container_id = $this->model_catalog_container->addContainer($container_data);
			}

			// history data
			$history_file = '';
			if(isset($this->request->post['history'])){

				$history_file = '';

				if(isset($this->request->files['history'])){
					$filename = $this->upload($this->request->files['history'],'file');
					$history_file = isset($filename['code']) ? $filename['code'] : '';
				}


				$history_data = array(
					'user_id' => $jwt->user_id,
					'container_status_id' => isset($this->request->post['history']['container_status_id']) ? $this->request->post['history']['container_status_id'] : '0',
					'container_id' => $container_id,
					'note' => isset($this->request->post['history']['note']) ? $this->request->post['history']['note'] : '',
					'file' => $history_file
				);

				$result = $this->model_catalog_container->addContainerHistory($history_data);


			}



			// assigned shipments
			$shipments = array();
			if(isset($this->request->post['shipments'])){
				foreach ($this->request->post['shipments'] as $key => $val) {
					$shipments[$key] = $val;
				}
			}

			$shipment_array = array();
			foreach ($shipments as $shipment) {
				$shipment_array = array(
					'shipment_id' => $shipment['shipment_id'],
					'container_id' => $container_id
				);
				$this->model_catalog_container->assignShipment($shipment_array);
			}

			$result = true;
			if($result){
				$json['data'] = $result;
			}
		} else {
			$json['error'] = 'access denied.';
		}

		$this->response->addHeader('Content-Type: application/json');
		$this->response->setOutput(json_encode($json));
	}

	private function upload($_file,$child){
		$json = array();

		if (!empty($_file['name'][$child]) && is_file($_file['tmp_name'][$child])) {
			// Sanitize the filename
			$filename = basename(preg_replace('/[^a-zA-Z0-9\.\-\s+]/', '', html_entity_decode($_file['name'][$child], ENT_QUOTES, 'UTF-8')));

			// Validate the filename length
			if ((utf8_strlen($filename) < 3) || (utf8_strlen($filename) > 64)) {
				$json['error'] = $this->language->get('error_filename');
			}

			// Allowed file extension types
			$allowed = array();

			$extension_allowed = preg_replace('~\r?\n~', "\n", $this->config->get('config_file_ext_allowed'));

			$filetypes = explode("\n", $extension_allowed);

			foreach ($filetypes as $filetype) {
				$allowed[] = trim($filetype);
			}

			if (!in_array(strtolower(substr(strrchr($filename, '.'), 1)), $allowed)) {
				$json['error'] = $this->language->get('error_filetype');
			}

			// Allowed file mime types
			$allowed = array();

			$mime_allowed = preg_replace('~\r?\n~', "\n", $this->config->get('config_file_mime_allowed'));

			$filetypes = explode("\n", $mime_allowed);

			foreach ($filetypes as $filetype) {
				$allowed[] = trim($filetype);
			}

			if (!in_array($_file['type'][$child], $allowed)) {
				$json['error'] = $this->language->get('error_filetype');
			}

			// Check to see if any PHP files are trying to be uploaded
			$content = file_get_contents($_file['tmp_name'][$child]);

			if (preg_match('/\<\?php/i', $content)) {
				$json['error'] = $this->language->get('error_filetype');
			}

			// Return any upload error
			if ($_file['error'][$child] != UPLOAD_ERR_OK) {
				$json['error'] = $this->language->get('error_upload_' . $_file['error'][$child]);
			}
		} else {
			$json['error'] = $this->language->get('error_upload');
		}

		if (!$json) {

			$temp = explode(".", $filename);
			$newfilename = round(microtime(true)) . '.' . end($temp);


			$file = $filename . '.' . token(32);

			move_uploaded_file($_file['tmp_name'][$child], DIR_FILES_UPLOAD . $newfilename);
			// Hide the uploaded file name so people can not link to it directly.
			$this->load->model('tool/upload');

			$json['code'] = $this->model_tool_upload->addUpload($filename, $newfilename);

			$json['success'] = $this->language->get('text_upload');
		}

		return $json;
	}
}
