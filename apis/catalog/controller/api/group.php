<?php
class ControllerApiGroup extends Controller {
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
			$this->load->model('account/user');
			$result = $this->model_account_user->getGroups();
			if($result){
				$json['data'] = $result;
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
			if(isset($this->request->post['user_group_id'])){
				$this->load->model('account/user');
				$result = $this->model_account_user->getGroup($this->request->post['user_group_id']);
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

	public function save() {
		$json = array();
		$post_data = json_decode(file_get_contents('php://input'), true);
		$credentials = $this->request->getBearerToken();
		$jwt = JWT::decode($credentials, JWT::getPassKey());
		if ($jwt->email) {
			$this->load->model('account/user');

			//container data
			if(isset($this->request->post['name'])){
				$submit_data = array(
					'name' => $this->request->post['name'],
					'permission' => $this->request->post['permission']
				);

				if(isset($this->request->post['user_group_id'])){
					$user_group_id = $this->request->post['user_group_id'];
					$this->model_account_user->updateGroup($user_group_id,$submit_data);
				} else {
					$user_group_id = $this->model_account_user->addGroup($submit_data);
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

	public function delete() {
		$json = array();
		$post_data = json_decode(file_get_contents('php://input'), true);
		$credentials = $this->request->getBearerToken();
		$jwt = JWT::decode($credentials, JWT::getPassKey());
		if ($jwt->email) {
			$this->load->model('account/user');

			if(isset($this->request->post['user_group_id'])){
				$this->model_account_user->deleteGroup($this->request->post['user_group_id']);
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

}
