<?php
class ControllerApiUser extends Controller {
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



	public function approve() {
		$json = array();
		$post_data = json_decode(file_get_contents('php://input'), true);
		if (isset($this->request->post['code'])) {
			$this->load->model('account/user');

			$result = $this->model_account_user->getUserByCode($this->request->post['code']);
			if($result){
				$this->model_account_user->approveUser($this->request->post['code']);
				$to = $result['email'];
				$subject = "Cargo Account Approved";
				$message = "<h2>Your account is approved successfully.</h2>";
				$message .= "<p>you can access and start your business</p>";

				$this->sendmail('support@hmcargollc.com',$to,'HM-Cargollc',$subject,$message);
				$json['success'] = 'Check your email please';



			} else {
					$json['error'] = 'Wrong Code';
			}
		} else {
			$json['error'] = 'Code is missing.';
		}

		$this->response->addHeader('Content-Type: application/json');
		$this->response->setOutput(json_encode($json));
	}

	public function resetpassword() {
		$json = array();
		$post_data = json_decode(file_get_contents('php://input'), true);
		if (isset($this->request->post['email'])) {
			$this->load->model('account/user');
			$temp_password = token(8);

			$account = $this->model_account_user->getUserByEmail($this->request->post['email']);
			if($account){
				$result = $this->model_account_user->resetPassword($this->request->post['email'],$temp_password);

				$to = $account['email'];
				$subject = "Cargo Reset Password";

				$message = "<h2>Use this password to access your account.</h2>";
				$message .= "<p>" . $temp_password . "</p>";

				$this->sendmail('support@hmcargollc.com',$to,'HM-Cargollc',$subject,$message);
				$json['success'] = 'Check your email please';

			} else {
				$json['error'] = 'There is no account with this email';
			}
		} else {
			$json['error'] = 'Wrong User / Password.';
		}

		$this->response->addHeader('Content-Type: application/json');
		$this->response->setOutput(json_encode($json));
	}


	public function register() {
		$json = array();
		$post_data = json_decode(file_get_contents('php://input'), true);
		if (isset($post_data['email']) && isset($post_data['password']) && isset($post_data['firstname']) && isset($post_data['lastname']) && isset($post_data['phone']) && isset($post_data['redirect'])) {
			$this->load->model('account/user');
			$data_array = array(
				'email' => $post_data['email'],
				'phone' => $post_data['phone'],
				'firstname' => $post_data['firstname'],
				'lastname' => $post_data['lastname'],
				'password' => $post_data['password'],
				'code' => token(20)
			);


			$exist = $this->model_account_user->getUserByEmail($post_data['email']);
			if($exist){
				$json['error'] = 'User email already exist.';
			} else {
				$result = $this->model_account_user->addUser($data_array);
				if($result){
					$jwt = JWT::encode($data_array, JWT::getPassKey());

					$to = $post_data['email'];

					$subject = "Cargo verification request";

					$message = '<h2>Please click on this link to verify your email.</h2>';
					$message .= '<p><a href="' . $post_data['redirect'] . '/' . $data_array['code'] . '">Activate your Account</a></p>';

					$this->sendmail('support@hmcargollc.com',$to,'HM-Cargollc',$subject,$message);
					$json['success'] = 'Check your email please';

				} else {
					$json['error'] = 'cant register try again later.';
				}
			}

		} else {
			$json['error'] = 'cant register try again later.';
		}

		$this->response->addHeader('Content-Type: application/json');
		$this->response->setOutput(json_encode($json));
	}


