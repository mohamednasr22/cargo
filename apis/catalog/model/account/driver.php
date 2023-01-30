<?php
class ModelAccountDriver extends Model {
	public function addDriver($data) {
		
		$token = token(39);
		$refresh_token = token(39);
		$expire = 30;
		$code = strtoupper(token(8));
		$email = $this->db->escape($data['email']);
		$mobile = $this->db->escape($data['mobile']);
		
		$this->db->query("INSERT INTO " . DB_PREFIX . "driver SET email = '" . $this->db->escape($data['email']) . "', mobile = '" . $this->db->escape($data['mobile']) . "', firstname = '" . $this->db->escape($data['firstname']) . "', lastname = '" . $this->db->escape($data['lastname']) . "' , code = '" . $this->db->escape($code) . "', salt = '" . $this->db->escape($salt = token(9)) . "', password = '" . $this->db->escape(sha1($salt . sha1($salt . sha1($data['password'])))) . "', token = '" . $this->db->escape($token) . "', refresh_token = '" . $this->db->escape($refresh_token) . "', expire = '" . (int)$expire . "', date_added = NOW()");

		$driver_id = $this->db->getLastId();
		
		$color_query = $this->db->query("SELECT * FROM " . DB_PREFIX . "colors WHERE used = '0' LIMIT 1");
		if($color_query->row){
			$this->db->query("UPDATE `" . DB_PREFIX . "driver` SET color_id = '" . (int)$color_query->row['color_id'] . "' WHERE driver_id = '" . (int)$driver_id . "'");
			$this->db->query("UPDATE `" . DB_PREFIX . "colors` SET used = '1' WHERE color_id = '" . (int)$color_query->row['color_id'] . "'");
		}
		
		
		return array(
			'driver_id' => $driver_id,
			'token' => $token,
			'refresh_token' => $refresh_token,
			'expire' => $expire,
			'code' => $code,
			'email' => $email,
			'mobile' => $mobile,
			'online' => 1
		);
	}
	
	public function login($email, $password) {
		$driver_query = $this->db->query("SELECT * FROM " . DB_PREFIX . "driver WHERE LOWER(email) = '" . $this->db->escape(utf8_strtolower($email)) . "' AND (password = SHA1(CONCAT(salt, SHA1(CONCAT(salt, SHA1('" . $this->db->escape($password) . "'))))) OR password = '" . $this->db->escape(md5($password)) . "') AND status = '1'");
		if ($driver_query->num_rows) {
			$driver = $driver_query->row;
			$donline = "0";
			$this->db->query("UPDATE " . DB_PREFIX . "driver SET online = '" . (int)$donline . "' WHERE driver_id = '" . (int)$driver['driver_id'] . "'");
			$driver['online'] = "0";
			return $driver;
		} else {
			return false;
		}
	}

	public function editDriver($driver_id, $data) {
		$this->db->query("UPDATE " . DB_PREFIX . "driver SET firstname = '" . $this->db->escape($data['firstname']) . "', lastname = '" . $this->db->escape($data['lastname']) . "', email = '" . $this->db->escape($data['email']) . "', mobile = '" . $this->db->escape($data['mobile']) . "' WHERE driver_id = '" . (int)$driver_id . "'");
	}
	
	public function updateOnlineStatus($driver_code, $online) {
		$this->db->query("UPDATE " . DB_PREFIX . "driver SET online = '" . (int)$online . "' WHERE code = '" . $this->db->escape($driver_code) . "'");
		return true;
	}
	
	public function updateSortOrder($driver_code, $sort_order) {
		$this->db->query("UPDATE " . DB_PREFIX . "driver SET sort_order = '" . (int)$sort_order . "' WHERE code = '" . $this->db->escape($driver_code) . "'");
		return true;
	}
	
	
	public function updateLocation($driver_code , $lat , $long , $heading){
		$this->db->query("DELETE FROM " . DB_PREFIX . "driver_location WHERE driver_code = '" . $this->db->escape($driver_code) . "'");
		$this->db->query("INSERT INTO " . DB_PREFIX . "driver_location SET driver_code = '" . $this->db->escape($driver_code) . "', heading = '" . $this->db->escape($heading) . "', latitude = '" . $this->db->escape($lat) . "' , longitude = '" . $this->db->escape($long) . "' , date_added = NOW()");
		
		$heatbeat = 2;
		$query = $this->db->query("SELECT * FROM `" . DB_PREFIX . "heartbeat` WHERE code = '" . $this->db->escape($driver_code) . "' ORDER BY `date_modified` DESC LIMIT 1");
		if($query->num_rows > 0){
			$id = $query->row['id'];
			$query2 = $this->db->query("UPDATE " . DB_PREFIX . "heartbeat SET sent = '1' , date_modified = NOW() WHERE id = '" . (int)$id . "'");
		} else {
			$this->db->query("INSERT INTO " . DB_PREFIX . "heartbeat SET date_added = NOW() , date_modified = NOW() , code = '" . $this->db->escape($driver_code) . "'");
		}
		return true;
	}
	
	

