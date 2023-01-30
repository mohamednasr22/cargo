<?php
// Declare the class
class LeatsFeasrURLAPI {
	
	// Constructor
	public function __construct($key,$apiURL = 'https://www.googleapis.com/urlshortener/v1/url') {
		// Keep the API Url
		$this->apiURL = $apiURL.'?key='.$key;
	}
	
	// Shorten a URL
	function shorten($url) {
		// Send information along
		$response = $this->send($url);
		// Return the result
		return isset($response['id']) ? $response['id'] : false;
	}
	
	// Expand a URL
	function expand($url) {
		// Send information along
		$response = $this->send($url,false);
		// Return the result
		return isset($response['longUrl']) ? $response['longUrl'] : false;
	}
	
	// Send information to Google
	function send($url,$shorten = true) {
		// Create cURL
		$ch = curl_init();
		// If we're shortening a URL...
		if($shorten) {
			curl_setopt($ch,CURLOPT_URL,$this->apiURL);
			curl_setopt($ch,CURLOPT_POST,1);
			curl_setopt($ch,CURLOPT_POSTFIELDS,json_encode(array("longUrl"=>$url)));
			curl_setopt($ch,CURLOPT_HTTPHEADER,array("Content-Type: application/json"));
		}
		else {
			curl_setopt($ch,CURLOPT_URL,$this->apiURL.'&shortUrl='.$url);
		}
		curl_setopt($ch,CURLOPT_RETURNTRANSFER,1);
		// Execute the post
		$result = curl_exec($ch);
		
		print_r($result);
		// Close the connection
		curl_close($ch);
		// Return the result
		return json_decode($result,true);
	}		
}
class ControllerApiOrders extends Controller {
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
	
	
	
	
	public function sendaction() {
		$post_data = json_decode(file_get_contents('php://input'), true);
		$json = array();
		if (isset($post_data['driver_code']) && isset($post_data['branch_code'])) {
			$this->load->model('account/branch');
			$branch = $this->model_account_branch->getBranchByCode($post_data['branch_code']);
			if($branch){
				$urls = array();
				$urls[] = array(
					'url' => $branch['url'] . 'index.php?route=extension/module/printer/driveraction',
					'post' => array(
						'driver_code' => $post_data['driver_code'],
						'order_status_id' => $post_data['order_status_id'],
						'order_id' => $post_data['order_id'],
						'latlng' => $post_data['latlng'],
						'type' => $post_data['action_type']
					
					)
				);
				$response = $this->multiRequest($urls);
				if($response && $response[0]){
					$json['data'] = $response[0];
				}
			}
		} else {
			$json['error'] = 'Code is required.';
		}

		$this->response->addHeader('Content-Type: application/json');
		$this->response->setOutput(json_encode($json));
	}
	
	public function testsms(){
		$this->load->model('account/branch');
		$branch = $this->model_account_branch->getBranchByCode('GRKMK9ZK');
		if($branch){
			if($branch['shorturl']){
				$order_shorturl = $this->model_account_branch->getShortUrlCode($branch['url'] . 'TrackMyOrder/?o=0701-230959' , 'GRKMK9ZK');
			}
			echo 'http://link.lets-feast.com/' . $order_shorturl;
		}
	}
	
	public function find(){
		$post_data = json_decode(file_get_contents('php://input'), true);
		print_r($post_data);
	}
	
	public function updateorder() {
		$post_data = json_decode(file_get_contents('php://input'), true);
		$json = array();
		if (isset($post_data['driver_code']) && isset($post_data['branch_code'])) {
			$this->load->model('account/branch');
			$branch = $this->model_account_branch->getBranchByCode($post_data['branch_code']);
			if($branch){
				$surl = $branch['url'] . 'TrackMyOrder/?o=' . $post_data['order_code_id'];
				if($branch['shorturl']){
					$order_shorturl = $this->model_account_branch->getShortUrlCode( $surl , $post_data['branch_code']);
					$surl = "http://link.lets-feast.com/" . $order_shorturl;
				}
				$urls = array();
				$urls[] = array(
					'url' => $branch['url'] . 'index.php?route=extension/module/printer/driverchangestatus',
					'post' => array(
						'new' => $post_data['new'],
						'driver_code' => $post_data['driver_code'],
						'order_status_id' => $post_data['order_status_id'],
						'order_id' => $post_data['order_id'],
						'payment_type' => $post_data['payment_type'],
						'order_code_id' => $post_data['order_code_id'],
						'branch_name' => $post_data['branch_name'],
						'total' => $post_data['total'],
						'telephone' => $post_data['telephone'],
						'shorturl' => $surl,
						'latlng' => $post_data['latlng']
					
					)
				);
				$response = $this->multiRequest($urls);
				if($response && $response[0]){
					$json['data'] = $response[0];
				}
			}
		} else {
			$json['error'] = 'Code is required.';
		}

		$this->response->addHeader('Content-Type: application/json');
		$this->response->setOutput(json_encode($json));
	}
	
