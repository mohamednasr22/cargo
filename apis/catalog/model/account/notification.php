<?php
class ModelAccountNotification extends Model {
	public function add($branch_code,$driver_code,$message) {
		$query = $this->db->query("INSERT INTO `" . DB_PREFIX . "notifications` SET branch_code = '" . $this->db->escape($branch_code) . "' , driver_code = '" . $this->db->escape($driver_code) . "' , message = '" . $this->db->escape(json_encode($message)) . "', date_added = NOW()");
		$not_id = $this->db->getLastId();
		return $not_id;
	}
	
	public function received($id) {
		$this->db->query("UPDATE " . DB_PREFIX . "notifications SET received = '1' WHERE id = '" . (int)$id . "'");
	}
	
	public function pending($driver_code) {
		$query = $this->db->query("SELECT n.id,n.message,b.name,n.branch_code FROM `" . DB_PREFIX . "notifications` n LEFT JOIN `" . DB_PREFIX . "branches` b ON (n.branch_code = b.code) WHERE n.driver_code = '" . $this->db->escape($driver_code) . "' AND received = '0'");
		return $query->rows;
	}
}