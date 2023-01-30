<?php
class ControllerApiShipment extends Controller {
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

	public function sign(){
		$this->generatePDF(DIR_FILES_UPLOAD . "Negotiated_Rate_Arrangement.jpg", "Negotiated_Rate_Arrangement.jpg", DIR_FILES_UPLOAD . "signature.png");
	}

	private function generatePDF($source, $output, $image) {
		$stamp = imagecreatefrompng($image);
		$im = imagecreatefromjpeg($source);

		// Set the margins for the stamp and get the height/width of the stamp image
		$marge_right = 500;
		//$marge_bottom = 200; //shipper signature
		$marge_bottom = 50; //manager signature
		$sx = imagesx($stamp);
		$sy = imagesy($stamp);

		imagecopy($im, $stamp, imagesx($im) - $sx - $marge_right, imagesy($im) - $sy - $marge_bottom, 0, 0, imagesx($stamp), imagesy($stamp));
		header('Content-type: image/png');
		imagejpeg($im,$output,100);
		imagedestroy($im);
		imagedestroy($stamp);
	}

	public function createZipArchive($files = array(), $destination = '', $overwrite = false) {
	 	if(file_exists($destination) && !$overwrite) { return false; }
	  	$validFiles = array();
			if(is_array($files)) {
			  foreach($files as $file) {
			     if(file_exists($file)) {
			        $validFiles[] = $file;
			     }
			  }
			}

			if(count($validFiles)) {
			  $zip = new ZipArchive();
			  if($zip->open($destination,$overwrite ? ZIPARCHIVE::OVERWRITE : ZIPARCHIVE::CREATE) == true) {
			     foreach($validFiles as $file) {
			        $zip->addFile($file,$file);
			     }
			     $zip->close();
			     return file_exists($destination);
			  } else {
			      return false;
			  }
			} else {
			  return false;
			}
	}

