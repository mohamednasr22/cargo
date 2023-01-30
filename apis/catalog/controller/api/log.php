<?php

class ControllerApiLog extends Controller {
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
	
	public function request(){
		$post_data = json_decode(file_get_contents('php://input'), true);
		if(isset($post_data['name'])){
			$this->db->query("UPDATE " . DB_PREFIX . "monitor_req SET count = count + 1 WHERE name = '" . $this->db->escape($post_data['name']) . "'");
		}
		
	}
	
	public function add() {
		$post_data = json_decode(file_get_contents('php://input'), true);
		$json = array();
		if (isset($post_data['type'])) {
			$log = new Log('nativelog.txt');
			date_default_timezone_set($this->config->get('date_timezone'));
			if($post_data['type'] == 'NativeException'){
				$post_type = $post_data['type'];
				$post_error = isset($post_data['error']) ? $post_data['error'] : array();
				if(is_array($post_data['type'])){
					$post_type = implode("|",$post_type);
					$post_error = implode("|",$post_error);
				}
				$log->write($post_type . ' : ' . $post_error);
			} else {
				$post_type = $post_data['type'];
				$post_error = isset($post_data['error']) ? $post_data['error'] : array();
				$post_isfatal = isset($post_data['isFatal']) ? $post_data['isFatal'] : array();
				if(is_array($post_data['type'])){
					$post_type = implode("|",$post_type);
					$post_error = implode("|" ,$post_error);
					$post_isfatal = implode("|",$post_isfatal);
				}
				$log->write($post_type . ' : ' . $post_error . ' --- ' . $post_isfatal . ' ;;;; ');
			}
			
		}
		

		


		$this->response->addHeader('Content-Type: application/json');
		$this->response->setOutput(json_encode($json));
	}
}
