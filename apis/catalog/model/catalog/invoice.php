<?php
class ModelCatalogInvoice extends Model {

	private $columns_guide = array(
		'name' => 's.name',
		'booking_no' => 'c.booking_no',
		'container_no' => "c.container_no",
		'amount' => "c.amount",
		'paid' => "c.paid",
		'invoice_no' => "c.invoice_no",
		'invoice_type' => "c.invoice_type_id"
	);


	public function getInvoices($data) {
		$sql = "SELECT c.* , s.name , ivt.name as invoice_type FROM " . DB_PREFIX . "invoice c LEFT JOIN `" . DB_PREFIX . "invoice_type` ivt on(c.invoice_type_id = ivt.id) LEFT JOIN `" . DB_PREFIX . "shipper` s on(s.shipper_id = c.shipper_id)";

		$pref = false;
		if(!$data['is_admin']){
			$pref = true;
			//$sql .= " LEFT JOIN `" . DB_PREFIX . "container` ct on(c.container_no = ct.container_no) LEFT JOIN `" . DB_PREFIX . "shipment` sp on(ct.container_id = sp.container_id) WHERE sp.user_id = '" . (int)$data['user_id'] . "'";
			$sql .= " WHERE c.user_id = '" . (int)$data['user_id'] . "'";
		}

		if(isset($data['filter'])){
			if($pref){
				foreach ($data['filter'] as $key => $value) {
					$f_key = $this->filterKey($key);
					$sql .= " AND " . $f_key . " LIKE '%" . $this->db->escape($value) . "%'";
				}
			} else {
				$fi = 0;
				foreach ($data['filter'] as $key => $value) {
					$f_key = $this->filterKey($key);
					if($fi == 0){
						$sql .= " WHERE " . $f_key . " LIKE '%" . $this->db->escape($value) . "%'";
					} else {
						$sql .= " AND " . $f_key . " LIKE '%" . $this->db->escape($value) . "%'";
					}
					$fi++;
				}
			}
		}

		$sort_data = array(
			'booking_no',
			'container_no',
			'invoice_no',
			'invoice_type_id',
			'amount'
		);

		if (isset($data['sort']) && in_array($data['sort'], $sort_data)) {
			$sql .= " ORDER BY " . $data['sort'];
		} else {
			$sql .= " ORDER BY c.invoice_id";
		}

		if (isset($data['order']) && (strtoupper($data['order']) == 'DESC')) {
			$sql .= " DESC";
		} else {
			$sql .= " ASC";
		}

		if (isset($data['start']) || isset($data['limit'])) {
			if ($data['start'] < 0) {
				$data['start'] = 0;
			}

			if ($data['limit'] < 1) {
				$data['limit'] = 20;
			}

			$sql .= " LIMIT " . (int)$data['start'] . "," . (int)$data['limit'];
		}

		$query = $this->db->query($sql);
		return $query->rows;
	}

	public function getTotalInvoices($data) {
		$sql = "SELECT COUNT(DISTINCT c.invoice_id) AS total , SUM(c.amount) AS amount , SUM(c.paid) AS paid FROM " . DB_PREFIX . "invoice c LEFT JOIN `" . DB_PREFIX . "invoice_type` ivt on(c.invoice_type_id = ivt.id) LEFT JOIN `" . DB_PREFIX . "shipper` s on(s.shipper_id = c.shipper_id)";

		$pref = false;
		if(!$data['is_admin']){
			$pref = true;
			//$sql .= " LEFT JOIN `" . DB_PREFIX . "container` ct on(c.container_no = ct.container_no) LEFT JOIN `" . DB_PREFIX . "shipment` sp on(ct.container_id = sp.container_id) WHERE sp.user_id = '" . (int)$data['user_id'] . "'";
			$sql .= " WHERE c.user_id = '" . (int)$data['user_id'] . "'";
		}

		if(isset($data['filter'])){
			if($pref){
				foreach ($data['filter'] as $key => $value) {
					$f_key = $this->filterKey($key);
					$sql .= " AND " . $f_key . " LIKE '%" . $this->db->escape($value) . "%'";
				}
			} else {
				$fi = 0;
				foreach ($data['filter'] as $key => $value) {
					$f_key = $this->filterKey($key);
					if($fi == 0){
						$sql .= " WHERE " . $f_key . " LIKE '%" . $this->db->escape($value) . "%'";
					} else {
						$sql .= " AND " . $f_key . " LIKE '%" . $this->db->escape($value) . "%'";
					}
					$fi++;
				}
			}
		}

		$query = $this->db->query($sql);
		return $query->row;
	}

	public function filterKey($key){
		if(isset($this->columns_guide[$key])){
			return $this->columns_guide[$key];
		}
		return $key;
	}

	public function getInvoice($invoice_id) {
		$query = $this->db->query("SELECT inv.* , s.name FROM " . DB_PREFIX . "invoice inv LEFT JOIN " . DB_PREFIX . "shipper s ON(s.shipper_id = inv.shipper_id) WHERE inv.invoice_id = '" . (int)$invoice_id . "'");
		return $query->row;
	}

