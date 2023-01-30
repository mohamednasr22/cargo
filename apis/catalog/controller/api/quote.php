<?php
class ControllerApiQuote extends Controller {
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

	public function getquote() {
		$json = array();
		$post_data = json_decode(file_get_contents('php://input'), true);
		$credentials = $this->request->getBearerToken();
		$jwt = JWT::decode($credentials, JWT::getPassKey());
		if ($jwt->email) {
			if(isset($this->request->post['date']) && isset($this->request->post['destination_id']) && isset($this->request->post['user_id'])){
				$this->load->model('catalog/quote');
				$params = array(
					'date' => $this->request->post['date'],
					'destination_id' => $this->request->post['destination_id'],
					'user_id' => $this->request->post['user_id']
				);
				$result = $this->model_catalog_quote->getQuote($params);

				if($result){
					$json['data'] = $result;
				}
			} else {
				$json['error'] = 'missing info.';
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
			$this->load->model('catalog/quote');
			$result = $this->model_catalog_quote->getQuotes();
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
			if(isset($this->request->post['user_id'])){
				$this->load->model('catalog/quote');
				$result = $this->model_catalog_quote->deleteQuote($this->request->post['user_id']);
				$json['success'] = 'yes';
			} else {
				$json['error'] = 'missing data.';
			}

		} else {
			$json['error'] = 'access denied.';
		}

		$this->response->addHeader('Content-Type: application/json');
		$this->response->setOutput(json_encode($json));
	}

	public function available() {
		$json = array();
		$post_data = json_decode(file_get_contents('php://input'), true);
		$credentials = $this->request->getBearerToken();
		$jwt = JWT::decode($credentials, JWT::getPassKey());
		if ($jwt->email) {
			if(isset($this->request->post['user_id'])){
				$this->load->model('catalog/quote');
				$result = $this->model_catalog_quote->getAvailableQuote($this->request->post['user_id']);
				if($result){
					$json['data'] = $result;
				}
			} else {
				$json['error'] = 'missing data.';
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
			if(isset($this->request->post['date']) && isset($this->request->post['data']) && isset($this->request->post['destination_id']) && isset($this->request->post['user_id'])){
				$this->load->model('catalog/quote');
				$params = array(
					'user_id' => $this->request->post['user_id'],
					'data' => $this->request->post['data'],
					'date' => $this->request->post['date'],
					'destination_id' => $this->request->post['destination_id']
				);
				if(isset($this->request->post['to_data'])){
					$params['to_data'] = $this->request->post['to_data'];
					$result = $this->model_catalog_quote->dublicateQuote($params);
				} else {
					$result = $this->model_catalog_quote->saveQuote($params);
				}

				if($result){
					$json['data'] = $result;
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
}