	public function editPassword($email, $password) {
		$this->db->query("UPDATE " . DB_PREFIX . "driver SET salt = '" . $this->db->escape($salt = token(9)) . "', password = '" . $this->db->escape(sha1($salt . sha1($salt . sha1($password)))) . "' WHERE LOWER(email) = '" . $this->db->escape(utf8_strtolower($email)) . "'");
	}

	public function getDriver($driver_id) {
		$query = $this->db->query("SELECT * FROM " . DB_PREFIX . "driver WHERE driver_id = '" . (int)$driver_id . "'");
		return $query->row;
	}
	
	public function refreshDriverToken($driver_id) {
		
		$token = token(39);
		$refresh_token = token(39);
		$query = $this->db->query("SELECT * FROM " . DB_PREFIX . "driver WHERE driver_id = '" . (int)$driver_id . "'");
		
		if($query->num_rows){
			$this->db->query("UPDATE " . DB_PREFIX . "driver SET token = '" . $this->db->escape($token) . "', refresh_token = '" . $this->db->escape($refresh_token) . "' WHERE driver_id = '" . (int)$driver_id . "'");
		
		
		
			return array(
				'driver_id' => $driver_id,
				'token' => $token,
				'refresh_token' => $refresh_token,
				'expire' => $query->row['expire'],
				'code' => $query->row['code'],
				'email' => $query->row['email'],
				'mobile' => $query->row['mobile'],
				'online' => $query->row['online']
			);
		}		
	}
	
	
	
	public function getDriverByRefreshToken($refresh_token) {
		$query = $this->db->query("SELECT * FROM " . DB_PREFIX . "driver WHERE refresh_token = '" . $this->db->escape($refresh_token) . "'");
		return $query->row;
	}

	public function getDriverByEmail($email) {
		$query = $this->db->query("SELECT * FROM " . DB_PREFIX . "driver WHERE LOWER(email) = '" . $this->db->escape(utf8_strtolower($email)) . "' AND status = '1'");
		return $query->row;
	}

	public function getDriverByMobile($mobile) {
		$query = $this->db->query("SELECT * FROM `" . DB_PREFIX . "driver` WHERE mobile = '" . $this->db->escape($mobile) . "' AND mobile != '' AND status = '1'");
		return $query->row;
	}
	
	public function getDriverByCode($code) {
		$query = $this->db->query("SELECT * FROM `" . DB_PREFIX . "driver` WHERE code = '" . $this->db->escape($code) . "' AND code != '' AND status = '1'");
		return $query->row;
	}
	
	public function getMiniDriverByCode($branch_code) {
		$sql = "SELECT d.driver_id , CONCAT(d.firstname , ' ' , d.lastname) as driver_name , c.code as color , d.sort_order , d.email , d.image , d.code , c.icon FROM `oc_driver` d LEFT JOIN `oc_colors` c on (d.color_id = c.color_id) WHERE d.code = '" . $this->db->escape($branch_code) . "'";
		$query = $this->db->query($sql);
		
		return $query->row;
	}

	public function getDriverByToken($token) {
		$query = $this->db->query("SELECT * FROM " . DB_PREFIX . "driver WHERE token = '" . $this->db->escape($token) . "' AND token != '' AND status = '1'");
		return $query->row;
	}
	
	public function getBranchesByDriverCode($driver_code) {
		$query = $this->db->query("SELECT b.* FROM `" . DB_PREFIX . "branches` b LEFT JOIN `" . DB_PREFIX . "driver_to_branch` dtb on (b.branch_id = dtb.branch_id) LEFT JOIN `" . DB_PREFIX . "driver` d on (d.driver_id = dtb.driver_id) WHERE d.code = '" . $this->db->escape($driver_code) . "'");
		return $query->rows;
	}
	
	
}