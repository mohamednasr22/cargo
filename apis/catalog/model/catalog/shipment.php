<?php
class ModelCatalogShipment extends Model {
	private $columns_guide = array(
		'shipment_id' => 'sp.shipment_id',
		'shipper_name' => "s.name",
		'receiver_name' => "r.name",
		'destination_name' => "d.name",
		'warehouse_name' => "w.name",
		'description' => "shp.data"
	);
	public function getShipment($shipment_id) {
		$query = $this->db->query("SELECT s.*, w.name as warehouse_name FROM " . DB_PREFIX . "shipment s LEFT JOIN `" . DB_PREFIX . "warehouse` as w on(s.warehouse_id = w.id) WHERE s.shipment_id = '" . (int)$shipment_id . "'");
		return $query->row;
	}

	public function deleteShipment($shipment_id) {
		$query = $this->db->query("DELETE FROM " . DB_PREFIX . "shipment WHERE shipment_id = '" . (int)$shipment_id . "'");
		$query = $this->db->query("DELETE FROM " . DB_PREFIX . "shipment_history WHERE shipment_id = '" . (int)$shipment_id . "'");
		$query = $this->db->query("DELETE FROM " . DB_PREFIX . "shipment_packages WHERE shipment_id = '" . (int)$shipment_id . "'");
		$query = $this->db->query("DELETE FROM " . DB_PREFIX . "shipment_files WHERE shipment_id = '" . (int)$shipment_id . "'");
		return true;
	}

