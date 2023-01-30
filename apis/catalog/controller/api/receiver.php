<?php
class ControllerApiReceiver extends Controller {
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

	public function list() {
		$json = array();
		$post_data = json_decode(file_get_contents('php://input'), true);
		$credentials = $this->request->getBearerToken();
		$jwt = JWT::decode($credentials, JWT::getPassKey());
		if ($jwt->email) {
			$this->load->model('catalog/receiver');
			$isAdmin = false;
			$permissions = json_decode(html_entity_decode($jwt->permission),true);
			if(isset($permissions['general']['showreceiver'])){
				$isAdmin = $permissions['general']['showreceiver'] ? true : false;
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
				'sort' => isset($this->request->get['sort']) ? $this->request->get['sort'] : 'receiver_id',
				'order' => isset($this->request->get['order']) ? $this->request->get['order'] : 'ASC',
				'start' => ($page - 1) * $limit,
				'limit' => $limit,
				'filter' => $filter_items
			);
			$result = $this->model_catalog_receiver->getReceivers($_data);
			$result_total = $this->model_catalog_receiver->getTotalReceivers($_data);
			$json['filter'] = $filter_items;
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

			$this->load->model('catalog/receiver');

			$set_data = array(
				'user_id' => $jwt->user_id,
				'name' => $this->request->post['name'],
				'email' => $this->request->post['email'],
				'phone' => $this->request->post['phone'],
				'address' => $this->request->post['address'],
				'status' => $this->request->post['status']
			);

			if(isset($this->request->post['receiver_id'])){
				$receiver_id = $this->request->post['receiver_id'];
				$this->model_catalog_receiver->update($receiver_id,$set_data);
			} else {
				$receiver_id = $this->model_catalog_receiver->add($set_data);
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
			if(isset($this->request->post['receiver_id'])){
				$this->load->model('catalog/receiver');
				$result = $this->model_catalog_receiver->delete($this->request->post['receiver_id']);
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
}
