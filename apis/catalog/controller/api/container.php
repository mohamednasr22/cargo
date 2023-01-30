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

	public function cronjob(){
		$this->load->model('catalog/container');
		$containers = $this->model_catalog_container->getReminderContainer();
		if($containers){
			foreach ($containers as $container) {
				$container_users = $this->model_catalog_container->getContainerShipmentOwner($container['container_id']);
				foreach ($container_users as $user_item) {
					$this->model_catalog_manager->addNotification(array(
						'user_id' => $user_item['user_id'],
						'type' => 'container',
						'type_id' => $container['container_id'],
						'message' => 'This is a reminder to pay our fees for your shipment #' . $user_item['shipment_id'] . ' of container #' . $user_item['container_no']
					));

					$subject = "HM-Cargo Fees Reminder";
					$message = "<p>This is a reminder to pay our fees for your shipment #" . $user_item['shipment_id'] . " of container #" . $user_item['container_no'] . "</p>";
					$message .= '<a href="' . FRONT_BASE . 'admin/containers/info/' . $container['container_id'] . '">View Container</a>';
					if(isset($user_item['email'])){
							$this->sendmail('support@hmcargollc.com',$user_item['email'],'HM-Cargollc',$subject,$message);
					}
				}
				$this->model_catalog_container->setReminderContainer($container['container_id']);
			}
		}
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
						if($item['file']){
							$images = explode(',',$item['file']);
							$hitem['file'] = array();
							foreach ($images as $value) {
								$hitem['file'][] =  $server . 'data/upload/' . $value;
							}

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
			$this->load->model('catalog/container');
			if(isset($this->request->post['shipper']) && isset($this->request->post['form']) && isset($this->request->post['container_id'])){
				$shipper = $this->request->post['shipper'];
				$this->load->model('catalog/container');
				$shipper_code = token(30);
				$result = $this->model_catalog_container->requestSignature(array(
					'container_id' => $shipper['container_id'],
					'shipment_id' => $shipper['shipment_id'],
					'shipper_id' => $shipper['shipper_id'],
					'shipper_code' => $shipper_code,
					'contract_form' => $this->request->post['form']
				));

				$subject = "Cargo Signature Request";
				$message = "<h2>We need your signature.</h2>";
				$message .= '<p>please click <a href="' . $this->request->post['home'] . 'signature/' . $shipper_code . '">Here</a></p>';
				if(isset($shipper['email'])){
				    $this->sendmail('support@hmcargollc.com',$shipper['email'],'HM-Cargollc',$subject,$message);
				}

				$json['link'] = $this->request->post['home'] . 'signature/' . $shipper_code;
			}
			$json['signatures'] = $this->model_catalog_container->getSignatures($this->request->post['container_id']);
			/*
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

					$subject = "Cargo Signature Request";
					$message = "<h2>We need your signature.</h2>";
					$message .= '<p>please click <a href="' . $this->request->post['home'] . 'signature/' . $shipper_code . '">Here</a></p>';
					$this->sendmail('support@hmcargollc.com',$shipper['email'],'HM-Cargollc',$subject,$message);
				}
				$json['signatures'] = $this->model_catalog_container->getSignatures($this->request->post['container_id']);
			}
			*/
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
			file_put_contents(DIR_FILES_UPLOAD . $this->request->post['code'] . '_shipper_' . '.png', $data);
			//$this->generateImage(DIR_FILES_UPLOAD . "Negotiated_Rate_Arrangement.jpg", DIR_FILES_UPLOAD . "signature_" . $this->request->post['code'] . ".jpg", DIR_FILES_UPLOAD . $this->request->post['code'] . ".png");

			$this->load->model('catalog/container');
			$this->model_catalog_container->setSignatureByCode($this->request->post['code']);


			$this->load->model('account/user');
			$managers = $this->model_account_user->getManagerSignature();
			if($managers){
				foreach ($managers as $manager) {
					$subject = "Cargo Manager Signature Request";
					$message = "<h2>We need your signature.</h2>";
					$message .= '<p>please click <a href="' . $this->request->post['home'] . 'admin/signature">Here</a></p>';
					if(isset($manager['email'])){
					    $this->sendmail('support@hmcargollc.com',$manager['email'],'HM-Cargollc',$subject,$message);
					}


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

			$server = $this->request->server['HTTPS'] ? HTTPS_SERVER : HTTP_SERVER;
			if($result){
				$shipper_file = DIR_FILES_UPLOAD . $result['shipper_code'] . '_shipper_' . '.png';
				$manager_file = DIR_FILES_UPLOAD . $result['shipper_code'] . '_manager_' . '.png';

				/////
				$_shipper_path = DIR_FILES_UPLOAD . $result['shipper_code'] . '_shipper_' . '.png';
				if(is_file($_shipper_path)){
					$_shipper_type = pathinfo($_shipper_path, PATHINFO_EXTENSION);
					$_shipper_data = file_get_contents($_shipper_path);
					$_shipper_base64 = 'data:image/' . $_shipper_type . ';base64,' . base64_encode($_shipper_data);
				} else {
					$_shipper_base64 = '';
				}



				$_manager_path = DIR_FILES_UPLOAD . $result['shipper_code'] . '_manager_' . '.png';
				if(is_file($_manager_path)){
					$_manager_type = pathinfo($_manager_path, PATHINFO_EXTENSION);
					$_manager_data = file_get_contents($_manager_path);
					$_manager_base64 = 'data:image/' . $_manager_type . ';base64,' . base64_encode($_manager_data);
				} else {
					$_manager_base64 = '';
				}





				////
				if (is_file($shipper_file)) {
					//$result['shipper_signature'] = $server . 'data/upload/' . $result['shipper_code'] . '_shipper_' . '.png';
					$result['shipper_signature'] = $_shipper_base64;
				} else {
					$result['shipper_signature'] = '';
				}

				if (is_file($manager_file)) {
					//$result['manager_signature'] = $server . 'data/upload/' . $result['shipper_code'] . '_manager_' . '.png';
					$result['manager_signature'] = $_manager_base64;
				} else {
					$result['manager_signature'] = '';
				}

				$result['server_path'] = $server . 'data/upload/';
				$result['contract'] = $server . 'data/upload/signature_' . $result['shipper_code'] . '.jpg';
				$result['download'] = $server . 'index.php?route=api/container/downloadcontract&code=signature_' . $result['shipper_code'] . '&name=Negotiated_Rate_Arrangement.jpg';

			}

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
		$mail->smtp_username = "noreply@hmcargollc.com";
		$mail->smtp_password = "TTL@2020";
		$mail->smtp_port = "2525";
		$mail->smtp_timeout = "5";

		$mail->setTo($to);
		$mail->setFrom('support@hmcargollc.com');
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
				file_put_contents(DIR_FILES_UPLOAD . $this->request->post['code'] . '_manager_' . '.png', $data);
				//$this->generateManagerImage(DIR_FILES_UPLOAD . "signature_" . $this->request->post['code'] . ".jpg", DIR_FILES_UPLOAD . "signature_" . $this->request->post['code'] . ".jpg", DIR_FILES_UPLOAD . $this->request->post['code'] . ".png");

				$this->load->model('catalog/container');
				$this->model_catalog_container->setManagerSignatureByCode($jwt->user_id , $this->request->post['code']);

				$signature_data = $this->model_catalog_container->getSignatureByCode($this->request->post['code']);
				if($signature_data){
					$this->load->model('catalog/shipper');
					$shipper = $this->model_catalog_shipper->getShipper($signature_data['shipper_id']);
					if($shipper){
						$subject = "Cargo Contract Signed";
						$message = "<h2>Manager was signed on the contract of Container #" . $signature_data['container_no'] . " and Shipment #" . $signature_data['shipment_id'] . ".</h2>";
						$message .= '<p>please click <a href="' . $this->request->post['home'] . 'signature/' . $this->request->post['code'] . '">Here</a></p>';
						if(isset($shipper['email'])){
						    $this->sendmail('support@hmcargollc.com',$shipper['email'],'HM-Cargollc',$subject,$message);
						}

						$json['shipper_data'] = $shipper;
						$json['link'] = $this->request->post['home'] . 'signature/' . $this->request->post['code'];
					}
				}
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

	public function downloadprint(){
		$urlFile="http://localhost:8099/cargo-app/apis/index.php?route=api/container/printsignature&id=21";
		$file_name  =   basename($urlFile);
    //save the file by using base name
    $fn         =   file_put_contents($file_name,file_get_contents($urlFile));
    header("Expires: 0");
    header("Last-Modified: ".gmdate("D, d M Y H:i:s")." GMT");
    header("Cache-Control: no-store, no-cache, must-revalidate");
    header("Cache-Control: post-check=0, pre-check=0", false);
    header("Pragma: no-cache");
    header("Content-type: application/file");
    header('Content-length: '.filesize($file_name));
    header('Content-disposition: attachment; filename="'.basename($file_name).'"');
    readfile($file_name);
	}

	public function printsignature(){
		if(isset($this->request->get['id'])){
			$this->load->model('catalog/container');
			$result = $this->model_catalog_container->getContainerSignatureById($this->request->get['id']);
			$server = $this->request->server['HTTPS'] ? HTTPS_SERVER : HTTP_SERVER;
			if($result){
				$item = $result[0];
				$shipper_file = DIR_FILES_UPLOAD . $item['shipper_code'] . '_shipper_' . '.png';
				$manager_file = DIR_FILES_UPLOAD . $item['shipper_code'] . '_manager_' . '.png';


				$_shipper_path = DIR_FILES_UPLOAD . $item['shipper_code'] . '_shipper_' . '.png';
				if(is_file($_shipper_path)){
					$_shipper_type = pathinfo($_shipper_path, PATHINFO_EXTENSION);
					$_shipper_data = file_get_contents($_shipper_path);
					$_shipper_base64 = 'data:image/' . $_shipper_type . ';base64,' . base64_encode($_shipper_data);
				} else {
					$_shipper_base64 = '';
				}


				if (is_file($shipper_file)) {
					//$item['shipper_signature'] = $server . 'data/upload/' . $item['shipper_code'] . '_shipper_' . '.png';
					$item['shipper_signature'] = $_shipper_base64;
				} else {
					$item['shipper_signature'] = '';
				}

				$_manager_path = DIR_FILES_UPLOAD . $item['shipper_code'] . '_manager_' . '.png';
				if(is_file($_manager_path)){
					$_manager_type = pathinfo($_manager_path, PATHINFO_EXTENSION);
					$_manager_data = file_get_contents($_manager_path);
					$_manager_base64 = 'data:image/' . $_manager_type . ';base64,' . base64_encode($_manager_data);
				} else {
					$_manager_base64 = '';
				}


				if (is_file($manager_file)) {
					//$item['manager_signature'] = $server . 'data/upload/' . $item['shipper_code'] . '_manager_' . '.png';
					$item['manager_signature'] = $_manager_base64;
				} else {
					$item['manager_signature'] = '';
				}

				$item['server_path'] = $server . 'data/upload/';
				$item['contract'] = $server . 'data/upload/signature_' . $item['shipper_code'] . '.jpg';
				$item['download'] = $server . 'index.php?route=api/container/downloadcontract&code=signature_' . $item['shipper_code'] . '&name=Negotiated_Rate_Arrangement.jpg';
				$data['data'] = $item;
			}
		}

		$this->response->setOutput($this->load->view('catalog/signature', $data));

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
					$shipper_file = DIR_FILES_UPLOAD . $item['shipper_code'] . '_shipper_' . '.png';
					$manager_file = DIR_FILES_UPLOAD . $item['shipper_code'] . '_manager_' . '.png';


					$_shipper_path = DIR_FILES_UPLOAD . $item['shipper_code'] . '_shipper_' . '.png';
					if(is_file($_shipper_path)){
						$_shipper_type = pathinfo($_shipper_path, PATHINFO_EXTENSION);
						$_shipper_data = file_get_contents($_shipper_path);
						$_shipper_base64 = 'data:image/' . $_shipper_type . ';base64,' . base64_encode($_shipper_data);
					} else {
						$_shipper_base64 = '';
					}


					if (is_file($shipper_file)) {
						//$item['shipper_signature'] = $server . 'data/upload/' . $item['shipper_code'] . '_shipper_' . '.png';
						$item['shipper_signature'] = $_shipper_base64;
					} else {
						$item['shipper_signature'] = '';
					}

					$_manager_path = DIR_FILES_UPLOAD . $item['shipper_code'] . '_manager_' . '.png';
					if(is_file($_manager_path)){
						$_manager_type = pathinfo($_manager_path, PATHINFO_EXTENSION);
						$_manager_data = file_get_contents($_manager_path);
						$_manager_base64 = 'data:image/' . $_manager_type . ';base64,' . base64_encode($_manager_data);
					} else {
						$_manager_base64 = '';
					}


					if (is_file($manager_file)) {
						//$item['manager_signature'] = $server . 'data/upload/' . $item['shipper_code'] . '_manager_' . '.png';
						$item['manager_signature'] = $_manager_base64;
					} else {
						$item['manager_signature'] = '';
					}

					$item['server_path'] = $server . 'data/upload/';
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
				$this->load->model('catalog/shipment');
				$this->load->model('catalog/shipper');
				$result = $this->model_catalog_container->getContainer($this->request->post['container_id']);
				$container_data = array();
				if($result){
					$server = $this->request->server['HTTPS'] ? HTTPS_SERVER : HTTP_SERVER;
					/*
					$history_array = array();
					$history_data = $this->model_catalog_container->getContainerHistory($this->request->post['container_id']);
					foreach ($history_data as $item) {
						$hitem = $item;
						if($item['filename'] && $item['filename'] != ''){
							$hitem['file'] = $server . 'data/upload/' . $item['filename'];
						}

						$history_array[] = $hitem;
					}
					*/
					$history_array = array();
					$history_data = $this->model_catalog_container->getContainerHistory($this->request->post['container_id']);
					foreach ($history_data as $item) {
						$hitem = $item;
						if($item['file']){
							$images = explode(',',$item['file']);
							$hitem['file'] = array();
							foreach ($images as $value) {
								$hitem['file'][] =  $server . 'data/upload/' . $value;
							}
						}

						$history_array[] = $hitem;
					}

					$container_data['data'] = $result;
					$container_shipments = $this->model_catalog_container->getContainerShipments($this->request->post['container_id']);

					$container_shipments_data = array();

					foreach ($container_shipments as $c_shipment) {
						$container_shipments_data[] = array(
																						'shipment_id' => $c_shipment['shipment_id'],
																						'shipment' =>  $this->model_catalog_shipment->getShipments(array('shipment_id' => $c_shipment['shipment_id'])),
																						'packages' => $this->model_catalog_shipment->getShipmentPackage($c_shipment['shipment_id'])
																					);
					}
					//$container_data['shipments'] = $this->model_catalog_container->getContainerShipments($this->request->post['container_id']);

					$container_data['shipments'] = $container_shipments_data;


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

	public function getsharedcontainers(){
		$json = array();
		$post_data = json_decode(file_get_contents('php://input'), true);
		$credentials = $this->request->getBearerToken();
		$jwt = JWT::decode($credentials, JWT::getPassKey());
		if ($jwt->email) {
			$this->load->model('catalog/container');
			$permissions = json_decode(html_entity_decode($jwt->permission),true);
			$isAdmin = false;
			if(isset($permissions['container']['showall'])){
				$isAdmin = $permissions['container']['showall'] ? true : false;
			}
			if(!$isAdmin){
				$isAdmin = $jwt->user_group_id == 1 ? true : false;
			}

			$_data = array(
				'user_id' => $jwt->user_id,
				'user_group_id' => $jwt->user_group_id,
				'is_admin' => $isAdmin,
			);
			$result = $this->model_catalog_container->getSharedContainers($_data);
			$datalist = array();
			if($result){
				foreach ($result as $item) {
					$shipments = explode(',',$item['shipments']);
					$package_data = array();
					foreach ($shipments as $shipment_item) {
						$shipment_packages = $this->model_catalog_container->getContainerShipmentPackages($shipment_item);
						$package_data[] = array(
							'shipper_name' => $shipment_packages['shipper_name'],
							'title' => $shipment_packages['title'],
							'akey' => $shipment_packages['akey'],
							'packages' => json_decode("[" . $shipment_packages['packages'] . "]",true)
						);
					}
					$datalist[] = array(
						'warehouse_id' => $item['warehouse_id'],
						'warehouse_name' => $item['warehouse_name'],
						'destination_id' => $item['destination_id'],
						'destination_name' => $item['destination_name'],
						'total_shipments' => $item['total_shipments'],
						'packages' => $package_data
					);
				}
			}
			$json['data'] = $datalist;
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
			$permissions = json_decode(html_entity_decode($jwt->permission),true);
			$isAdmin = false;
			if(isset($permissions['container']['showall'])){
				$isAdmin = $permissions['container']['showall'] ? true : false;
			}
			if(!$isAdmin){
				$isAdmin = $jwt->user_group_id == 1 ? true : false;
			}

			$filter_items = array();
			$filter_description = false;
			$filters = 0;
			if(isset($this->request->get['filter'])){
				$filters = explode("|", $this->request->get['filter']);
				foreach ($filters as $filter_item) {
					$column_item = explode("___", $filter_item);
					if(isset($column_item[1]) && $column_item[1] != ''){
						$filter_items[$column_item[0]] = $column_item[1];
					}
				}
			}

			$page = isset($this->request->get['page']) ? $this->request->get['page'] : 1;
			$limit = isset($this->request->get['pagesize']) ? $this->request->get['pagesize'] : 10;

			$_data = array(
				'user_id' => $jwt->user_id,
				'user_group_id' => $jwt->user_group_id,
				'is_admin' => $isAdmin,
				'sort' => isset($this->request->get['sort']) ? $this->request->get['sort'] : 'container_id',
				'order' => isset($this->request->get['order']) ? $this->request->get['order'] : 'ASC',
				'start' => ($page - 1) * $limit,
				'limit' => $limit,
				'filter' => $filter_items
			);
			$result = $this->model_catalog_container->getContainers($_data);
			$result_total = $this->model_catalog_container->getTotalContainers($_data);
			if($result){
				$json['items'] = $result;
				$json['total'] = $result_total;
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

			$old_container_users = array();
			$same_detected = false;
			$existing_shipment = array();
			if(isset($this->request->post['container_id'])){
				$container_id = $this->request->post['container_id'];
				$old_container_data = $this->model_catalog_container->getContainer($container_id);


				if($container_data['container_no'] == $old_container_data['container_no'] && $container_data['booking_no'] == $old_container_data['booking_no'] && $container_data['port_of_loading'] == $old_container_data['port_of_loading'] && $container_data['port_of_discharge'] == $old_container_data['port_of_discharge'] && $container_data['sailing_date'] == $old_container_data['sailing_date'] && $container_data['courier'] == $old_container_data['courier'] && $container_data['eta'] == $old_container_data['eta'] && $container_data['container_status_id'] == $old_container_data['container_status_id']){
					$same_detected = true;
				}
				$old_container_users = $this->model_catalog_container->getContainerShipmentOwner($container_id);
				foreach ($old_container_users as $itm) {
					$existing_shipment[] = $itm['shipment_id'];
				}
				$this->model_catalog_container->updateContainer($container_id,$container_data);

			} else {
				$container_id = $this->model_catalog_container->addContainer($container_data);

			}

			// history data

			if(isset($this->request->post['history'])){
				$history_file = array();
				if(isset($this->request->files['history_files'])){
					$file_names = $this->request->files["history_files"]["name"];
					$this->load->model('tool/upload');
			    for ($i = 0; $i < count($file_names); $i++) {
			        $file_name=$file_names[$i];
							$temp = explode(".", $file_name);

							$code = sha1(uniqid(mt_rand(), true));

							$newfilename = $code . '.' . end($temp);

							move_uploaded_file($this->request->files["history_files"]["tmp_name"][$i] , DIR_FILES_UPLOAD . $newfilename);

							$history_file[] = $newfilename;
			    }
				}
				$history_shipment_id = isset($this->request->post['history']['container_status_id']) ? $this->request->post['history']['container_status_id'] : '0';

				$history_data = array(
					'user_id' => $jwt->user_id,
					'container_status_id' => $history_shipment_id,
					'container_id' => $container_id,
					'note' => isset($this->request->post['history']['note']) ? $this->request->post['history']['note'] : '',
					'file' => implode(',',$history_file)
				);



				$result = $this->model_catalog_container->addContainerHistory($history_data);


			}

			/*
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

				if($history_file != ''){
					$same_detected = false;
				}
				if(isset($this->request->post['history']['note']) && $this->request->post['history']['note'] != ''){
					$same_detected = false;
				}


			}
			*/



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

			$this->load->model('catalog/manager');

			if(isset($this->request->post['container_id'])){
				if(isset($this->request->post['history']) && isset($this->request->post['history']['container_status_id']) && !empty($this->request->post['history']['container_status_id'])){
					$container_users = $this->model_catalog_container->getContainerShipmentOwner($container_id);
					if($container_users){
						foreach ($container_users as $user_item) {
							if (!in_array($user_item['shipment_id'], $existing_shipment)){
								$this->model_catalog_manager->addNotification(array(
									'user_id' => $user_item['user_id'],
									'type' => 'container',
									'type_id' => $container_id,
									'message' => 'Your shipment #' . $user_item['shipment_id'] . ' was added to container #' . $user_item['container_no']
								));

								$subject = "HM-Cargo Container";
								$message = "<p>Your shipment #" . $user_item['shipment_id'] . " was added to container #" . $user_item['container_no'] . "</p>";
								$message .= '<a href="' . $this->request->post['container_link'] . $container_id . '">View Changes</a>';
								if(isset($user_item['email'])){
								    $this->sendmail('support@hmcargollc.com',$user_item['email'],'HM-Cargollc',$subject,$message);
								}
							} else if(!$same_detected){
								$this->model_catalog_manager->addNotification(array(
									'user_id' => $user_item['user_id'],
									'type' => 'container',
									'type_id' => $container_id,
									'message' => 'Container #' . $user_item['container_no'] . ' was updated.'
								));

								$subject = "HM-Cargo Container";
								$message = "<p>Container #" . $user_item['container_no'] . " was updated.</p>";
								$message .= '<a href="' . $this->request->post['container_link'] . $container_id . '">View Changes</a>';
								if(isset($user_item['email'])){
								    //$this->sendmail('support@hmcargollc.com',$user_item['email'],'HM-Cargollc',$subject,$message);
								}

							}
						}
					}
				}
			} else {
				if(isset($this->request->post['history']) && isset($this->request->post['history']['container_status_id']) && !empty($this->request->post['history']['container_status_id'])){
					$container_users = $this->model_catalog_container->getContainerShipmentOwner($container_id);
					if($container_users){
						foreach ($container_users as $user_item) {
							$this->model_catalog_manager->addNotification(array(
								'user_id' => $user_item['user_id'],
								'type' => 'container',
								'type_id' => $container_id,
								'message' => 'Your shipment #' . $user_item['shipment_id'] . ' was added to container #' . $user_item['container_no']
							));

							$subject = "HM-Cargo Container";
							$message = "<p>Container #" . $user_item['container_no'] . " of your shipment #" . $user_item['shipment_id'] . " status was updated.</p>";
							$message .= '<a href="' . $this->request->post['container_link'] . $container_id . '">View Changes</a>';
							if(isset($user_item['email'])){
							    $this->sendmail('support@hmcargollc.com',$user_item['email'],'HM-Cargollc',$subject,$message);
							}

						}
					}
				}
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