	public function updateorderdd(){
		$post_data = json_decode(file_get_contents('php://input'), true);
		$json = array();
		if (isset($post_data['data'])) {
			
			$item = $post_data['data'];
			$json['data'] = $item;
			$this->load->model('account/branch');
			$branch = $this->model_account_branch->getBranchByCode($item['branch_code']);
			if($branch){
				$urls = array();
				$urls[] = array(
					'url' => $branch['url'] . 'index.php?route=extension/module/printer/driverchangeorderdd',
					'post' => array(
						'driver_code' => $item['driver_code'],
						'order_id' => $item['order_id'],
						'distance' => $item['distance'],
						'duration' => $item['duration']
					)
				);
				$response = $this->multiRequest($urls);
				if($response && $response[0]){
					$json['data'] = $response[0];
				}
			}
		}
		
		/*
		if (isset($post_data['driver_code']) && isset($post_data['branch_code'])) {
			$this->load->model('account/branch');
			$branch = $this->model_account_branch->getBranchByCode($post_data['branch_code']);
			if($branch){
				$urls = array();
				$urls[] = array(
					'url' => $branch['url'] . 'index.php?route=extension/module/printer/driverchangestatus',
					'post' => array(
						'driver_code' => $post_data['driver_code'],
						'order_status_id' => $post_data['order_status_id'],
						'order_id' => $post_data['order_id'],
						'latlng' => $post_data['latlng']
					
					)
				);
				$response = $this->multiRequest($urls);
				if($response && $response[0]){
					$json['data'] = $response[0];
				}
			}
		} else {
			$json['error'] = 'Code is required.';
		}
		*/
		$this->response->addHeader('Content-Type: application/json');
		$this->response->setOutput(json_encode($json));
	}
	
	public function testurl() {
		$longUrl = 'http://212hx14ne.rajas.co.uk/index.php?route=account/order/monitor&order_id=1099';
		
		$apiKey = 'AIzaSyDm5_-AOoScST9vcoomcCQVnLKDKjQJ4fE';
		
		$googer = new LeatsFeasrURLAPI($apiKey);

		// Test: Shorten a URL
		$shortDWName = $googer->shorten($longUrl);
		echo $shortDWName; // returns http://goo.gl/i002

		/*
		$postData = array('longUrl' => $longUrl);
		$jsonData = json_encode($postData);

		$curlObj = curl_init();
		
		curl_setopt($curlObj,CURLOPT_URL,'https://www.googleapis.com/urlshortener/v1/url?key=' . $apiKey);
		curl_setopt($curlObj,CURLOPT_POST,1);
		curl_setopt($curlObj,CURLOPT_POSTFIELDS,$jsonData);
		curl_setopt($curlObj,CURLOPT_HTTPHEADER,array("Content-Type: application/json"));
		curl_setopt($curlObj,CURLOPT_RETURNTRANSFER,1);

		$response = curl_exec($curlObj);
		
		print_r($response);
		
		// Change the response json string to object
		$json = json_decode($response);

		curl_close($curlObj);
		
		//$data['google_link'] = $json->id;
		
		print_r($json);
		*/
	}
	
	
	
