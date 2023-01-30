<?php
class DumpHTTPRequestToFile {
	public function execute($targetFile) {
		$data = sprintf(
			"%s %s %s\n\nHTTP headers:\n",
			$_SERVER['REQUEST_METHOD'],
			$_SERVER['REQUEST_URI'],
			$_SERVER['SERVER_PROTOCOL']
		);
		foreach ($this->getHeaderList() as $name => $value) {
			$data .= $name . ': ' . $value . "\n";
		}
		$data .= "\nRequest body:\n";
		file_put_contents(
			$targetFile,
			$data . file_get_contents('php://input') . "\n"
		);
		echo("Done!\n\n");
	}
	private function getHeaderList() {
		$headerList = [];
		foreach ($_SERVER as $name => $value) {
			if (preg_match('/^HTTP_/',$name)) {
				// convert HTTP_HEADER_NAME to Header-Name
				$name = strtr(substr($name,5),'_',' ');
				$name = ucwords(strtolower($name));
				$name = strtr($name,' ','-');
				// add to list
				$headerList[$name] = $value;
			}
		}
		return $headerList;
	}
}

class ControllerApiAuthenticate extends Controller {
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

	public function login() {
		$json = array();
		$json['error'] = 'access denied';
		$this->response->addHeader('Content-Type: application/json');
		$this->response->setOutput(json_encode($json));
	}


