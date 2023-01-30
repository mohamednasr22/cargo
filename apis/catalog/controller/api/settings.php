<?php
class ControllerApiSettings extends Controller {
	public function index() {
		$post_data = json_decode(file_get_contents('php://input'), true);
		$json = array();
		$this->load->model('account/messages');
		$json['version'] = $this->config->get('module_delivery_app_version') ? $this->config->get('module_delivery_app_version') : '';
		$json['terms_text'] = $this->config->get('module_delivery_app_terms') ? $this->config->get('module_delivery_app_terms') : '';
		$json['location_freq'] = $this->config->get('module_delivery_app_location_freq') ? $this->config->get('module_delivery_app_location_freq') : 30000;
		$json['orders_freq'] = $this->config->get('module_delivery_app_orders_freq') ? $this->config->get('module_delivery_app_orders_freq') : 30000;
		$json['distance_duration_filter'] = $this->config->get('module_delivery_app_distance_filter_freq') ? $this->config->get('module_delivery_app_distance_filter_freq') : 100;
		$json['messages'] = [];
		$json['branches'] = [];
		
		$result = $this->model_account_messages->getMessages();
		
		if($result){
			$json['messages'] = $result;
		} else {
			$json['error'] = 'empty';
		}
		
		if (isset($post_data['driver_code'])) {
			
			
			$this->load->model('account/driver');
			$branches = $this->model_account_driver->getBranchesByDriverCode($post_data['driver_code']);
			$json['driver'] = $this->model_account_driver->getMiniDriverByCode($post_data['driver_code']);
			
			if($branches){
				foreach($branches as $branch){
					$bitem = $branch;
					$bitem["id"] = $branch['branch_id'];
					$json['branches'][] = $bitem;
				}
			}
		}
		$this->response->addHeader('Content-Type: application/json');
		$this->response->setOutput(json_encode($json));
	}
	
	public function settings() {
		$json = array();
		$json['location_freq'] = $this->config->get('module_delivery_app_location_freq') ? $this->config->get('module_delivery_app_location_freq') : 30000;
		$this->response->addHeader('Content-Type: application/json');
		$this->response->setOutput(json_encode($json));
	}
	
	
	
	
	
	public function sendmessage() {
		$post_data = json_decode(file_get_contents('php://input'), true);
		$json = array();
		if (isset($post_data['phone']) && isset($post_data['message'])) {
			
			$message = urlencode($post_data['message']);
			$phone = $post_data['phone'];
			$n = ltrim($phone, '0');
			$pfx = '+44';
			$n = $pfx.$n;
			if (preg_match('/^(\+44\s?7\d{3}|\(?07\d{3}\)?)\s?\d{3}\s?\d{3}$/', $n)==TRUE) {
				$url = "http://textback.212hx14ne.rajas.co.uk/index.php/http_api/send_sms?login=SMSSender&pass=Sender**2019SMS&to=" . $n . "&message=" . $message;
				$contents = @file_get_contents($url);
				if($contents !== false){
					echo $contents;
				}
			} else {
			  
			}
		}

		$this->response->addHeader('Content-Type: application/json');
		$this->response->setOutput(json_encode($json));
	}
	
	
	
}