	public function deleteInvoice($invoice_id) {
		$query = $this->db->query("DELETE FROM " . DB_PREFIX . "invoice WHERE invoice_id = '" . (int)$invoice_id . "'");
		$query = $this->db->query("DELETE FROM " . DB_PREFIX . "invoice_history WHERE invoice_id = '" . (int)$invoice_id . "'");
		$query = $this->db->query("DELETE FROM " . DB_PREFIX . "invoice_files WHERE invoice_id = '" . (int)$invoice_id . "'");
		return true;
	}

	public function addInvoiceHistory($data) {
		$this->db->query("INSERT INTO " . DB_PREFIX . "invoice_history SET date = '" . $this->db->escape($data['date']) . "', invoice_id = '" . (int)$data['invoice_id'] . "', user_id = '" . (int)$data['user_id'] . "', file = '" . $this->db->escape($data['file']) . "', note = '" . $this->db->escape($data['note']) . "', date_added = NOW()");
		//$this->db->query("UPDATE " . DB_PREFIX . "invoice SET invoice_status_id = '" . (int)$data['invoice_status_id'] . "' WHERE invoice_id = '" . (int)$data['invoice_id'] . "'");
		$record_id = $this->db->getLastId();
		return $record_id;
	}

	public function getInvoiceFiles($invoice_id) {
		$query = $this->db->query("SELECT f.file_id , f.invoice_id , u.code , f.user_id , concat(us.firstname , ' ' , us.lastname) as username , u.name as image_name , u.filename, f.date_added FROM " . DB_PREFIX . "invoice_files as f LEFT JOIN " . DB_PREFIX . "upload as u on (u.code = f.file) LEFT JOIN " . DB_PREFIX . "user as us on (us.user_id = f.user_id) WHERE f.invoice_id = '" . (int)$invoice_id . "'");
		return $query->rows;
	}

	public function addInvoiceFile($data) {
		$this->db->query("INSERT INTO " . DB_PREFIX . "invoice_files SET invoice_id = '" . (int)$data['invoice_id'] . "', user_id = '" . (int)$data['user_id'] . "', file = '" . $this->db->escape($data['file']) . "' , date_added = NOW()");
		$record_id = $this->db->getLastId();
		return $record_id;
	}

	public function getInvoiceFile($invoice_id , $file_id) {
		$query = $this->db->query("SELECT f.file_id , f.invoice_id , f.user_id , u.code , u.name as image_name , u.filename, f.date_added FROM " . DB_PREFIX . "invoice_files as f LEFT JOIN " . DB_PREFIX . "upload as u on (u.code = f.file) LEFT JOIN " . DB_PREFIX . "user as us on (us.user_id = f.user_id) WHERE f.invoice_id = '" . (int)$invoice_id . "' AND f.file_id = '" . (int)$file_id . "'");
		return $query->row;
	}

	public function deleteInvoiceFile($data) {
		$query = $this->db->query("DELETE FROM " . DB_PREFIX . "invoice_files WHERE invoice_id = '" . (int)$data['invoice_id'] . "' AND file_id = '" . (int)$data['file_id'] . "'");
		$query = $this->db->query("DELETE FROM " . DB_PREFIX . "upload WHERE code = '" . $this->db->escape($data['code']) . "'");
		return true;
	}

	public function getInvoiceHistory($invoice_id) {
		$query = $this->db->query("SELECT h.history_id , h.note , h.invoice_id , h.user_id , u.name as image_name , concat(us.firstname , ' ' , us.lastname) as username , u.filename , h.date , h.date_added FROM " . DB_PREFIX . "invoice_history as h LEFT JOIN " . DB_PREFIX . "user as us on (us.user_id = h.user_id) LEFT JOIN " . DB_PREFIX . "upload as u on (u.code = h.file) WHERE invoice_id = '" . (int)$invoice_id . "'");
		return $query->rows;
	}

	public function addInvoice($data) {
		$this->db->query("INSERT INTO " . DB_PREFIX . "invoice SET user_id = '" . (int)$data['user_id'] . "', container_no = '" . $this->db->escape($data['container_no']) . "', shipper_id = '" . (int)$data['shipper_id'] . "', booking_no = '" . $this->db->escape($data['booking_no']) . "', invoice_no = '" . $this->db->escape($data['invoice_no']) . "', amount = '" . (float)$data['amount'] . "', paid = '" . (float)$data['paid'] . "', invoice_type_id = '" . (int)$data['invoice_type_id'] . "', date_modified = NOW(), date_added = NOW()");

		$record_id = $this->db->getLastId();

		return $record_id;
	}

	public function updateInvoice($invoice_id , $data) {
		$this->db->query("UPDATE " . DB_PREFIX . "invoice SET user_id = '" . (int)$data['user_id'] . "', container_no = '" . $this->db->escape($data['container_no']) . "', shipper_id = '" . (int)$data['shipper_id'] . "', booking_no = '" . $this->db->escape($data['booking_no']) . "', invoice_no = '" . $this->db->escape($data['invoice_no']) . "', amount = '" . (int)$data['amount'] . "', paid = '" . (float)$data['paid'] . "', invoice_type_id = '" . (int)$data['invoice_type_id'] . "' , date_modified = NOW(), date_added = NOW() WHERE invoice_id = '" . (int)$invoice_id  . "'");

		return;
	}


}