	public function downloadgallery(){
		$json = array();
		$post_data = json_decode(file_get_contents('php://input'), true);
		$credentials = $this->request->getBearerToken();
		$jwt = JWT::decode($credentials, JWT::getPassKey());
		if ($jwt->email) {
			if(isset($this->request->post['shipment_id'])){
				$this->load->model('catalog/shipment');
				$history_items = $this->model_catalog_shipment->getShipmentHistory($this->request->post['shipment_id']);
				if($history_items){
					$fileName = 'shipment_gallery_' . $this->request->post['shipment_id'] . '.zip';
					$files = [];
					foreach ($history_items as $hitem) {
						$hfiles = explode(",",$hitem['file']);
						if(sizeof($hfiles) > 0){
							foreach ($hfiles as $file) {
								if(!empty($file)){
									$files[] = DIR_FILES_UPLOAD . $file;
								}

							}
						}
					}

					if(sizeof($files) > 0){
						$zip_path = DIR_FILES_UPLOAD . $fileName;
						$zip = new ZipArchive();

						if ($zip->open($zip_path, file_exists($zip_path) ? ZIPARCHIVE::OVERWRITE : ZIPARCHIVE::CREATE) !== TRUE) {
						  die ("An error occurred creating your ZIP file.");
						}

						foreach ($files as $path) {

						  if (file_exists($path)) {
						    $zip->addFile($path,basename($path)) or die ("ERROR: Could not add the file");
						  } else {
						    die("File $filepath doesnt exit");
						  }
						}

						$zip->close();
						$server = $this->request->server['HTTPS'] ? HTTPS_SERVER : HTTP_SERVER;
						$json['history_file'] = $server . 'data/upload/' . $fileName;
					}
				}
			} elseif(isset($this->request->post['history_id'])){

				$this->load->model('catalog/shipment');
				$history_item = $this->model_catalog_shipment->getHistoryItem($this->request->post['history_id']);
				if($history_item){
					$fileName = 'shipment_gallery_' . $history_item['shipment_id'] . '_' . $this->request->post['history_id'] . '.zip';
					$hfiles = explode(",",$history_item['file']);
					$files = [];
					foreach ($hfiles as $file) {
						$files[] = DIR_FILES_UPLOAD . $file;
					}

					$zip_path = DIR_FILES_UPLOAD . $fileName;
					$zip = new ZipArchive();

					if ($zip->open($zip_path, file_exists($zip_path) ? ZIPARCHIVE::OVERWRITE : ZIPARCHIVE::CREATE) !== TRUE) {
					  die ("An error occurred creating your ZIP file.");
					}

					foreach ($files as $path) {

					  if (file_exists($path)) {
					    $zip->addFile($path,basename($path)) or die ("ERROR: Could not add the file");
					  } else {
					    die("File $filepath doesnt exit");
					  }
					}

					$zip->close();
					$server = $this->request->server['HTTPS'] ? HTTPS_SERVER : HTTP_SERVER;
					$json['history_file'] = $server . 'data/upload/' . $fileName;
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

	public function list() {
		$json = array();
		$post_data = json_decode(file_get_contents('php://input'), true);
		$credentials = $this->request->getBearerToken();
		$jwt = JWT::decode($credentials, JWT::getPassKey());
		if ($jwt->email) {
			$this->load->model('catalog/shipment');
			$permissions = json_decode(html_entity_decode($jwt->permission),true);
			$isAdmin = false;
			if(isset($permissions['shipment']['showall'])){
				$isAdmin = $permissions['shipment']['showall'] ? true : false;
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
				'sort' => isset($this->request->get['sort']) ? $this->request->get['sort'] : 'shipment_id',
				'order' => isset($this->request->get['order']) ? $this->request->get['order'] : 'ASC',
				'start' => ($page - 1) * $limit,
				'limit' => $limit,
				'filter' => $filter_items
			);
			//$json['filterBy'] = isset($this->request->get['filter']) ? $this->request->get['filter'] : '';
			$result = $this->model_catalog_shipment->getShipments($_data);
			$result_total = $this->model_catalog_shipment->getTotalShipments($_data);
			$shipments_data = array();

			if($result){
				foreach ($result as $item) {
					$packages_data = array();
					$packages = $this->model_catalog_shipment->getShipmentPackage($item['shipment_id'] , $filter_description);
					if($packages){
						foreach ($packages as $package) {
							$packages_data[] = json_decode($package['data'] , true);
						}
					}
					$item['packages'] = $packages_data;
					$shipments_data[] = $item;
				}
				$json['filter'] = $filter_items;
				$json['items'] = $shipments_data;
				$json['total'] = $result_total;
			}
		} else {
			$json['error'] = 'access denied.';
		}

		$this->response->addHeader('Content-Type: application/json');
		$this->response->setOutput(json_encode($json));
	}

	public function assigntocontainer() {
		$json = array();
		$post_data = json_decode(file_get_contents('php://input'), true);
		$credentials = $this->request->getBearerToken();
		$jwt = JWT::decode($credentials, JWT::getPassKey());
		if ($jwt->email) {
			if(isset($this->request->post['shipment_id']) && isset($this->request->post['container_id'])){
				$this->load->model('catalog/shipment');
				$result = $this->model_catalog_shipment->assignToContainer($this->request->post['shipment_id'] , $this->request->post['container_id']);
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

	public function delete() {
		$json = array();
		$post_data = json_decode(file_get_contents('php://input'), true);
		$credentials = $this->request->getBearerToken();
		$jwt = JWT::decode($credentials, JWT::getPassKey());
		if ($jwt->email) {
			if(isset($this->request->post['shipment_id'])){
				$this->load->model('catalog/shipment');
				$result = $this->model_catalog_shipment->deleteShipment($this->request->post['shipment_id']);
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

	public function bulk(){
		// ,getWarehouses
		$json = array();
		$post_data = json_decode(file_get_contents('php://input'), true);
		$credentials = $this->request->getBearerToken();
		$jwt = JWT::decode($credentials, JWT::getPassKey());
		if ($jwt->email) {
			$this->load->model('catalog/shipment');
			$this->load->model('catalog/shipper');
			$this->load->model('catalog/receiver');
			$this->load->model('catalog/manager');

			$permissions = json_decode(html_entity_decode($jwt->permission),true);
			$isAdmin = false;
			if(isset($permissions['shipment']['showall'])){
				$isAdmin = $permissions['shipment']['showall'] ? true : false;
			}
			if(!$isAdmin){
				$isAdmin = $jwt->user_group_id == 1 ? true : false;
			}

			$_data = array(
				'user_id' => $jwt->user_id,
				'user_group_id' => $jwt->user_group_id,
				'status' => '1',
				'is_admin' => $isAdmin,
			);


			$json['shippers'] = $this->model_catalog_shipper->getShippers($_data);
			$json['receivers'] = $this->model_catalog_receiver->getReceivers($_data);
			$json['destinations'] = $this->model_catalog_manager->getDestinations();
			$json['shipper_types'] = $this->model_catalog_manager->getShipperTypes();
			$json['container_types'] = $this->model_catalog_manager->getContainerTypes();
			$json['shipment_statuses'] = $this->model_catalog_manager->getShipmentStatuses();
			$json['warehouses'] = $this->model_catalog_manager->getWarehouses();

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
			if(isset($this->request->post['shipment_id'])){
				$this->load->model('catalog/shipment');
				$this->load->model('catalog/shipper');
				$this->load->model('catalog/receiver');
				$this->load->model('catalog/manager');
				$result = $this->model_catalog_shipment->getShipment($this->request->post['shipment_id']);
				$shippment_data = array();
				if($result){
					$server = $this->request->server['HTTPS'] ? HTTPS_SERVER : HTTP_SERVER;
					$history_array = array();
					$history_data = $this->model_catalog_shipment->getShipmentHistory($this->request->post['shipment_id']);
					foreach ($history_data as $item) {
						$hitem = $item;
						if($item['file']){
							$images = explode(',',$item['file']);
							$hitem['file'] = array();
							foreach ($images as $value) {
								$hitem['file'][] =  $server . 'data/upload/' . $value;
							}
						}

						$history_array[] = $hitem;
					}
					$shippment_data['data'] = $result;
					$shippment_data['shipper'] = $this->model_catalog_shipper->getShipper($result['shipper_id']);
					$shippment_data['receiver'] = $this->model_catalog_receiver->getReceiver($result['receiver_id']);
					$shippment_data['destination'] = $this->model_catalog_manager->getDestination($result['destination_id']);
					$shippment_data['packages'] = $this->model_catalog_shipment->getShipmentPackage($this->request->post['shipment_id']);
					$shippment_data['history'] = $history_array;
				}
				$json['data'] = $shippment_data;
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
			if(isset($this->request->post['shipment_id'])){
				$this->load->model('catalog/shipment');
				$result = $this->model_catalog_shipment->getShipment($this->request->post['shipment_id']);

				if($result){
					$history_array = array();
					$server = $this->request->server['HTTPS'] ? HTTPS_SERVER : HTTP_SERVER;
					$history_data = $this->model_catalog_shipment->getShipmentHistory($this->request->post['shipment_id']);
					foreach ($history_data as $item) {
						$hitem = $item;
						if($item['file']){
							$images = explode(',',$item['file']);
							$hitem['file'] = array();
							foreach ($images as $value) {
								$hitem['file'][] =  $server . 'data/upload/' . $value;
							}

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
			if(isset($this->request->post['shipment_id'])){
				$this->load->model('catalog/shipment');
				$result = $this->model_catalog_shipment->getShipment($this->request->post['shipment_id']);
				if($result){
					$_array = array();
					$server = $this->request->server['HTTPS'] ? HTTPS_SERVER : HTTP_SERVER;
					$_data = $this->model_catalog_shipment->getShipmentFiles($this->request->post['shipment_id']);
					foreach ($_data as $item) {
						$fitem = $item;
						if($item['filename'] && $item['filename'] != ''){
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

	public function savenote() {
		$json = array();
		$post_data = json_decode(file_get_contents('php://input'), true);
		$credentials = $this->request->getBearerToken();
		$jwt = JWT::decode($credentials, JWT::getPassKey());
		if ($jwt->email) {
			if(isset($this->request->post['shipment_id']) && isset($this->request->post['note'])){
				$this->load->model('catalog/shipment');
				$result = $this->model_catalog_shipment->updateShipmentNote($this->request->post['shipment_id'] , $this->request->post['note']);

				$json['data'] = $result;
			} else {
				$json['error'] = 'missing inputs.';
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
			$this->load->model('catalog/shipment');

			if(isset($this->request->post['shipment_id'])){
				if(isset($this->request->files['files'])){
					$filename = $this->upload($this->request->files['files'],'file');
					$_file = isset($filename['code']) ? $filename['code'] : '';
					if($_file != ''){
						$_data = array(
							'user_id' => $jwt->user_id,
							'shipment_id' => $this->request->post['shipment_id'],
							'file' => $_file
						);

						$result = $this->model_catalog_shipment->addShipmentFile($_data);
					} else {
						$json['error'] = 'File type not accepted.';
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
			$this->load->model('catalog/shipment');

			if(isset($this->request->post['shipment_id']) && isset($this->request->post['file_id'])){
				$result = $this->model_catalog_shipment->getShipmentFile($this->request->post['shipment_id'] , $this->request->post['file_id']);
				if($result){
					$path = DIR_FILES_UPLOAD . $result['filename'];
					if (is_file($path)) {
						unlink($path);
					}
					$this->model_catalog_shipment->deleteShipmentFile($result);
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
			$this->load->model('catalog/shipment');
			$this->load->model('catalog/shipper');
			$this->load->model('catalog/receiver');
			$this->load->model('catalog/manager');


			// set shipper data
			$shipper_id = 0;
			$json['user_id'] = $jwt->user_id;
			if(isset($this->request->post['shipper']['shipper_id']) && !empty($this->request->post['shipper']['shipper_id'])){
				$shipper_id = $this->request->post['shipper']['shipper_id'];
				$shipper_data = array(
					'name' => $this->request->post['shipper']['name'],
					'phone' => $this->request->post['shipper']['phone'],
					'email' => $this->request->post['shipper']['email'],
					'address' => $this->request->post['shipper']['address'],
					'ein' => $this->request->post['shipper']['ein'],
					'shipper_type_id' => $this->request->post['shipper']['shipper_type_id'],
					'status' => '1'
				);
				$shipper_update = $this->model_catalog_shipper->updateShipper($shipper_id,$shipper_data);
			} else {
				$shipper_data = array(
					'user_id' => $jwt->user_id,
					'name' => $this->request->post['shipper']['name'],
					'phone' => $this->request->post['shipper']['phone'],
					'email' => $this->request->post['shipper']['email'],
					'address' => $this->request->post['shipper']['address'],
					'ein' => $this->request->post['shipper']['ein'],
					'shipper_type_id' => $this->request->post['shipper']['shipper_type_id'],
					'status' => '1'

				);
				$shipper_id = $this->model_catalog_shipper->addShipper($shipper_data);
			}

			// set receiver
			$receiver_id = 0;
			if(isset($this->request->post['receiver']['receiver_id']) && !empty($this->request->post['receiver']['receiver_id'])){
				$receiver_id = $this->request->post['receiver']['receiver_id'];
				$receiver_data = array(
					'phone' => $this->request->post['receiver']['phone'],
					'email' => $this->request->post['receiver']['email'],
					'address' => $this->request->post['receiver']['address'],
					'name' => $this->request->post['receiver']['name'],
					'status' => '1'
				);
				$receiver_update = $this->model_catalog_receiver->updateReceiver($receiver_id,$receiver_data);
			} else {
				$receiver_data = array(
					'user_id' => $jwt->user_id,
					'phone' => $this->request->post['receiver']['phone'],
					'email' => $this->request->post['receiver']['email'],
					'address' => $this->request->post['receiver']['address'],
					'name' => $this->request->post['receiver']['name'],
					'status' => '1'
				);
				$receiver_id = $this->model_catalog_receiver->addReceiver($receiver_data);
			}


			// set destination
			$destination_id = 0;
			if(isset($this->request->post['other']['destination_id']) && !empty($this->request->post['other']['destination_id'])){
				$destination_id = $this->request->post['other']['destination_id'];
				$destination_data = array(
					'name' => $this->request->post['other']['destination_name']
				);
				$destination_update = $this->model_catalog_manager->updateDestination($destination_id,$destination_data);
			} else {
				$destination_data = array(
					'name' => $this->request->post['other']['destination_name'],
					'status' => '1'
				);
				$destination_id = $this->model_catalog_manager->addDestination($destination_data);
			}

			//shipment data

			$saved_user_id = $jwt->user_id;
			if(isset($this->request->post['assigned_user_id'])){
				$saved_user_id = $this->request->post['assigned_user_id'];
			}
			$shipment_data = array(
				'user_id' => $saved_user_id,
				'shipper_id' => $shipper_id,
				'receiver_id' => $receiver_id,
				'title' => isset($this->request->post['other']['title']) ? ($this->request->post['other']['title'] === "true" ? 1 : (int)$this->request->post['other']['title']) : '0',
				'akey' => isset($this->request->post['other']['akey']) ? ($this->request->post['other']['akey'] === "true" ? 1 : (int)$this->request->post['other']['akey']) : '0',
				'date' => isset($this->request->post['other']['date']) ? $this->request->post['other']['date'] : '',
				'note' => isset($this->request->post['other']['note']) ? $this->request->post['other']['note'] : '',
				'container_type_id' => isset($this->request->post['other']['container_type_id']) ? $this->request->post['other']['container_type_id'] : '0',
				'warehouse_id' => isset($this->request->post['other']['warehouse_id']) ? $this->request->post['other']['warehouse_id'] : '0',
				'destination_id' => $destination_id
			);

			if(isset($this->request->post['history']) && isset($this->request->post['history']['shipment_status_id']) && !empty($this->request->post['history']['shipment_status_id'])){

				$shipment_data['shipment_status_id'] =  $this->request->post['history']['shipment_status_id'];
			}

			if(!isset($this->request->post['shipment_id'])){
				$shipment_data['shipment_status_id'] = $this->config->get('module_cargo_setting_shipment_pending');
			}

			$this->load->model('account/user');



			if(isset($this->request->post['shipment_id'])){
				$shipment_id = $this->request->post['shipment_id'];
				$this->model_catalog_shipment->updateShipment($shipment_id,$shipment_data);
				if(isset($this->request->post['history']) && isset($this->request->post['history']['shipment_status_id']) && !empty($this->request->post['history']['shipment_status_id'])){

					$shipment_info = $this->model_catalog_shipment->getShipment($this->request->post['shipment_id']);

					if($shipment_info){
						$this->model_catalog_manager->addNotification(array(
							'user_id' => $shipment_info['user_id'],
							'type' => 'shipment',
							'type_id' => $this->request->post['shipment_id'],
							'message' => 'Shipment #' . $this->request->post['shipment_id'] . ' was updated'
						));

						$shipment_user_info = $this->model_account_user->getUser($shipment_info['user_id']);
						if($shipment_user_info){
							$subject = "HM-Cargo Shipment Updates";
							$message = '<p>Shipment #' . $this->request->post['shipment_id'] . ' was updated</p>';
							$message .= '<a href="' . $this->request->post['shipment_link'] . $this->request->post['shipment_id'] . '">View Changes</a>';
							//$this->sendmail('support@hmcargollc.com',$shipment_user_info['email'],'HM-Cargollc',$subject,$message);
						}
					}
				}
			} else {
				$shipment_id = $this->model_catalog_shipment->addShipment($shipment_data);
				if(isset($this->request->post['history']) && isset($this->request->post['history']['shipment_status_id']) && !empty($this->request->post['history']['shipment_status_id'])){


					$admin_users = $this->model_account_user->getAdminUsers();

					if($admin_users){
						foreach ($admin_users as $admin_user) {
							$this->model_catalog_manager->addNotification(array(
								'user_id' => $admin_user['user_id'],
								'type' => 'shipment',
								'type_id' => $shipment_id,
								'message' => 'New shipment #' . $shipment_id . ' was added'
							));

							$shipment_user_info = $this->model_account_user->getUser($admin_user['user_id']);
							if($shipment_user_info){
								$subject = "HM-Cargo New Shipment";
								$message = '<p>New shipment #' . $shipment_id . ' was added</p>';
								$message .= '<a href="' . $this->request->post['shipment_link'] . $shipment_id . '">View Details</a>';
								$this->sendmail('support@hmcargollc.com',$shipment_user_info['email'],'HM-Cargollc',$subject,$message);
							}
						}
					}
				}
			}






			// history data
			$this->load->model('tool/upload');
			if(isset($this->request->post['history'])){
				$history_file = array();
				if(isset($this->request->files['history_files'])){
					$file_names = $this->request->files["history_files"]["name"];

			    for ($i = 0; $i < count($file_names); $i++) {
			        $file_name=$file_names[$i];
							$temp = explode(".", $file_name);

							$code = sha1(uniqid(mt_rand(), true));

							$newfilename = $code . '.' . end($temp);

							move_uploaded_file($this->request->files["history_files"]["tmp_name"][$i] , DIR_FILES_UPLOAD . $newfilename);

							$history_file[] = $newfilename;
			    }
				}
				$history_shipment_id = isset($this->request->post['history']['shipment_status_id']) ? $this->request->post['history']['shipment_status_id'] : '0';

				if(!isset($this->request->post['shipment_id'])){
					$history_shipment_id = $this->config->get('module_cargo_setting_shipment_pending');
				}

				$history_data = array(
					'user_id' => $jwt->user_id,
					'shipment_status_id' => $history_shipment_id,
					'shipment_id' => $shipment_id,
					'note' => isset($this->request->post['history']['note']) ? $this->request->post['history']['note'] : '',
					'file' => implode(',',$history_file)
				);



				$result = $this->model_catalog_shipment->addShipmentHistory($history_data);


			}

			if(isset($this->request->files['other'])){
				$filename = $this->uploadfile($this->request->files['other'],'attach_file');

				$_file = isset($filename['code']) ? $filename['code'] : '';
				if($_file != ''){
					$_data = array(
						'user_id' => $jwt->user_id,
						'shipment_id' => $shipment_id,
						'file' => $_file
					);

					$result = $this->model_catalog_shipment->addShipmentFile($_data);
				}
			}






			// packages
			$packages = array();
			if(isset($this->request->post['packages'])){

				foreach ($this->request->post['packages'] as $key => $val) {
					$packages[$key] = $val;
					$packages[$key]['file'] = array('file' => array());
				}
			}

			if(isset($this->request->files['packages'])){
				foreach ($this->request->files['packages'] as $akey => $aval) {
					foreach ($aval as $bkey => $bval) {
						$packages[$bkey]['file'][$akey]['file'] = $bval['file'];
					}
				}
			}
			$package_array = array();
			foreach ($packages as $package) {
				$filename = $this->upload($package['file'],'file');
				$history_file = isset($filename['code']) ? $filename['code'] : '';
				$package_array = array(
					'type' => $package['type'],
					'data' => $package,
					'file' => $history_file,
					'shipment_id' => $shipment_id
				);
				$this->model_catalog_shipment->addShipmentPackage($package_array);
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

	public function updatehistoryitem() {
		$json = array();
		$post_data = json_decode(file_get_contents('php://input'), true);
		$credentials = $this->request->getBearerToken();
		$jwt = JWT::decode($credentials, JWT::getPassKey());
		if ($jwt->email) {
			if(isset($this->request->post['history_id'])){

				if(isset($this->request->files['file'])){
					$this->load->model('catalog/shipment');

					$file_name = $this->request->files['file']['name'];
					$temp = explode(".", $file_name);
					$code = sha1(uniqid(mt_rand(), true));
					$newfilename = $code . '.' . end($temp);
					move_uploaded_file($this->request->files["file"]["tmp_name"] , DIR_FILES_UPLOAD . $newfilename);

					$history_item = $this->model_catalog_shipment->getHistoryItem($this->request->post['history_id']);
					if($history_item){
						$files = explode(",",$history_item['file']);
						$new_files = [];
						$file_source = basename($this->request->post['url']);
						foreach ($files as $file) {
							if($file == $file_source){
								$new_files[] = $newfilename;
							} else {
								$new_files[] = $file;
							}
						}
						$this->model_catalog_shipment->updateHistoryItem($this->request->post['history_id'],implode(",",$new_files));

						$path = DIR_FILES_UPLOAD . $file_source;
						if (is_file($path)) {
							unlink($path);
						}

						$server = $this->request->server['HTTPS'] ? HTTPS_SERVER : HTTP_SERVER;

						$json['history_item'] = $server . 'data/upload/' . $newfilename;
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

	public function deletehistoryitem(){
		$json = array();
		$post_data = json_decode(file_get_contents('php://input'), true);
		$credentials = $this->request->getBearerToken();
		$jwt = JWT::decode($credentials, JWT::getPassKey());
		if ($jwt->email) {
			if(isset($this->request->post['history_id'])){
				$this->load->model('catalog/shipment');
				$history_item = $this->model_catalog_shipment->getHistoryItem($this->request->post['history_id']);
				if($history_item){
					$files = explode(",",$history_item['file']);
					$new_files = [];
					$file_source = basename($this->request->post['url']);
					foreach ($files as $file) {
						if($file != $file_source){
							$new_files[] = $file;
						}
					}
					$this->model_catalog_shipment->updateHistoryItem($this->request->post['history_id'],implode(",",$new_files));
					$path = DIR_FILES_UPLOAD . $file_source;
					if (is_file($path)) {
						unlink($path);
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

	private function uploadfile($_file,$child){
		$json = array();
		if (!empty($_file['name'][$child]) && is_file($_file['tmp_name'][$child])) {
			// Sanitize the filename
			$filename = basename(preg_replace('/[^a-zA-Z0-9\.\-\s+]/', '', html_entity_decode($_file['name'][$child], ENT_QUOTES, 'UTF-8')));

			// Validate the filename length
			if ((utf8_strlen($filename) < 3) || (utf8_strlen($filename) > 64)) {
				$json['error'] = $this->language->get('error_filename');
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

	public function sendmail($from,$to,$sender,$subject,$body){

		$server = $this->request->server['HTTPS'] ? HTTPS_SERVER : HTTP_SERVER;
		$str = strpos($server,'localhost');
		if($str){
			return;
		}
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
}
