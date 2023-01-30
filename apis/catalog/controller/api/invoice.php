<?php
class ControllerApiInvoice extends Controller {
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
			if(isset($this->request->post['invoice_id'])){
				$this->load->model('catalog/invoice');
				$result = $this->model_catalog_invoice->deleteInvoice($this->request->post['invoice_id']);
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
			if(isset($this->request->post['invoice_id'])){
				$this->load->model('catalog/invoice');
				$result = $this->model_catalog_invoice->getInvoice($this->request->post['invoice_id']);

				if($result){
					$history_array = array();
					$server = $this->request->server['HTTPS'] ? HTTPS_SERVER : HTTP_SERVER;
					$history_data = $this->model_catalog_invoice->getInvoiceHistory($this->request->post['invoice_id']);
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
			if(isset($this->request->post['invoice_id'])){
				$this->load->model('catalog/invoice');
				$result = $this->model_catalog_invoice->getInvoice($this->request->post['invoice_id']);
				if($result){
					$_array = array();
					$server = $this->request->server['HTTPS'] ? HTTPS_SERVER : HTTP_SERVER;
					$_data = $this->model_catalog_invoice->getInvoiceFiles($this->request->post['invoice_id']);
					foreach ($_data as $item) {
						if($item['filename'] && $item['filename'] != ''){
							$fitem = $item;
							$fitem['file'] = $server . 'data/upload/' . $item['filename'];
							$fitem['codepath'] = $server . 'index.php?route=api/manager/download&code=' . $item['code'];
							$_array[] = $fitem;
						}

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


			if(isset($this->request->post['invoice_id'])){
				$this->load->model('catalog/invoice');
				if(isset($this->request->files['files'])){
					$filename = $this->upload($this->request->files['files'],'file');
					$_file = isset($filename['code']) ? $filename['code'] : '';
					if($_file){
						$_data = array(
							'user_id' => $jwt->user_id,
							'invoice_id' => $this->request->post['invoice_id'],
							'file' => $_file
						);

						$result = $this->model_catalog_invoice->addInvoiceFile($_data);
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
			$this->load->model('catalog/invoice');

			if(isset($this->request->post['invoice_id']) && isset($this->request->post['file_id'])){
				$result = $this->model_catalog_invoice->getInvoiceFile($this->request->post['invoice_id'] , $this->request->post['file_id']);
				if($result){
					$path = DIR_FILES_UPLOAD . $result['filename'];
					if (is_file($path)) {
						unlink($path);
					}
					$this->model_catalog_invoice->deleteInvoiceFile($result);
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

	public function get() {
		$json = array();
		$post_data = json_decode(file_get_contents('php://input'), true);
		$credentials = $this->request->getBearerToken();
		$jwt = JWT::decode($credentials, JWT::getPassKey());
		if ($jwt->email) {
			if(isset($this->request->post['invoice_id'])){
				$this->load->model('catalog/invoice');
				$this->load->model('account/user');
				$result = $this->model_catalog_invoice->getInvoice($this->request->post['invoice_id']);
				$container_data = array();
				if($result){
					$server = $this->request->server['HTTPS'] ? HTTPS_SERVER : HTTP_SERVER;
					$history_array = array();
					$history_data = $this->model_catalog_invoice->getInvoiceHistory($this->request->post['invoice_id']);
					foreach ($history_data as $item) {
						$hitem = $item;
						if($item['filename'] && $item['filename'] != ''){
							$hitem['file'] = $server . 'data/upload/' . $item['filename'];
						}

						$history_array[] = $hitem;
					}
					$container_data['data'] = $result;
					$container_data['history'] = $history_array;
					if($result){
						$container_data['user'] = $this->model_account_user->getUserMini($result['user_id']);
					}

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
			$this->load->model('catalog/invoice');
			$permissions = json_decode(html_entity_decode($jwt->permission),true);
			$isAdmin = false;
			if(isset($permissions['accounting']['showall'])){
				$isAdmin = $permissions['accounting']['showall'] ? true : false;
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
			$limit = 20;


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

			$result = $this->model_catalog_invoice->getInvoices($_data);
			$result_total = $this->model_catalog_invoice->getTotalInvoices($_data);
			$json['items'] = $result;
			$json['total'] = $result_total;
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
			$this->load->model('catalog/invoice');
			$saved_user_id = $jwt->user_id;
			if(isset($this->request->post['assigned_user_id'])){
				$saved_user_id = $this->request->post['assigned_user_id'];
			}


			//container data
			$container_data = array(
				'user_id' => $saved_user_id,
				'shipper_id' => $this->request->post['invoice']['shipper_id'],
				'container_no' => $this->request->post['invoice']['container_no'],
				'booking_no' => $this->request->post['invoice']['booking_no'],
				'invoice_no' => $this->request->post['invoice']['invoice_no'],
				'amount' => $this->request->post['invoice']['amount'],
				'paid' => $this->request->post['invoice']['paid'],
				'invoice_type_id' => $this->request->post['invoice']['invoice_type_id'],
			);

			if(isset($this->request->post['invoice_id'])){
				$invoice_id = $this->request->post['invoice_id'];
				$this->model_catalog_invoice->updateInvoice($invoice_id,$container_data);
			} else {
				$invoice_id = $this->model_catalog_invoice->addInvoice($container_data);
			}

			// history data


			if(isset($this->request->post['history'])){
				$history_file = '';
				if(isset($this->request->files['history'])){

					$filename = $this->upload($this->request->files['history'],'file');
					$history_file = isset($filename['code']) ? $filename['code'] : '';
				}

				$history_data = array(
					'user_id' => $jwt->user_id,
					'date' => isset($this->request->post['history']['date']) ? $this->request->post['history']['date'] : '',
					'invoice_id' => $invoice_id,
					'note' => isset($this->request->post['history']['note']) ? $this->request->post['history']['note'] : '',
					'file' => $history_file
				);

				$result = $this->model_catalog_invoice->addInvoiceHistory($history_data);

			}




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