	public function getShipments($data) {
		$sql = "SELECT DISTINCT sp.user_id , sp.shipment_id as shipment_id , sp.container_type_id , sp.date , sp.note , sp.warehouse_id , cnt.container_no , cnt.container_id , sp.container_id , sp.shipment_status_id , sp.akey , sp.title , sst.name as shipment_status , s.name as shipper_name , s.email as shipper_email , r.name as receiver_name , d.name as destination_name , w.name as warehouse_name , ct.name container_type FROM " . DB_PREFIX . "shipment as sp LEFT JOIN `" . DB_PREFIX . "shipper` as s on(sp.shipper_id = s.shipper_id) LEFT JOIN `" . DB_PREFIX . "receiver` as r on(sp.receiver_id = r.receiver_id) LEFT JOIN `" . DB_PREFIX . "destinations` as d on(sp.destination_id = d.id) LEFT JOIN `" . DB_PREFIX . "warehouse` as w on(sp.warehouse_id = w.id) LEFT JOIN `" . DB_PREFIX . "container` as cnt on(cnt.container_id = sp.container_id) LEFT JOIN `" . DB_PREFIX . "container_type` as ct on(sp.container_type_id = ct.id) LEFT JOIN `" . DB_PREFIX . "shipment_statuses` as sst on(sp.shipment_status_id = sst.id) INNER JOIN `" . DB_PREFIX . "shipment_packages` shp on (sp.shipment_id = shp.shipment_id) WHERE s.name != ''";

		$pref = false;
		if(isset($data['is_admin']) && !$data['is_admin']){
			$pref = true;
			$sql .= " AND sp.user_id = '" . (int)$data['user_id'] . "' AND s.name != ''";
		}

		if(isset($data['shipment_id'])){
			if($pref){
				$sql .= " AND sp.shipment_id = '" . (int)$data['shipment_id'] . "'";
			} else {
				$sql .= " AND sp.shipment_id = '" . (int)$data['shipment_id'] . "'";
			}
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
						$sql .= " AND " . $f_key . " LIKE '%" . $this->db->escape($value) . "%'";
					} else {
						$sql .= " AND " . $f_key . " LIKE '%" . $this->db->escape($value) . "%'";
					}
					$fi++;
				}
			}
		}

		$sort_data = array(
			'shipment_id',
			'shipper_name',
			'receiver_name',
			'destination_name',
			'warehouse_name',
			'date'
		);

		if (isset($data['sort']) && in_array($data['sort'], $sort_data)) {
			$sql .= " ORDER BY " . $data['sort'];
		} else {
			$sql .= " ORDER BY sp.shipment_id";
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


		//echo $sql;

		$query = $this->db->query($sql);
		return $query->rows;
	}

	public function filterKey($key){
		if(isset($this->columns_guide[$key])){
			return $this->columns_guide[$key];
		}
		return $key;
	}

	public function getTotalShipments($data) {
		$sql = "SELECT COUNT(DISTINCT sp.shipment_id) AS total FROM oc_shipment sp LEFT JOIN `" . DB_PREFIX . "shipper` as s on(sp.shipper_id = s.shipper_id) LEFT JOIN `" . DB_PREFIX . "destinations` as d on(sp.destination_id = d.id) LEFT JOIN `" . DB_PREFIX . "warehouse` as w on(sp.warehouse_id = w.id) INNER JOIN `oc_shipment_packages` shp on (sp.shipment_id = shp.shipment_id)";

		$pref = false;
		if(isset($data['is_admin']) && !$data['is_admin']){
			$pref = true;
			$sql .= " WHERE sp.user_id = '" . (int)$data['user_id'] . "'";
		}

		if(isset($data['shipment_id'])){
			if($pref){
				$sql .= " AND sp.shipment_id = '" . (int)$data['shipment_id'] . "'";
			} else {
				$sql .= " WHERE sp.shipment_id = '" . (int)$data['shipment_id'] . "'";
			}
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
		return $query->row['total'];
	}

	public function addShipment($data) {
		$this->db->query("INSERT INTO " . DB_PREFIX . "shipment SET user_id = '" . (int)$data['user_id'] . "', shipper_id = '" . (int)$data['shipper_id'] . "', receiver_id = '" . (int)$data['receiver_id'] . "', title = '" . (int)(isset($data['title']) ? $data['title'] : '0') . "', akey = '" . (int)(isset($data['akey']) ? $data['akey'] : '0') . "',	date = '" . $this->db->escape($data['date']) . "',	note = '" . $this->db->escape($data['note']) . "', warehouse_id = '" . (int)$data['warehouse_id'] . "', container_type_id = '" . (int)$data['container_type_id'] . "', destination_id = '" . (int)$data['destination_id'] . "', date_modified = NOW(), date_added = NOW()");

		$record_id = $this->db->getLastId();

		if(isset($data['shipment_status_id'])){
			$this->db->query("UPDATE " . DB_PREFIX . "shipment SET shipment_status_id = '" . (int)$data['shipment_status_id'] . "' WHERE shipment_id = '" . (int)$record_id . "'");
		}

		return $record_id;
	}
	
	public function updateShipmentNote($shipment_id , $note) {
		$this->db->query("UPDATE " . DB_PREFIX . "shipment SET note = '" . $this->db->escape($note) . "' WHERE shipment_id = '" . (int)$shipment_id . "'");

		return true;
	}

	public function updateShipment($shipment_id , $data) {
		$this->db->query("UPDATE " . DB_PREFIX . "shipment SET shipper_id = '" . (int)$data['shipper_id'] . "', receiver_id = '" . (int)$data['receiver_id'] . "', title = '" . (int)(isset($data['title']) ? $data['title'] : '0') . "', akey = '" . (int)(isset($data['akey']) ? $data['akey'] : '0') . "',	date = '" . $this->db->escape($data['date']) . "',	note = '" . $this->db->escape($data['note']) . "', warehouse_id = '" . (int)$data['warehouse_id'] . "', container_type_id = '" . (int)$data['container_type_id'] . "', destination_id = '" . (int)$data['destination_id'] . "' ,date_modified = NOW() WHERE shipment_id = '" . (int)$shipment_id . "'");

		if(isset($data['shipment_status_id'])){
			$this->db->query("UPDATE " . DB_PREFIX . "shipment SET shipment_status_id = '" . (int)$data['shipment_status_id'] . "' WHERE shipment_id = '" . (int)$shipment_id . "'");
		}

		$query = $this->db->query("DELETE FROM " . DB_PREFIX . "shipment_packages WHERE shipment_id = '" . (int)$shipment_id . "'");

		return true;
	}



	public function assignToContainer($shipment_id , $container_id) {
		$this->db->query("UPDATE " . DB_PREFIX . "shipment SET container_id = '" . (int)$data['user_id'] . "' WHERE shipment_id = '" . (int)$shipment_id . "'");
		return true;
	}

	public function addShipmentHistory($data) {
		$this->db->query("INSERT INTO " . DB_PREFIX . "shipment_history SET shipment_status_id = '" . (int)$data['shipment_status_id'] . "', shipment_id = '" . (int)$data['shipment_id'] . "', user_id = '" . (int)$data['user_id'] . "', file = '" . $this->db->escape($data['file']) . "', note = '" . $this->db->escape($data['note']) . "', date_added = NOW()");

		$this->db->query("UPDATE " . DB_PREFIX . "shipment SET shipment_status_id = '" . (int)$data['shipment_status_id'] . "' WHERE shipment_id = '" . (int)$data['shipment_id'] . "'");

		$record_id = $this->db->getLastId();



		return $record_id;
	}



	public function addShipmentFile($data) {
		$this->db->query("INSERT INTO " . DB_PREFIX . "shipment_files SET shipment_id = '" . (int)$data['shipment_id'] . "', user_id = '" . (int)$data['user_id'] . "', file = '" . $this->db->escape($data['file']) . "' , date_added = NOW()");
		$record_id = $this->db->getLastId();
		return $record_id;
	}

	public function getShipmentHistory($shipment_id) {
		$query = $this->db->query("SELECT h.history_id , h.note , h.file , h.shipment_id , h.user_id , concat(us.firstname , ' ' , us.lastname) as username , h.shipment_status_id , sst.name , h.date_added FROM " . DB_PREFIX . "shipment_history as h LEFT JOIN " . DB_PREFIX . "shipment_statuses as sst on (h.shipment_status_id = sst.id) LEFT JOIN " . DB_PREFIX . "user as us on (us.user_id = h.user_id) WHERE shipment_id = '" . (int)$shipment_id . "'");
		return $query->rows;
	}

	public function getHistoryItem($history_id) {
		$query = $this->db->query("SELECT * FROM " . DB_PREFIX . "shipment_history WHERE history_id = '" . (int)$history_id . "'");
		return $query->row;
	}

	public function updateHistoryItem($history_id,$file){
		$this->db->query("UPDATE " . DB_PREFIX . "shipment_history SET file = '" . $this->db->escape($file) . "' WHERE history_id = '" . (int)$history_id . "'");
	}

	/*public function getShipmentHistory($shipment_id) {
		$query = $this->db->query("SELECT h.history_id , h.shipment_id , h.user_id , concat(us.firstname , ' ' , us.lastname) as username , u.name as image_name , u.filename , h.shipment_status_id , sst.name , h.date_added FROM " . DB_PREFIX . "shipment_history as h LEFT JOIN " . DB_PREFIX . "shipment_statuses as sst on (h.shipment_status_id = sst.id) LEFT JOIN " . DB_PREFIX . "upload as u on (u.code = h.file) LEFT JOIN " . DB_PREFIX . "user as us on (us.user_id = h.user_id) WHERE shipment_id = '" . (int)$shipment_id . "'");
		return $query->rows;
	}*/

	public function getShipmentFiles($shipment_id) {
		$query = $this->db->query("SELECT f.file_id , u.code , f.shipment_id , f.user_id , concat(us.firstname , ' ' , us.lastname) as username , u.name as image_name , u.filename, f.date_added FROM " . DB_PREFIX . "shipment_files as f LEFT JOIN " . DB_PREFIX . "upload as u on (u.code = f.file) LEFT JOIN " . DB_PREFIX . "user as us on (us.user_id = f.user_id) WHERE f.shipment_id = '" . (int)$shipment_id . "'");
		return $query->rows;
	}

	public function getShipmentFile($shipment_id , $file_id) {
		$query = $this->db->query("SELECT f.file_id , f.shipment_id , f.user_id , u.code , u.name as image_name , u.filename, f.date_added FROM " . DB_PREFIX . "shipment_files as f LEFT JOIN " . DB_PREFIX . "upload as u on (u.code = f.file) LEFT JOIN " . DB_PREFIX . "user as us on (us.user_id = f.user_id) WHERE f.shipment_id = '" . (int)$shipment_id . "' AND f.file_id = '" . (int)$file_id . "'");
		return $query->row;
	}

	public function deleteShipmentFile($data) {
		$query = $this->db->query("DELETE FROM " . DB_PREFIX . "shipment_files WHERE shipment_id = '" . (int)$data['shipment_id'] . "' AND file_id = '" . (int)$data['file_id'] . "'");
		$query = $this->db->query("DELETE FROM " . DB_PREFIX . "upload WHERE code = '" . $this->db->escape($data['code']) . "'");
		return true;
	}

	public function addShipmentPackage($data) {
		$this->db->query("INSERT INTO " . DB_PREFIX . "shipment_packages SET type = '" . (int)$data['type'] . "', shipment_id = '" . (int)$data['shipment_id'] . "', data = '" . $this->db->escape(json_encode($data['data'],true)) . "', 	file = '" . $this->db->escape($data['file']) . "'");

		$record_id = $this->db->getLastId();

		return $record_id;
	}

	public function getShipmentPackage($shipment_id , $filter_description = false) {
		$sql = "SELECT * FROM " . DB_PREFIX . "shipment_packages WHERE shipment_id = '" . (int)$shipment_id . "'";
		if($filter_description){
			$sql .= " AND LOWER(data) LIKE '%" . strtolower($filter_description) . "%'";
			//$sql .= " AND data LIKE '%" . strtolower($filter_description) . "%'";
		}
		$query = $this->db->query($sql);
		return $query->rows;
	}


}
