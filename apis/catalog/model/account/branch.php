<?php
class ModelAccountBranch extends Model {
	public function connect($code) {
		$query = $this->db->query("SELECT * FROM " . DB_PREFIX . "branches WHERE LOWER(code) = '" . $this->db->escape(utf8_strtolower($code)) . "' AND status = '1'");
		if ($query->num_rows) {
			$query = $this->db->query("UPDATE " . DB_PREFIX . "branches SET connected = '1' WHERE LOWER(code) = '" . $this->db->escape(utf8_strtolower($code)) . "'");
			return true;
		} else {
			return false;
		}
	}
	
	public function getBranchByCode($code) {
		$query = $this->db->query("SELECT * FROM `" . DB_PREFIX . "branches` WHERE code = '" . $this->db->escape($code) . "' AND code != '' AND status = '1'");
		return $query->row;
	}
	
	public function connectDriverToBranch($driver_id , $branch_id) {
		$query = $this->db->query("SELECT * FROM `" . DB_PREFIX . "driver_to_branch` WHERE driver_id = '" . (int)$driver_id . "' AND branch_id = '" . (int)$branch_id . "'");
		if($query->num_rows == 0){
			$conect_query = $this->db->query("INSERT INTO `" . DB_PREFIX . "driver_to_branch` SET driver_id = '" . (int)$driver_id . "' , branch_id = '" . (int)$branch_id . "', date_added = NOW()");
			return true;
		}
		return false;
	}
	
	public function disconnectDriverFromBranch($driver_id , $branch_id) {
		$query = $this->db->query("DELETE FROM `" . DB_PREFIX . "driver_to_branch` WHERE driver_id = '" . (int)$driver_id . "' AND branch_id = '" . (int)$branch_id . "'");
		return true;
	}
	
	
	public function getConnectedDrivers($branch_code , $data) {
		$sql = "SELECT d.driver_id , CONCAT(d.firstname , ' ' , d.lastname) as driver_name , d.email , d.mobile , d.code FROM `oc_driver` d LEFT JOIN `oc_driver_to_branch` dtb on (d.driver_id = dtb.driver_id) LEFT JOIN `oc_branches` b on (dtb.branch_id = b.branch_id) WHERE b.code = '" . $this->db->escape($branch_code) . "'";
		
		if($data['email'] != ''){
			$sql .= " AND d.email LIKE '%" . $this->db->escape($data['name']) . "%'";
		}
		
		if($data['mobile'] != ''){
			$sql .= " AND d.mobile LIKE '%" . $this->db->escape($data['mobile']) . "%'";
		}
		
		if($data['code'] != ''){
			$sql .= " AND d.code LIKE '%" . $this->db->escape($data['code']) . "%'";
		}
		
		$query = $this->db->query($sql);
		
		return $query->rows;
	}
	
	public function monitorDrivers($branch_code) {
		//$sql = "SELECT DISTINCT d.driver_id , d.online , c.icon , CONCAT(d.firstname , ' ' , d.lastname) as driver_name , d.image , d.sort_order , c.code as color , d.email , d.mobile , d.code, l.latitude, l.heading , l.longitude FROM `oc_driver` d LEFT JOIN `oc_driver_to_branch` dtb on (d.driver_id = dtb.driver_id) LEFT JOIN `oc_branches` b on (dtb.branch_id = b.branch_id) LEFT JOIN `oc_driver_location` l on (d.code = l.driver_code) LEFT JOIN `oc_colors` c on (d.color_id = c.color_id) WHERE b.code = '" . $this->db->escape($branch_code) . "' AND l.latitude != ''";
		
		$sql= "SELECT DISTINCT d.driver_id , d.online , c.icon , CONCAT(d.firstname , ' ' , d.lastname) as driver_name , d.image , d.sort_order , c.code as color , d.email , d.mobile , d.code, l.latitude, l.heading , l.longitude , TIMESTAMPDIFF(MINUTE, hb.date_modified, NOW()) as heartbeat FROM `oc_driver` d LEFT JOIN `oc_driver_to_branch` dtb on (d.driver_id = dtb.driver_id) LEFT JOIN `oc_branches` b on (dtb.branch_id = b.branch_id) LEFT JOIN `oc_driver_location` l on (d.code = l.driver_code) LEFT JOIN `oc_colors` c on (d.color_id = c.color_id) LEFT JOIN `oc_heartbeat` hb on (d.code = hb.code) WHERE b.code = '" . $this->db->escape($branch_code) . "' AND l.latitude != ''";
		
		$query = $this->db->query($sql);
		
		$jdata = array();
		if($query->num_rows > 0){
			foreach($query->rows as $item){
				if($item['heartbeat'] && $item['heartbeat'] > 1){
					$item['online'] = "0";
				}
				$jdata[] = $item;
			}
		}
		
		return $jdata;
	}
	
	public function monitorDriver($driver_code) {
		$sql = "SELECT DISTINCT d.driver_id , d.online , c.icon , CONCAT(d.firstname , ' ' , d.lastname) as driver_name , d.image , d.sort_order , c.code as color , d.email , d.mobile , d.code, l.latitude, l.heading , l.longitude , TIMESTAMPDIFF(MINUTE, hb.date_modified, NOW()) as heartbeat FROM `" . DB_PREFIX . "driver` d LEFT JOIN `" . DB_PREFIX . "driver_to_branch` dtb on (d.driver_id = dtb.driver_id) LEFT JOIN `" . DB_PREFIX . "branches` b on (dtb.branch_id = b.branch_id) LEFT JOIN `" . DB_PREFIX . "driver_location` l on (d.code = l.driver_code) LEFT JOIN `" . DB_PREFIX . "colors` c on (d.color_id = c.color_id) LEFT JOIN `oc_heartbeat` hb on (d.code = hb.code) WHERE d.code = '" . $this->db->escape($driver_code) . "' AND l.latitude != ''";
		
		
		$query = $this->db->query($sql);
		$jdata = $query->row;
		if($jdata['heartbeat'] && $jdata['heartbeat'] > 1){
			$jdata['online'] = "0";
		}
		return $jdata;
	}
	public function getShortUrlCode($url , $driver_code){
		$query = $this->db->query("SELECT * FROM `" . DB_PREFIX . "shorturls` WHERE url = '" . $this->db->escape($url) . "' LIMIT 1");
		if($query->num_rows > 0){
			return $query->row['code'];
		} else {
			$code = strtoupper(token(8));
			$insert_query = $this->db->query("INSERT INTO `" . DB_PREFIX . "shorturls` SET url = '" . $this->db->escape($url) . "' , branch_code = '" . $this->db->escape($driver_code) . "' , code = '" . $this->db->escape($code) . "', date_added = NOW()");
			return $code;
		}
	}
}