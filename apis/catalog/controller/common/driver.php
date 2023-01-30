<?php
class ControllerCommonDriver extends Controller {
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
	
	
	public function verifyPassword() {
		
		$json = array();

		if (isset($this->request->get['key'])) {
			
			if (isset($this->request->post['email']) && isset($this->request->post['password'])) {
				
				$this->load->model('account/driver');
				
				$result = $this->model_account_driver->login($this->request->post['email'] , $this->request->post['password']);
				if($result['driver_id']){
					$json['token'] = $result['token'];
					$json['refresh_token'] = $result['refresh_token'];
					$json['expire'] = $result['expire'];
					$json['code'] = $result['code'];
				} else {
					$json['error'] = 'Email/Password is wrong';
				}
			}
		} else {
			$json['error'] = 'access denied';
		}

		$this->response->addHeader('Content-Type: application/json');
		$this->response->setOutput(json_encode($json));
	}
	
	
	
	public function signupNewDriver() {
		$json = array();
		$json['info'] = 'Hello';
		/*
		if (isset($this->request->get['key'])) {
			
			if (isset($this->request->post['email']) && isset($this->request->post['password']) && isset($this->request->post['mobile'])) {
				
				$this->load->model('account/driver');
				
				
				
				if(!$this->model_account_driver->getDriverByEmail($this->request->post['email']) || !$this->model_account_driver->getDriverByMobile($this->request->post['mobile'])){
					
					$json['info'] = 'Enter!';
					
					$driver_data = array(
						'email' => $this->request->post['email'],
						'mobile' => $this->request->post['mobile'],
						'password' => $this->request->post['password']
					);
					$result = $this->model_account_driver->addDriver($driver_data);
					if($result['driver_id']){
						$json['token'] = $result['token'];
						$json['refresh_token'] = $result['refresh_token'];
						$json['expire'] = $result['expire'];
						$json['code'] = $result['code'];
						$json['email'] = $result['email'];
						$json['mobile'] = $result['mobile'];
					} else {
						$json['info'] = 'No driver!';
					}
				} else {
					$json['error'] = 'Email/Mobile already exist!';
				}
				
			} else {
				$json['error'] = 'no post';
			}
			
		} else {
			$json['error'] = 'access is denied';
		}
		*/
		

		$this->response->addHeader('Content-Type: application/json');
		$this->response->setOutput(json_encode($json));
	}
	
	public function refreshToken() {
		
		$json = array();

		if (isset($this->request->get['key'])) {
			
			if (isset($this->request->post['refresh_token'])) {
				
				$this->load->model('account/driver');
				$driver = $this->model_account_driver->getDriverByRefreshToken($this->request->post['refresh_token']);
				if($driver){
					$result = $this->model_account_driver->refreshDriverToken($driver['driver_id']);
					if($result['driver_id']){
						$json['token'] = $result['token'];
						$json['refresh_token'] = $result['refresh_token'];
						$json['expire'] = $result['expire'];
						$json['code'] = $result['code'];
						$json['email'] = $result['email'];
						$json['mobile'] = $result['mobile'];
					}
				}
			}
		} else {
			$json['error'] = 'access denied';
		}

		$this->response->addHeader('Content-Type: application/json');
		$this->response->setOutput(json_encode($json));
	}
	
	
}