	public function myorders() {	
		$post_data = json_decode(file_get_contents('php://input'), true);
		
		$json = array();
		if (isset($post_data['driver_code'])) {
			$this->load->model('account/driver');
			$branches = $this->model_account_driver->getBranchesByDriverCode($post_data['driver_code']);
			if($branches){
				$branches_data = array();
				foreach($branches as $branch){
					$branches_data[$branch['code']] = $branch;
					$urls[] = $branch['url'] . 'index.php?route=extension/module/printer/myorders&driver_code=' . $post_data['driver_code'];
				}
				$response = $this->multiRequest($urls);
				if($response && $response[0]){
					$items = array();
					foreach($response as $itm){
						$data = json_decode($itm,true);
						if($data['data']){
							$data = $data['data'];
							foreach($data as $i){
								$branch_info = $branches_data[$i['branch_code']];
								$i['branch_image'] = $branch_info['image'];
								$i['branch_url'] = $branch_info['url'];
								$i['branch_info'] = $branch_info;
								$items[] = $i;
							}
						}
						
					}
					
					$json['data'] = $items;
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
	
	public function neworders() {
		$post_data = json_decode(file_get_contents('php://input'), true);
		$json = array();
		if (isset($post_data['driver_code'])) {
			$this->load->model('account/driver');
			$branches = $this->model_account_driver->getBranchesByDriverCode($post_data['driver_code']);
			if($branches){
				$branches_data = array();
				foreach($branches as $branch){
					$branches_data[$branch['code']] = $branch;
					$urls[] = $branch['url'] . 'index.php?route=extension/module/printer/neworders';
				}
				$json['urls'] = $urls;
				
				$response = $this->multiRequest($urls);
				if($response && $response[0]){
					$items = array();
					foreach($response as $itm){
						$data = json_decode($itm,true);
						if($data['data']){
							$data = $data['data'];
							foreach($data as $i){
								$branch_info = $branches_data[$i['branch_code']];
								$i['branch_image'] = $branch_info['image'];
								$i['branch_url'] = $branch_info['url'];
								$i['branch_info'] = $branch_info;
								$items[] = $i;
							}
						}
					}
					
					$json['data'] = $items;
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
	
	public function testnorders() {
		$post_data = $_GET;
		$json = array();
		if (isset($post_data['driver_code'])) {
			$this->load->model('account/driver');
			$branches = $this->model_account_driver->getBranchesByDriverCode($post_data['driver_code']);
			if($branches){
				$branches_data = array();
				
				/*
				foreach($branches as $branch){
					//if($branch['url'] == 'https://middlesbrough.manjaros-express.com/' || $branch['url'] == 'https://ts1.yasmins.co.uk/' || $branch['url'] == 'https://212hx14ne.rajas.co.uk/'){
					if($branch['url'] == 'https://queens-road.rajas.co.uk/'){
						$branches_data[$branch['code']] = $branch;
						$urls[] = $branch['url'] . 'index.php?route=extension/module/printer/neworders';
					}
					
				}
				*/
				foreach($branches as $branch){
					$branches_data[$branch['code']] = $branch;
					$urls[] = $branch['url'] . 'index.php?route=extension/module/printer/neworders';
				}
				
				
				//$urls[] = 'https://middlesbrough.manjaros-express.com/index.php?route=extension/module/printer/neworders';
				$json['urls'] = $urls;
				
				$response = $this->multiRequest($urls);
				if($response && $response[0]){
					$items = array();
					foreach($response as $itm){
						
						$data = json_decode($itm,true);
						if($data['data']){
							$data = $data['data'];
							foreach($data as $i){
								$branch_info = $branches_data[$i['branch_code']];
								$i['branch_image'] = $branch_info['image'];
								$i['branch_url'] = $branch_info['url'];
								$i['branch_info'] = $branch_info;
								$items[] = $i;
							}
						}
					}
					
					$json['data'] = $items;
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
	
	public function report() {	
		$post_data = json_decode(file_get_contents('php://input'), true);
		$json = array();
		if (isset($post_data['driver_code'])) {
			$this->load->model('account/driver');
			$branches = $this->model_account_driver->getBranchesByDriverCode($post_data['driver_code']);
			if($branches){
				$branches_data = array();
				foreach($branches as $branch){
					$branches_data[$branch['code']] = $branch;
					$urls[] = $branch['url'] . 'index.php?route=extension/module/printer/report&driver_code=' . $post_data['driver_code'] . '&date=' . $post_data['date'];
				}
				$json['urls'] = $urls;
				
				$response = $this->multiRequest($urls);
				
				if($response && $response[0]){
					$items = array();
					foreach($response as $itm){
						$data = json_decode($itm,true);
						if($data['data']){
							$data = $data['data'];
							foreach($data as $i){
								$branch_info = $branches_data[$i['branch_code']];
								$i['branch_image'] = $branch_info['image'];
								$i['branch_url'] = $branch_info['url'];
								$i['branch_info'] = $branch_info;
								$items[] = $i;
							}
						}
						
					}
					
					$json['data'] = $items;
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
	
	
	
	public function multiRequest($data, $options = array()) {
		$agents = array(
	'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.7; rv:7.0.1) Gecko/20100101 Firefox/7.0.1',
	'Mozilla/5.0 (X11; U; Linux i686; en-US; rv:1.9.1.9) Gecko/20100508 SeaMonkey/2.0.4',
	'Mozilla/5.0 (Windows; U; MSIE 7.0; Windows NT 6.0; en-US)',
	'Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_6_7; da-dk) AppleWebKit/533.21.1 (KHTML, like Gecko) Version/5.0.5 Safari/533.21.1'
	);
		$header = array();
		$header[0] = "Accept: text/xml,application/xml,application/xhtml+xml,";
		$header[0] .= "text/html;q=0.9,text/plain;q=0.8,image/png,*/*;q=0.5";
		$header[] = "Cache-Control: max-age=0";
		$header[] = "Connection: keep-alive";
		$header[] = "Keep-Alive: 300";
		$header[] = "Accept-Charset: ISO-8859-1,utf-8;q=0.7,*;q=0.7";
		$header[] = "Accept-Language: en-us,en;q=0.5";
		$header[] = "Pragma: ";

		$curly = array();
		$result = array();
		$mh = curl_multi_init();

		foreach ($data as $id => $d) {
			$curly[$id] = curl_init();
			$url = (is_array($d) && !empty($d['url'])) ? $d['url'] : $d;
			curl_setopt($curly[$id], CURLOPT_URL,            $url);
			curl_setopt($curly[$id], CURLOPT_HEADER,         0);
			curl_setopt($curly[$id], CURLOPT_RETURNTRANSFER, 1);
			curl_setopt($curly[$id],CURLOPT_USERAGENT,$agents[array_rand($agents)]);
			curl_setopt($curly[$id], CURLOPT_HTTPHEADER, $header);
			curl_setopt($curly[$id], CURLOPT_FOLLOWLOCATION, 1);
			
			if (is_array($d)) {
			  if (!empty($d['post'])) {
				curl_setopt($curly[$id], CURLOPT_POST,       1);
				curl_setopt($curly[$id], CURLOPT_POSTFIELDS, $d['post']);
			  }
			}
		 
			if (!empty($options)) {
			  curl_setopt_array($curly[$id], $options);
			}
		 
			curl_multi_add_handle($mh, $curly[$id]);
		}
	 
	  $running = null;
	  do {
		curl_multi_exec($mh, $running);
	  } while($running > 0);
	 
	 
	  foreach($curly as $id => $c) {
		$result[$id] = curl_multi_getcontent($c);
		curl_multi_remove_handle($mh, $c);
	  }
	  curl_multi_close($mh);
	 
	  return $result;
	}
	
	public function CallAPI($method, $url, $data = false)
	{
		$curl = curl_init();

		switch ($method)
		{
			case "POST":
				curl_setopt($curl, CURLOPT_POST, 1);

				if ($data)
					curl_setopt($curl, CURLOPT_POSTFIELDS, $data);
				break;
			case "PUT":
				curl_setopt($curl, CURLOPT_PUT, 1);
				break;
			default:
				if ($data)
					$url = sprintf("%s?%s", $url, http_build_query($data));
		}

		// Optional Authentication:
		curl_setopt($curl, CURLOPT_HTTPAUTH, CURLAUTH_BASIC);
		curl_setopt($curl, CURLOPT_URL, $url);
		curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);

		$result = curl_exec($curl);

		curl_close($curl);

		return $result;
	}
}