	public function verifyPassword() {
		$post_data = json_decode(file_get_contents('php://input'), true);
		$json = array();

		if (isset($this->request->get['key'])) {

			if (isset($post_data['email']) && isset($post_data['password'])) {

				$this->load->model('account/driver');

				$result = $this->model_account_driver->login($post_data['email'] , $post_data['password']);
				if($result['driver_id']){
					$json['token'] = $result['token'];
					$json['refresh_token'] = $result['refresh_token'];
					$json['expire'] = $result['expire'];
					$json['code'] = $result['code'];
					$json['online'] = $result['online'];
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

	public function forgetpassword() {
		$post_data = json_decode(file_get_contents('php://input'), true);
		$json = array();

		if (isset($this->request->get['key'])) {

			if (isset($post_data['email'])) {

				$this->load->model('account/driver');

				$result = $this->model_account_driver->getDriverByEmail($post_data['email']);
				if($result['driver_id']){
					$code = token(40);
					$this->db->query("UPDATE `" . DB_PREFIX . "driver` SET reset_code = '" . $this->db->escape($code) . "' WHERE LCASE(email) = '" . $this->db->escape(utf8_strtolower($result['email'])) . "'");

					$mail = new Mail($this->config->get('config_mail_engine'));
					$mail->parameter = $this->config->get('config_mail_parameter');
					$mail->smtp_hostname = $this->config->get('config_mail_smtp_hostname');
					$mail->smtp_username = $this->config->get('config_mail_smtp_username');
					$mail->smtp_password = html_entity_decode($this->config->get('config_mail_smtp_password'), ENT_QUOTES, 'UTF-8');
					$mail->smtp_port = $this->config->get('config_mail_smtp_port');
					$mail->smtp_timeout = $this->config->get('config_mail_smtp_timeout');

					$mail->setTo($result['email']);
					$mail->setFrom($this->config->get('config_noreply'));
					$mail->setSender(html_entity_decode($this->config->get('config_name'), ENT_QUOTES, 'UTF-8'));
					$mail->setSubject(html_entity_decode(sprintf('Reset Password', html_entity_decode($this->config->get('config_name'), ENT_QUOTES, 'UTF-8')), ENT_QUOTES, 'UTF-8'));



					$body_mail = array();
					$body_mail['reset'] = str_replace('&amp;', '&', $this->url->link('account/reset', 'code=' . $code, true));

					$search = array('{{config_name}}','{{reset}}');

					$replace = array($this->config->get('config_name') , $data['reset']);

					$body_mail = str_replace($search,$replace,$body_mail);

					$mail->setHtml($this->load->view('mail/driver_reset', $data));
					$mail->send();

					$json['token'] = $result['token'];
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

	public function updateimage(){
		$post_data = json_decode(file_get_contents('php://input'), true);
		$json = array();
		$directory = rtrim(DIR_IMAGE . 'catalog/driver/');
		$json['data'] = $post_data['uri'];
		$image_parts = explode(";base64,", $post_data['uri']);
		$image_type_aux = explode("image/", $image_parts[0]);
		$image_type = $image_type_aux[1];
		$image_base64 = base64_decode($image_parts[1]);
		$file = $directory . $post_data['code'] . '.jpg';
		file_put_contents($file, $image_base64);
		$this->db->query("UPDATE " . DB_PREFIX . "driver SET image = '" . $this->db->escape('catalog/driver/' . $post_data['code'] . '.jpg') . "' WHERE code = '" . $this->db->escape($post_data['code']) . "'");
		$this->response->addHeader('Content-Type: application/json');
		$this->response->setOutput(json_encode($json));
	}



	public function signupNewDriver() {
		$post_data = json_decode(file_get_contents('php://input'), true);

		$json = array();

		if (isset($this->request->get['key'])) {

			if (isset($post_data['email']) && isset($post_data['password']) && isset($post_data['mobile']) && isset($post_data['first_name']) && isset($post_data['last_name'])) {
				$this->load->model('account/driver');
				if(!$this->model_account_driver->getDriverByEmail($post_data['email']) || !$this->model_account_driver->getDriverByMobile($post_data['mobile'])){

					$json['info'] = 'Enter!';

					$driver_data = array(
						'email' => $post_data['email'],
						'mobile' => $post_data['mobile'],
						'password' => $post_data['password'],
						'firstname' => $post_data['first_name'],
						'lastname' => $post_data['last_name']
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


		$this->response->addHeader('Content-Type: application/json');
		$this->response->setOutput(json_encode($json));
	}

	public function updatesortorder() {
		$post_data = json_decode(file_get_contents('php://input'), true);

		$json = array();

		if (isset($post_data['driver_token'])) {

			if (isset($post_data['driver_code']) && isset($post_data['sort_order'])) {

				$this->load->model('account/driver');

				$result = $this->model_account_driver->updateSortOrder($post_data['driver_code'] , $post_data['sort_order']);

				if($result){

					$json['success'] = 'Updated!';
				} else {
					$json['error'] = 'Email/Mobile already exist!';
				}

			} else {
				$json['error'] = 'missing driver code / status';
			}

		} else {
			$json['error'] = 'access is denied';
		}


		$this->response->addHeader('Content-Type: application/json');
		$this->response->setOutput(json_encode($json));
	}

	public function updateonlinestatus() {
		$post_data = json_decode(file_get_contents('php://input'), true);

		$json = array();

		if (isset($post_data['driver_token'])) {

			if (isset($post_data['driver_code']) && isset($post_data['online'])) {

				$this->load->model('account/driver');

				$result = $this->model_account_driver->updateOnlineStatus($post_data['driver_code'] , $post_data['online']);

				if($result){

					$json['success'] = 'Updated!';
				} else {
					$json['error'] = 'Email/Mobile already exist!';
				}

			} else {
				$json['error'] = 'missing driver code / status';
			}

		} else {
			$json['error'] = 'access is denied';
		}


		$this->response->addHeader('Content-Type: application/json');
		$this->response->setOutput(json_encode($json));
	}



	public function updatelocation() {
		$post_data = json_decode(file_get_contents('php://input'), true);

		$json = array();

		if (isset($post_data['driver_token'])) {

			if (isset($post_data['driver_code']) && isset($post_data['lat']) && isset($post_data['long']) && isset($post_data['heading'])) {

				$this->load->model('account/driver');

				$result = $this->model_account_driver->updateLocation($post_data['driver_code'] , $post_data['lat'], $post_data['long'], $post_data['heading']);

				if($result){
					$json['success'] = 'Updated!';
				} else {
					$json['error'] = 'Email/Mobile already exist!';
				}

			} else {
				$json['error'] = 'missing driver code / status';
			}

		} else {
			$json['error'] = 'access is denied';
		}


		$this->response->addHeader('Content-Type: application/json');
		$this->response->setOutput(json_encode($json));
	}

	public function getDriverByCode() {
		$json = array();
		if (isset($this->request->post['code'])) {
			$this->load->model('account/driver');
			$driver = $this->model_account_driver->getDriverByCode($this->request->post['code']);
			if($driver){
				$json['data'] = $driver;
			} else {
				$json['error'] = 'Driver not exist on lets feast.';
			}
		} else {
			$json['error'] = 'Code is required.';
		}

		$this->response->addHeader('Content-Type: application/json');
		$this->response->setOutput(json_encode($json));
	}



	public function connect() {
		$json = array();
		if (isset($this->request->post['code']) && isset($this->request->post['branch_code'])) {
			$this->load->model('account/driver');
			$this->load->model('account/branch');

			$driver = $this->model_account_driver->getDriverByCode($this->request->post['code']);
			$branch = $this->model_account_branch->getBranchByCode($this->request->post['branch_code']);
			if($driver && $branch){
				$connection = $this->model_account_branch->connectDriverToBranch($driver['driver_id'] , $branch['branch_id']);
				if($connection){
					$json['data'] = $driver;
				} else {
					$json['error'] = 'Branch already connected to the branch.';
				}
			} else {
				$json['error'] = 'Driver or Branch not exist on lets feast.';
			}
		} else {
			$json['error'] = 'Code is required.';
		}

		$this->response->addHeader('Content-Type: application/json');
		$this->response->setOutput(json_encode($json));
	}

	public function disconnect() {
		$json = array();
		if (isset($this->request->post['driver_id']) && isset($this->request->post['branch_code'])) {
			$this->load->model('account/branch');
			$branch = $this->model_account_branch->getBranchByCode($this->request->post['branch_code']);
			if($branch){
				$result = $this->model_account_branch->disconnectDriverFromBranch($this->request->post['driver_id'] , $branch['branch_id']);
				if($result){
					$json['data'] = 'Deleted successfully';
				} else {
					$json['error'] = 'Something wrong happen.';
				}
			} else {
				$json['error'] = 'Something wrong happen.';
			}
		} else {
			$json['error'] = 'Something wrong happen.';
		}

		$this->response->addHeader('Content-Type: application/json');
		$this->response->setOutput(json_encode($json));
	}



	public function refreshToken() {
		$post_data = json_decode(file_get_contents('php://input'), true);

		$json = array();

		if (isset($this->request->get['key'])) {

			if (isset($post_data['refresh_token'])) {

				$this->load->model('account/driver');
				$driver = $this->model_account_driver->getDriverByRefreshToken($post_data['refresh_token']);
				if($driver){
					$result = $this->model_account_driver->refreshDriverToken($driver['driver_id']);
					if($result['driver_id']){
						$json['token'] = $result['token'];
						$json['refresh_token'] = $result['refresh_token'];
						$json['expire'] = $result['expire'];
						$json['code'] = $result['code'];
						$json['email'] = $result['email'];
						$json['mobile'] = $result['mobile'];
						$json['online'] = $result['online'];
					}
				}
			}
		} else {
			$json['error'] = 'access denied';
		}

		$this->response->addHeader('Content-Type: application/json');
		$this->response->setOutput(json_encode($json));
	}

	public function locations() {
		$post_data = json_decode(file_get_contents('php://input'), true);
		if (isset($post_data['code']) && isset($post_data['location'])) {
			file_put_contents(DIR_LOGS . $post_data['code'] . '.txt', file_get_contents('php://input'));
		}
		/*
		(new DumpHTTPRequestToFile)->execute(DIR_LOGS . 'request.log');
		*/
	}
}
