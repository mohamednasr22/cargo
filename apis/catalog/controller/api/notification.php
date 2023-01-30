<?php
class ControllerApiNotification extends Controller {
	public function index() {
		$json = array();
		if (isset($this->request->post['branch_code']) && isset($this->request->post['driver_code'])) {
			$this->load->model('account/notification');
			$result = $this->model_account_notification->add($this->request->post['branch_code'],$this->request->post['driver_code'],$this->request->post['message']);
			if($result){
				$json['success'] = 'Added Successfully.';
			} else {
				$json['error'] = 'cant add please contact lets feast team.';
			}
		} else {
			$json['error'] = 'cant add please contact lets feast team.';
		}

		$this->response->addHeader('Content-Type: application/json');
		$this->response->setOutput(json_encode($json));
	}
	
	public function pending(){
		$post_data = json_decode(file_get_contents('php://input'), true);
		$json = array();
		$json['data'] = array();
		if (isset($post_data['token'])) {
			if (isset($post_data['driver_code'])) {
				$this->load->model('account/notification');
				$result = $this->model_account_notification->pending($post_data['driver_code']);
				
				if($result){
					foreach($result as $item){
						$item['message'] = json_decode($item['message'],true);
						$json['data'][] = $item;
					}
				}
			}
		}
		$this->response->addHeader('Content-Type: application/json');
		$this->response->setOutput(json_encode($json));
	}
	
	public function received(){
		$post_data = json_decode(file_get_contents('php://input'), true);
		$json = array();
		$json['data'] = array();
		if (isset($post_data['token'])) {
			if (isset($post_data['id'])) {
				$this->load->model('account/notification');
				$result = $this->model_account_notification->received($post_data['id']);
				if($result){
					$json['data'] = $result;
				}
			}
		}
		$this->response->addHeader('Content-Type: application/json');
		$this->response->setOutput(json_encode($json));
	}
	
	
}
