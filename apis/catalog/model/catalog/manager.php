<?php
class ModelCatalogManager extends Model {
	public function getShipmentStatuses() {
		$query = $this->db->query("SELECT * FROM " . DB_PREFIX . "shipment_statuses");
		return $query->rows;
	}

	public function addShipmentStatuses($data) {
		$query = $this->db->query("INSERT INTO " . DB_PREFIX . "shipment_statuses SET name = '" . $this->db->escape($data['name']) . "', status = '" . (int)$data['status'] . "'");
		$record_id = $this->db->getLastId();

		return $record_id;
	}

	public function getNotifications($data){
		$query = $this->db->query("SELECT * FROM " . DB_PREFIX . "notifications WHERE user_id = '" . (int)$data['user_id'] . "' ORDER BY date_added DESC LIMIT 10");

		return $query->rows;
	}

	public function getNotSeenNotifications($data){
		$query = $this->db->query("SELECT count(*) as total FROM " . DB_PREFIX . "notifications WHERE user_id = '" . (int)$data['user_id'] . "' AND seen = '0'");

		return $query->row;
	}

	public function addNotification($data){
		$this->db->query("INSERT INTO " . DB_PREFIX . "notifications SET type = '" . $this->db->escape($data['type']) . "', user_id = '" . (int)$data['user_id'] . "', type_id = '" . (int)$data['type_id'] . "', message = '" . $this->db->escape($data['message']) . "', date_added = NOW()");
	}

	public function seenNotifications($data){
		$this->db->query("UPDATE " . DB_PREFIX . "notifications SET seen = '1' WHERE user_id = '" . (int)$data['user_id'] . "'");
	}

	public function getContainerStatuses() {
		$query = $this->db->query("SELECT * FROM " . DB_PREFIX . "container_statuses");
		return $query->rows;
	}

	public function addContainerStatuses($data) {
		$query = $this->db->query("INSERT INTO " . DB_PREFIX . "container_statuses SET name = '" . $this->db->escape($data['name']) . "', status = '" . (int)$data['status'] . "'");
		$record_id = $this->db->getLastId();

		return $record_id;
	}

	public function getDestinations() {
		$query = $this->db->query("SELECT * FROM " . DB_PREFIX . "destinations");
		return $query->rows;
	}

	public function getDestination($id) {
		$query = $this->db->query("SELECT * FROM " . DB_PREFIX . "destinations WHERE id = '" . (int)$id . "'");
		return $query->row;
	}

	public function addDestination($data) {
		$query = $this->db->query("INSERT INTO " . DB_PREFIX . "destinations SET name = '" . $this->db->escape($data['name']) . "', status = '" . (int)$data['status'] . "'");
		$record_id = $this->db->getLastId();

		return $record_id;
	}

	public function updateDestination($id,$data) {
		$query_arr = array();
		if(isset($data["name"])){
			$query_arr[] = "name = '" . $this->db->escape($data['name']) . "'";
		}
		if(isset($data["status"])){
			$query_arr[] = "status = '" . $this->db->escape($data['status']) . "'";
		}

		if(count($query_arr)){
			$this->db->query("UPDATE " . DB_PREFIX . "destinations SET " . implode(",", $query_arr) . " WHERE id = '" . (int)$id . "'");
		}
		return true;
	}

	public function getContainerTypes() {
		$query = $this->db->query("SELECT * FROM " . DB_PREFIX . "container_type");
		return $query->rows;
	}

	public function addContainerTypes($data) {
		$query = $this->db->query("INSERT INTO " . DB_PREFIX . "container_type SET name = '" . $this->db->escape($data['name']) . "', status = '" . (int)$data['status'] . "'");
		$record_id = $this->db->getLastId();

		return $record_id;
	}


	public function getShipperTypes() {
		$query = $this->db->query("SELECT * FROM " . DB_PREFIX . "shipper_type");
		return $query->rows;
	}

	public function addShipperTypes($data) {
		$query = $this->db->query("INSERT INTO " . DB_PREFIX . "shipper_type SET name = '" . $this->db->escape($data['name']) . "', status = '" . (int)$data['status'] . "'");
		$record_id = $this->db->getLastId();

		return $record_id;
	}

	public function getInvoiceTypes() {
		$query = $this->db->query("SELECT * FROM " . DB_PREFIX . "invoice_type");
		return $query->rows;
	}

	public function addInvoiceTypes($data) {
		$query = $this->db->query("INSERT INTO " . DB_PREFIX . "invoice_type SET name = '" . $this->db->escape($data['name']) . "', status = '" . (int)$data['status'] . "'");
		$record_id = $this->db->getLastId();

		return $record_id;
	}

	public function getInvoiceStatuses() {
		$query = $this->db->query("SELECT * FROM " . DB_PREFIX . "invoice_status");
		return $query->rows;
	}

	public function addInvoiceStatuses($data) {
		$query = $this->db->query("INSERT INTO " . DB_PREFIX . "invoice_status SET name = '" . $this->db->escape($data['name']) . "', status = '" . (int)$data['status'] . "'");
		$record_id = $this->db->getLastId();

		return $record_id;
	}