	public function login() {
		$json = array();
		$post_data = json_decode(file_get_contents('php://input'), true);
		if (isset($post_data['email']) && isset($post_data['password'])) {
			$this->load->model('account/user');
			$data_array = array(
				'email' => $post_data['email'],
				'password' => $post_data['password']
			);
			$result = $this->model_account_user->login($data_array);
			if($result){

				if($result['approved']){
					$server = $this->request->server['HTTPS'] ? HTTPS_SERVER : HTTP_SERVER;

					$jwt = JWT::encode($result, JWT::getPassKey());
					$json['user_id'] = $result['user_id'];
					if($result['image']){
						$json['image'] = $server . 'data/upload/' . $result['image'];
					} else {
						$json['image'] = '';
					}
					$json['pending_status_id'] = $this->config->get('module_cargo_setting_shipment_pending');
					$json['shared_container_id'] = $this->config->get('module_cargo_setting_shared_container_id');
					$json['user_group_id'] = $result['user_group_id'];
					$json['permission'] = $result['permission'];
					$json['firstname'] = $result['firstname'];
					$json['lastname'] = $result['lastname'];
					$json['approved'] = $result['approved'];
					$json['signature'] = $result['signature'];
					$json['email'] = $post_data['email'];
					$json['authdata'] = $jwt;
				} else {
					$json['error'] = 'Account not approved yet.';
				}


			} else {
					$json['error'] = 'Wrong User / Password.';
			}
		} else {
			$json['error'] = 'Wrong User / Password.';
		}

		$this->response->addHeader('Content-Type: application/json');
		$this->response->setOutput(json_encode($json));
	}

