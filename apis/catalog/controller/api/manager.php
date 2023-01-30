<?php
class ControllerApiManager extends Controller {
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

	public function download(){
		if (isset($this->request->get['code'])) {
			$code = $this->request->get['code'];
		} else {
			$code = 0;
		}

		$this->load->model('tool/upload');

		$upload_info = $this->model_tool_upload->getUploadByCode($code);

		if ($upload_info) {
			$file = DIR_FILES_UPLOAD . $upload_info['filename'];
			$mask = basename($upload_info['name']);

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
	}



	public function excel() {

		$json = array();
		$post_data = json_decode(file_get_contents('php://input'), true);
		$credentials = $this->request->getBearerToken();
		$jwt = JWT::decode($credentials, JWT::getPassKey());
		if ($jwt->email) {
			$json['data'] = $this->excel_to_array(DIR_FILES_UPLOAD . 'locations.xlsx');
		} else {
			$json['error'] = 'access denied.';
		}
		$this->response->addHeader('Content-Type: application/json');
		$this->response->setOutput(json_encode($json));
	}

	public function updateexcel() {

		$json = array();
		$post_data = json_decode(file_get_contents('php://input'), true);
		$credentials = $this->request->getBearerToken();
		$jwt = JWT::decode($credentials, JWT::getPassKey());
		if ($jwt->email) {
			if(isset($this->request->files['file'])){
				try {
					$this->excel_to_array($this->request->files['file']['tmp_name']);
					$excel_data = $this->upload($this->request->files['file']);
					if(isset($excel_data['success'])){
						$json['data'] = $this->excel_to_array(DIR_FILES_UPLOAD . 'locations.xlsx');
					}
				} catch(Exception $e) {

		    }
			}
		} else {
			$json['error'] = 'access denied.';
		}
		$this->response->addHeader('Content-Type: application/json');
		$this->response->setOutput(json_encode($json));
	}

	public function getnotifications(){
		$json = array();
		$post_data = json_decode(file_get_contents('php://input'), true);
		$credentials = $this->request->getBearerToken();
		$jwt = JWT::decode($credentials, JWT::getPassKey());
		if ($jwt->email) {
			$this->load->model('catalog/manager');
			$json['data'] = $this->model_catalog_manager->getNotifications(array('user_id' => $jwt->user_id));
			$json['total'] = $this->model_catalog_manager->getNotSeenNotifications(array('user_id' => $jwt->user_id));



		} else {
			$json['error'] = 'access denied.';
		}
		$this->response->addHeader('Content-Type: application/json');
		$this->response->setOutput(json_encode($json));
	}

	public function seennotifications(){
		$json = array();
		$post_data = json_decode(file_get_contents('php://input'), true);
		$credentials = $this->request->getBearerToken();
		$jwt = JWT::decode($credentials, JWT::getPassKey());
		if ($jwt->email) {
			$this->load->model('catalog/manager');
			$this->model_catalog_manager->seenNotifications(array('user_id' => $jwt->user_id));
		} else {
			$json['error'] = 'access denied.';
		}
		$this->response->addHeader('Content-Type: application/json');
		$this->response->setOutput(json_encode($json));
	}

	public function getsettings(){
		$json = array();
		$post_data = json_decode(file_get_contents('php://input'), true);
		$credentials = $this->request->getBearerToken();
		$jwt = JWT::decode($credentials, JWT::getPassKey());
		if ($jwt->email) {
			$this->load->model('setting/setting');
			$json['data'] = array(
				'owner_name' => $this->config->get('module_cargo_setting_owner_name'),
				'owner_email' => $this->config->get('module_cargo_setting_owner_email'),
				'shipment_pending' => $this->config->get('module_cargo_setting_shipment_pending'),
				'default_user_group' => $this->config->get('module_cargo_setting_default_user_group'),
				'shared_container_id' => $this->config->get('module_cargo_setting_shared_container_id'),
				'eta_reminder' => $this->config->get('module_cargo_setting_eta_reminder')
			);
		} else {
			$json['error'] = 'access denied.';
		}
		$this->response->addHeader('Content-Type: application/json');
		$this->response->setOutput(json_encode($json));
	}

	public function savesettings(){
		$json = array();
		$post_data = json_decode(file_get_contents('php://input'), true);
		$credentials = $this->request->getBearerToken();
		$jwt = JWT::decode($credentials, JWT::getPassKey());
		if ($jwt->email) {
			if(isset($this->request->post['owner_name']) && isset($this->request->post['owner_email']) && isset($this->request->post['shipment_pending']) && isset($this->request->post['default_user_group']) && isset($this->request->post['eta_reminder'])){
				$this->load->model('setting/setting');
				$sdata = array(
					'module_cargo_setting_owner_name' => $this->request->post['owner_name'],
					'module_cargo_setting_owner_email' => $this->request->post['owner_email'],
					'module_cargo_setting_shipment_pending' => $this->request->post['shipment_pending'],
					'module_cargo_setting_default_user_group' => $this->request->post['default_user_group'],
					'module_cargo_setting_shared_container_id' => $this->request->post['shared_container_id'],
					'module_cargo_setting_eta_reminder' => $this->request->post['eta_reminder'],
				);
				$this->model_setting_setting->editSetting('module_cargo_setting',$sdata);

				$json['success'] = 'Data saved';
			} else {
				$json['error'] = 'Data missing.';
			}
		} else {
			$json['error'] = 'access denied.';
		}
		$this->response->addHeader('Content-Type: application/json');
		$this->response->setOutput(json_encode($json));
	}

	public function downloadexcel() {

		$file = DIR_FILES_UPLOAD . 'locations.xlsx';
		$mask = basename('locations.xlsx');

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
				exit('Error: Could not find file!');
			}
		} else {
			exit('Error: Headers already sent out!');
		};
	}


	private function excel_to_array($inputFileName,$row_callback=null){
    if (!class_exists('PHPExcel')) return false;
    try {
        $inputFileType = PHPExcel_IOFactory::identify($inputFileName);
        $objReader = PHPExcel_IOFactory::createReader($inputFileType);
        $objPHPExcel = $objReader->load($inputFileName);
    } catch(Exception $e) {
        return ('Error loading file "'.pathinfo($inputFileName,PATHINFO_BASENAME).'": '.$e->getMessage());
    }
    $sheet = $objPHPExcel->getSheet(0);
    $highestRow = $sheet->getHighestRow();
    $highestColumn = $sheet->getHighestColumn();
    $keys = array();
    $results = array();
    if(is_callable($row_callback)){
        for ($row = 1; $row <= $highestRow; $row++){
            $rowData = $sheet->rangeToArray('A' . $row . ':' . $highestColumn . $row,null,true,false);

            if ($row === 1){
                $keys = $rowData[0];
            } else {
                $record = array();
                foreach($rowData[0] as $pos=>$value) $record[$keys[$pos]] = $value;
                $row_callback($record);
            }
        }
    } else {
        for ($row = 1; $row <= $highestRow; $row++){
            $rowData = $sheet->rangeToArray('A' . $row . ':' . $highestColumn . $row,null,true,false);
						if ($row === 1){
                $keys = $rowData[0];
            } else {
                $record = array();
                foreach($rowData[0] as $pos=>$value) $record[$keys[$pos]] = $value;
                $results[] = $record;
            }
        }
        return $results;
    }
}
private function upload($_file){
	$json = array();

	if (!empty($_file['name']) && is_file($_file['tmp_name'])) {
		// Sanitize the filename
		$filename = basename(preg_replace('/[^a-zA-Z0-9\.\-\s+]/', '', html_entity_decode($_file['name'], ENT_QUOTES, 'UTF-8')));

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
			//$json['error'] = $this->language->get('error_filetype');
		}

		// Allowed file mime types
		$allowed = array();

		$mime_allowed = preg_replace('~\r?\n~', "\n", $this->config->get('config_file_mime_allowed'));

		$filetypes = explode("\n", $mime_allowed);

		foreach ($filetypes as $filetype) {
			$allowed[] = trim($filetype);
		}

		if (!in_array($_file['type'], $allowed)) {
			//$json['error'] = $this->language->get('error_filetype');
		}

		// Check to see if any PHP files are trying to be uploaded
		$content = file_get_contents($_file['tmp_name']);

		if (preg_match('/\<\?php/i', $content)) {
			//$json['error'] = $this->language->get('error_filetype');
		}

		// Return any upload error
		if ($_file['error'] != UPLOAD_ERR_OK) {
			$json['error'] = $this->language->get('error_upload_' . $_file['error']);
		}
	} else {
		$json['error'] = $this->language->get('error_upload');
	}

	if (!$json) {

		move_uploaded_file($_file['tmp_name'], DIR_FILES_UPLOAD . 'locations.xlsx');
		$json['success'] = $this->language->get('text_upload');
	}

	return $json;
}

	public function getshipmentstatuses() {
		$json = array();
		$post_data = json_decode(file_get_contents('php://input'), true);
		$credentials = $this->request->getBearerToken();
		$jwt = JWT::decode($credentials, JWT::getPassKey());
		if ($jwt->email) {
			$this->load->model('catalog/manager');

			$result = $this->model_catalog_manager->getShipmentStatuses();
			if($result){
				$json['data'] = $result;
			}
		} else {
			$json['error'] = 'access denied.';
		}

		$this->response->addHeader('Content-Type: application/json');
		$this->response->setOutput(json_encode($json));
	}

	public function getcontainerstatuses() {
		$json = array();
		$post_data = json_decode(file_get_contents('php://input'), true);
		$credentials = $this->request->getBearerToken();
		$jwt = JWT::decode($credentials, JWT::getPassKey());

		if ($jwt->email) {
			$this->load->model('catalog/manager');

			$result = $this->model_catalog_manager->getContainerStatuses();
			if($result){
				$json['data'] = $result;
			}
		} else {
			$json['error'] = 'access denied.';
		}

		$this->response->addHeader('Content-Type: application/json');
		$this->response->setOutput(json_encode($json));
	}

	public function getinvoicestatuses() {
		$json = array();
		$post_data = json_decode(file_get_contents('php://input'), true);
		$credentials = $this->request->getBearerToken();
		$jwt = JWT::decode($credentials, JWT::getPassKey());

		if ($jwt->email) {
			$this->load->model('catalog/manager');

			$result = $this->model_catalog_manager->getInvoiceStatuses();
			if($result){
				$json['data'] = $result;
			}
		} else {
			$json['error'] = 'access denied.';
		}

		$this->response->addHeader('Content-Type: application/json');
		$this->response->setOutput(json_encode($json));
	}

	public function getinvoicetypes() {
		$json = array();
		$post_data = json_decode(file_get_contents('php://input'), true);
		$credentials = $this->request->getBearerToken();
		$jwt = JWT::decode($credentials, JWT::getPassKey());

		if ($jwt->email) {
			$this->load->model('catalog/manager');

			$result = $this->model_catalog_manager->getInvoiceTypes();
			if($result){
				$json['data'] = $result;
			}
		} else {
			$json['error'] = 'access denied.';
		}

		$this->response->addHeader('Content-Type: application/json');
		$this->response->setOutput(json_encode($json));
	}

	public function getdestinations() {
		$json = array();
		$post_data = json_decode(file_get_contents('php://input'), true);
		$credentials = $this->request->getBearerToken();
		$jwt = JWT::decode($credentials, JWT::getPassKey());

		if ($jwt->email) {
			$this->load->model('catalog/manager');

			$result = $this->model_catalog_manager->getDestinations();
			if($result){
				$json['data'] = $result;
			}
		} else {
			$json['error'] = 'access denied.';
		}

		$this->response->addHeader('Content-Type: application/json');
		$this->response->setOutput(json_encode($json));
	}

	public function getcontainertypes() {
		$json = array();
		$post_data = json_decode(file_get_contents('php://input'), true);
		$credentials = $this->request->getBearerToken();
		$jwt = JWT::decode($credentials, JWT::getPassKey());

		if ($jwt->email) {
			$this->load->model('catalog/manager');

			$result = $this->model_catalog_manager->getContainerTypes();
			if($result){
				$json['data'] = $result;
			}
		} else {
			$json['error'] = 'access denied.';
		}

		$this->response->addHeader('Content-Type: application/json');
		$this->response->setOutput(json_encode($json));
	}

	public function getshippertypes() {
		$json = array();
		$post_data = json_decode(file_get_contents('php://input'), true);
		$credentials = $this->request->getBearerToken();
		$jwt = JWT::decode($credentials, JWT::getPassKey());

		if ($jwt->email) {
			$this->load->model('catalog/manager');

			$result = $this->model_catalog_manager->getShipperTypes();
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

			$this->load->model('catalog/manager');

			$set_data = array(
				'name' => $this->request->post['name'],
				'url' => isset($this->request->post['url']) ? $this->request->post['url'] : '',
				'sort_order' => isset($this->request->post['sort_order']) ? $this->request->post['sort_order'] : '0',
				'status' => $this->request->post['status']
			);


			if(isset($this->request->post['type'])){
				if(isset($this->request->post['id']) && !empty($this->request->post['id'])){

					if($this->request->post['type'] == "container_type"){
						$this->model_catalog_manager->updateContainerType($this->request->post['id'],$set_data);
					}

					if($this->request->post['type'] == "courier"){
						$this->model_catalog_manager->updateCourier($this->request->post['id'],$set_data);
					}

					if($this->request->post['type'] == "warehouse"){
						$this->model_catalog_manager->updateWarehouse($this->request->post['id'],$set_data);
					}

					if($this->request->post['type'] == "container_status"){
						$this->model_catalog_manager->updateContainerStatus($this->request->post['id'],$set_data);
					}

					if($this->request->post['type'] == "destination"){
						$this->model_catalog_manager->updateDestination($this->request->post['id'],$set_data);
					}

					if($this->request->post['type'] == "shipment_status"){
						$this->model_catalog_manager->updateShipmentStatus($this->request->post['id'],$set_data);
					}

					if($this->request->post['type'] == "shipper_type"){
						$this->model_catalog_manager->updateShipperType($this->request->post['id'],$set_data);
					}

					if($this->request->post['type'] == "invoice_type"){
						$this->model_catalog_manager->updateInvoiceType($this->request->post['id'],$set_data);
					}

					if($this->request->post['type'] == "invoice_status"){
						$this->model_catalog_manager->updateInvoiceStatus($this->request->post['id'],$set_data);
					}

				} else {

					if($this->request->post['type'] == "container_type"){
						$this->model_catalog_manager->addContainerTypes($set_data);
					}

					if($this->request->post['type'] == "courier"){
						$this->model_catalog_manager->addCourier($set_data);
					}

					if($this->request->post['type'] == "warehouse"){
						$this->model_catalog_manager->addWarehouse($set_data);
					}

					if($this->request->post['type'] == "container_status"){
						$this->model_catalog_manager->addContainerStatuses($set_data);
					}

					if($this->request->post['type'] == "destination"){
						$this->model_catalog_manager->addDestination($set_data);
					}

					if($this->request->post['type'] == "shipment_status"){
						$this->model_catalog_manager->addShipmentStatuses($set_data);
					}

					if($this->request->post['type'] == "shipper_type"){
						$this->model_catalog_manager->addShipperTypes($set_data);
					}

					if($this->request->post['type'] == "invoice_type"){
						$this->model_catalog_manager->addInvoiceTypes($set_data);
					}

					if($this->request->post['type'] == "invoice_status"){
						$this->model_catalog_manager->addInvoiceStatuses($set_data);
					}

				}

				$json['success'] = 'date updated.';

			}

		} else {
			$json['error'] = 'access denied.';
		}

		$this->response->addHeader('Content-Type: application/json');
		$this->response->setOutput(json_encode($json));
	}

	public function getcouriers() {
		$json = array();
		$post_data = json_decode(file_get_contents('php://input'), true);
		$credentials = $this->request->getBearerToken();
		$jwt = JWT::decode($credentials, JWT::getPassKey());

		if ($jwt->email) {
			$this->load->model('catalog/manager');

			$result = $this->model_catalog_manager->getCouriers();
			if($result){
				$json['data'] = $result;
			}
		} else {
			$json['error'] = 'access denied.';
		}

		$this->response->addHeader('Content-Type: application/json');
		$this->response->setOutput(json_encode($json));
	}

	public function getwarehouses() {
		$json = array();
		$post_data = json_decode(file_get_contents('php://input'), true);
		$credentials = $this->request->getBearerToken();
		$jwt = JWT::decode($credentials, JWT::getPassKey());

		if ($jwt->email) {
			$this->load->model('catalog/manager');

			$result = $this->model_catalog_manager->getWarehouses();
			if($result){
				$json['data'] = $result;
			}
		} else {
			$json['error'] = 'access denied.';
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
			$this->load->model('catalog/manager');
			if(isset($this->request->post['type'])){
				if(isset($this->request->post['id']) && !empty($this->request->post['id'])){

					if($this->request->post['type'] == "container_type"){
						$this->model_catalog_manager->deleteContainerType($this->request->post['id']);
					}

					if($this->request->post['type'] == "courier"){
						$this->model_catalog_manager->deleteCourier($this->request->post['id']);
					}

					if($this->request->post['type'] == "warehouse"){
						$this->model_catalog_manager->deleteWarehouse($this->request->post['id']);
					}

					if($this->request->post['type'] == "destination"){
						$this->model_catalog_manager->deleteDestination($this->request->post['id']);
					}

					if($this->request->post['type'] == "shipment_status"){
						$this->model_catalog_manager->deleteShipmentStatus($this->request->post['id']);
					}

					if($this->request->post['type'] == "shipper_type"){
						$this->model_catalog_manager->deleteShipperType($this->request->post['id']);
					}

					if($this->request->post['type'] == "invoice_type"){
						$this->model_catalog_manager->deleteInvoiceType($this->request->post['id']);
					}

					if($this->request->post['type'] == "invoice_status"){
						$this->model_catalog_manager->deleteInvoiceStatus($this->request->post['id']);
					}

					$json['success'] = 'date deleted.';

				}
			}
		} else {
			$json['error'] = 'access denied.';
		}

		$this->response->addHeader('Content-Type: application/json');
		$this->response->setOutput(json_encode($json));
	}





}