	public function updateInvoiceStatus($id , $data) {
		$query = $this->db->query("UPDATE " . DB_PREFIX . "invoice_status SET name = '" . $this->db->escape($data['name']) . "', status = '" . (int)$data['status'] . "' WHERE id ='" . (int)$id . "'");
		return true;
	}

	public function updateInvoiceType($id , $data) {
		$query = $this->db->query("UPDATE " . DB_PREFIX . "invoice_type SET name = '" . $this->db->escape($data['name']) . "', status = '" . (int)$data['status'] . "' WHERE id ='" . (int)$id . "'");
		return true;
	}

	public function updateShipperType($id , $data) {
		$query = $this->db->query("UPDATE " . DB_PREFIX . "shipper_type SET name = '" . $this->db->escape($data['name']) . "', status = '" . (int)$data['status'] . "' WHERE id ='" . (int)$id . "'");
		return true;
	}

	public function updateShipmentStatus($id , $data) {
		$query = $this->db->query("UPDATE " . DB_PREFIX . "shipment_statuses SET name = '" . $this->db->escape($data['name']) . "', status = '" . (int)$data['status'] . "' WHERE id ='" . (int)$id . "'");
		return true;
	}


	public function updateContainerStatus($id , $data) {
		$query = $this->db->query("UPDATE " . DB_PREFIX . "container_statuses SET name = '" . $this->db->escape($data['name']) . "', status = '" . (int)$data['status'] . "' WHERE id ='" . (int)$id . "'");
		return true;
	}

	public function updateContainerType($id , $data) {
		$query = $this->db->query("UPDATE " . DB_PREFIX . "container_type SET name = '" . $this->db->escape($data['name']) . "', status = '" . (int)$data['status'] . "' WHERE id ='" . (int)$id . "'");
		return true;
	}


	public function deleteInvoiceStatus($id) {
		$query = $this->db->query("DELETE FROM " . DB_PREFIX . "invoice_status WHERE id ='" . (int)$id . "'");
		return true;
	}

	public function deleteInvoiceType($id) {
		$query = $this->db->query("DELETE FROM " . DB_PREFIX . "invoice_type WHERE id ='" . (int)$id . "'");
		return true;
	}

	public function deleteShipperType($id) {
		$query = $this->db->query("DELETE FROM " . DB_PREFIX . "shipper_type WHERE id ='" . (int)$id . "'");
		return true;
	}

	public function deleteShipmentStatus($id) {
		$query = $this->db->query("DELETE FROM " . DB_PREFIX . "shipment_statuses WHERE id ='" . (int)$id . "'");
		return true;
	}

	public function deleteDestination($id) {
		$query = $this->db->query("DELETE FROM " . DB_PREFIX . "destinations WHERE id ='" . (int)$id . "'");
		return true;
	}

	public function deleteContainerStatus($id) {
		$query = $this->db->query("DELETE FROM " . DB_PREFIX . "container_statuses WHERE id ='" . (int)$id . "'");
		return true;
	}

	public function deleteContainerType($id) {
		$query = $this->db->query("DELETE FROM " . DB_PREFIX . "container_type  WHERE id ='" . (int)$id . "'");
		return true;
	}


	public function getCouriers() {
		$query = $this->db->query("SELECT * FROM " . DB_PREFIX . "courier");
		return $query->rows;
	}

	public function addCourier($data) {
		$query = $this->db->query("INSERT INTO " . DB_PREFIX . "courier SET name = '" . $this->db->escape($data['name']) . "',url = '" . $this->db->escape($data['url']) . "', status = '" . (int)$data['status'] . "'");
		$record_id = $this->db->getLastId();

		return $record_id;
	}

	public function deleteCourier($id) {
		$query = $this->db->query("DELETE FROM " . DB_PREFIX . "courier  WHERE id ='" . (int)$id . "'");
		return true;
	}

	public function updateCourier($id , $data) {
		$query = $this->db->query("UPDATE " . DB_PREFIX . "courier SET name = '" . $this->db->escape($data['name']) . "',url = '" . $this->db->escape($data['url']) . "', status = '" . (int)$data['status'] . "' WHERE id ='" . (int)$id . "'");
		return true;
	}

	public function getWarehouses() {
		$query = $this->db->query("SELECT * FROM " . DB_PREFIX . "warehouse ORDER BY sort_order ASC");
		return $query->rows;
	}

	public function addWarehouse($data) {
		$query = $this->db->query("INSERT INTO " . DB_PREFIX . "warehouse SET name = '" . $this->db->escape($data['name']) . "' , sort_order = '" . (int)$data['sort_order'] . "', status = '" . (int)$data['status'] . "'");
		$record_id = $this->db->getLastId();

		return $record_id;
	}

	public function deleteWarehouse($id) {
		$query = $this->db->query("DELETE FROM " . DB_PREFIX . "warehouse  WHERE id ='" . (int)$id . "'");
		return true;
	}

	public function updateWarehouse($id , $data) {
		$query = $this->db->query("UPDATE " . DB_PREFIX . "warehouse SET name = '" . $this->db->escape($data['name']) . "' , sort_order = '" . (int)$data['sort_order'] ."', status = '" . (int)$data['status'] . "' WHERE id ='" . (int)$id . "'");
		return true;
	}

}