	public function refresh() {
		$json = array();
		$post_data = json_decode(file_get_contents('php://input'), true);
		$credentials = $this->request->getBearerToken();
		$jwt = JWT::decode($credentials, JWT::getPassKey());
		if ($jwt->email) {
			$this->load->model('account/user');
			$result = $this->model_account_user->getUserByEmail($jwt->email);
			if($result){
				$server = $this->request->server['HTTPS'] ? HTTPS_SERVER : HTTP_SERVER;
				$jwt = JWT::encode($result, JWT::getPassKey());
				$json['user_id'] = $result['user_id'];
				if($result['image']){
					$json['image'] = $server . 'data/upload/' . $result['image'];
				} else {
					$json['image'] = '';
				}
				$json['pending_status_id'] = $this->config->get('module_cargo_setting_shipment_pending');
				$json['shared_container_id'] = $this->config->get('module_cargo_setting_shared_container_id');
				$json['user_group_id'] = $result['user_group_id'];
				$json['permission'] = $result['permission'];
				$json['firstname'] = $result['firstname'];
				$json['lastname'] = $result['lastname'];
				$json['approved'] = $result['approved'];
				$json['signature'] = $result['signature'];
				$json['email'] = $result['email'];
				$json['authdata'] = $jwt;
			} else {
					$json['error'] = 'User not exist.';
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
			$this->load->model('account/user');
			$result = $this->model_account_user->getUsers();
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
			if(isset($this->request->post['user_id'])){
				$server = $this->request->server['HTTPS'] ? HTTPS_SERVER : HTTP_SERVER;
				$this->load->model('account/user');
				$result = $this->model_account_user->getUser($this->request->post['user_id']);
				if($result){
					if($result['image']){
						$result['image'] = $server . 'data/upload/' . $result['image'];
					} else {
						$result['image'] = '';
					}

					$json['data'] = $result;

					$files_array = array();
					$files_data = $this->model_account_user->getFiles($this->request->post['user_id']);
					foreach ($files_data as $item) {
						$hitem = $item;
						$hitem['file'] = $server . 'data/upload/' . $item['file'];
						$files_array[] = $hitem;
					}
					$json['files'] = $files_array;

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


			if(isset($this->request->post['user_id'])){
				$this->load->model('account/user');
				if(isset($this->request->files['file'])){
					$filename = $this->upload($this->request->files['file']);
					$json['filename'] = $filename;
					if(isset($filename['filename'])){
						$_data = array(
							'user_id' => $this->request->post['user_id'],
							'file' => $filename['filename'],
							'name' => $filename['name']
						);

						$result = $this->model_account_user->addFile($_data);
						if($result){
							$server = $this->request->server['HTTPS'] ? HTTPS_SERVER : HTTP_SERVER;

							$json['data'] = array( 'file_id' => $result , 'name' => $filename['name'] , 'file' => $server . 'data/upload/' . $filename['filename']);
						}

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
			$this->load->model('account/user');

			if(isset($this->request->post['user_id']) && isset($this->request->post['file_id'])){
				$result = $this->model_account_user->getFile(array( 'user_id' => $this->request->post['user_id'] , 'file_id' => $this->request->post['file_id']));
				if($result){
					$path = DIR_FILES_UPLOAD . $result['file'];
					if (is_file($path)) {
						unlink($path);
					}
					$this->model_account_user->deleteFile($result);
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

	public function save() {
		$json = array();
		$post_data = json_decode(file_get_contents('php://input'), true);
		$credentials = $this->request->getBearerToken();
		$jwt = JWT::decode($credentials, JWT::getPassKey());
		if ($jwt->email) {
			$this->load->model('account/user');

			//container data
			$submit_data = array(
				'firstname' => $this->request->post['firstname'],
				'lastname' => $this->request->post['lastname'],
				'email' => $this->request->post['email'],
				'phone' => $this->request->post['phone'],
				'user_group_id' => $this->request->post['user_group_id'],
				'approved' => $this->request->post['approved'],
				'signature' => $this->request->post['signature'],
				'password' => '',
				'image' => '',
				'code' => '',
			);

			if(isset($this->request->files['file'])){
				$filename = $this->upload($this->request->files['file']);
				if(isset($filename['filename'])){
					$submit_data['image'] = $filename['filename'];
				}
			}

			if(isset($this->request->post['password']) && !empty($this->request->post['password'])){
				$submit_data['password'] = $this->request->post['password'];
			}

			if(isset($this->request->post['user_id'])){
				$user_id = $this->request->post['user_id'];
				if(isset($this->request->post['profile'])){
					$this->model_account_user->updateUserProfile($user_id,$submit_data);
				} else {
					$this->model_account_user->updateUser($user_id,$submit_data);
				}


			} else {
				$user_id = $this->model_account_user->addUser($submit_data);
			}


			if($submit_data['image']){
				$server = $this->request->server['HTTPS'] ? HTTPS_SERVER : HTTP_SERVER;
				$json['image'] = $server . 'data/upload/' . $submit_data['image'];
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

			if(isset($this->request->post['user_id'])){
				$this->model_account_user->deleteUser($this->request->post['user_id']);
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

	public function testmail(){
		$this->sendmail('support@hmcargollc.com','smartcaeser@gmail.com','Cargo','TestMail','<b>welcome baby</b>');
	}

	public function sendmail($from,$to,$sender,$subject,$body){
		$mail = new Mail('smtp');
		$mail->parameter = "";
		$mail->smtp_hostname = "mail.hmcargollc.com";
		$mail->smtp_username = "noreply@hmcargollc.com";
		$mail->smtp_password = "TTL@2020";
		$mail->smtp_port = "2525";
		$mail->smtp_timeout = "5";

		$mail->setTo($to);
		$mail->setFrom('support@hmcargollc.com');
		$mail->setSender(html_entity_decode($sender, ENT_QUOTES, 'UTF-8'));
		$mail->setSubject(html_entity_decode($subject, ENT_QUOTES, 'UTF-8'));
		$mail->setHtml($body);
		$mail->send();

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
				$json['error'] = $this->language->get('error_filetype');
			}

			// Allowed file mime types
			$allowed = array();

			$mime_allowed = preg_replace('~\r?\n~', "\n", $this->config->get('config_file_mime_allowed'));

			$filetypes = explode("\n", $mime_allowed);

			foreach ($filetypes as $filetype) {
				$allowed[] = trim($filetype);
			}

			if (!in_array($_file['type'], $allowed)) {
				$json['error'] = $this->language->get('error_filetype');
			}

			// Check to see if any PHP files are trying to be uploaded
			$content = file_get_contents($_file['tmp_name']);

			if (preg_match('/\<\?php/i', $content)) {
				$json['error'] = $this->language->get('error_filetype');
			}

			// Return any upload error
			if ($_file['error'] != UPLOAD_ERR_OK) {
				$json['error'] = $this->language->get('error_upload_' . $_file['error']);
			}
		} else {
			$json['error'] = $this->language->get('error_upload');
		}

		if (!$json) {

			$temp = explode(".", $filename);
			$newfilename = token(5) . '_' . round(microtime(true)) . '.' . end($temp);


			$file = $filename . '.' . token(32);

			move_uploaded_file($_file['tmp_name'], DIR_FILES_UPLOAD . $newfilename);
			$json['filename'] = $newfilename;
			$json['name'] = $filename;
			$json['success'] = $this->language->get('text_upload');
		}

		return $json;
	}

}
