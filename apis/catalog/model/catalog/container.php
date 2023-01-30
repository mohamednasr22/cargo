<?php
class ModelCatalogContainer extends Model {
	private $columns_guide = array(
		'booking_no' => 'c.booking_no',
		'container_no' => "c.container_no",
		'port_of_loading' => "c.port_of_loading",
		'port_of_discharge' => "c.port_of_discharge",
		'container_status_id' => "c.container_status_id"
	);
	public function getReminderContainer(){
			$query = $this->db->query("SELECT * from `oc_container` WHERE eta_max < DATE_ADD(CURDATE(), INTERVAL " . $this->config->get('module_cargo_setting_eta_reminder') . " DAY) AND eta_sent = '0'");
			return $query->rows;
	}

	public function setReminderContainer($container_id){
			$query = $this->db->query("UPDATE `oc_container` SET eta_sent = '1' WHERE container_id = '" . (int)$container_id . "'");
			return true;
	}

	public function getSharedContainers($data){
		$sql = "SELECT s.warehouse_id , s.destination_id , w.name as warehouse_name , d.name as destination_name , COUNT(s.shipment_id) as total_shipments , GROUP_CONCAT(s.shipment_id SEPARATOR ', ') as shipments  FROM `" . DB_PREFIX . "shipment` s LEFT JOIN `" . DB_PREFIX . "destinations` as d on(s.destination_id = d.id) LEFT JOIN `" . DB_PREFIX . "warehouse` as w on(s.warehouse_id = w.id) WHERE s.container_id = '0' AND s.container_type_id = '" . (int)$this->config->get('module_cargo_setting_shared_container_id') . "'";

		$pref = false;
		/*
		if(isset($data['is_admin']) && !$data['is_admin']){
			$pref = true;
			$sql .= " AND s.user_id = '" . (int)$data['user_id'] . "'";
		}
		*/

		$sql .= " GROUP BY s.warehouse_id , s.destination_id";

		$query = $this->db->query($sql);
		return $query->rows;
	}

	public function getContainerShipmentPackages($shipment_id){
		$query = $this->db->query("SELECT s.shipment_id , sh.name as shipper_name , s.title , s.akey , GROUP_CONCAT(p.data) as packages From `" . DB_PREFIX . "shipment` s LEFT JOIN `" . DB_PREFIX . "shipper` sh on(s.shipper_id = sh.shipper_id) LEFT JOIN `" . DB_PREFIX . "shipment_packages` p on(s.shipment_id = p.shipment_id) where s.shipment_id = '" . (int)$shipment_id . "'");
		return $query->row;
	}

	public function getContainers($data) {
		$sql = "SELECT DISTINCT c.* , cr.name as courier_name , cr.url as courier_url , cst.name as container_status FROM " . DB_PREFIX . "container c LEFT JOIN " . DB_PREFIX . "container_statuses cst on(c.container_status_id = cst.id) LEFT JOIN " . DB_PREFIX . "shipment s on (c.container_id = s.container_id) LEFT JOIN " . DB_PREFIX . "courier cr on (c.courier = cr.id)";

		$pref = false;
		if(!$data['is_admin']){
			$pref = true;
			$sql .= " WHERE s.user_id = '" . (int)$data['user_id'] . "'";
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
			'container_id',
			'booking_no',
			'container_no',
			'port_of_loading',
			'port_of_discharge',
			'courier',
			'eta',
			'sailing_date'
		);

		if (isset($data['sort']) && in_array($data['sort'], $sort_data)) {
			$sql .= " ORDER BY " . $data['sort'];
		} else {
			$sql .= " ORDER BY c.container_id";
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

	public function getTotalContainers($data){
		$sql = "SELECT COUNT(DISTINCT c.container_id) AS total FROM " . DB_PREFIX . "container c LEFT JOIN " . DB_PREFIX . "container_statuses cst on(c.container_status_id = cst.id) LEFT JOIN " . DB_PREFIX . "shipment s on (c.container_id = s.container_id) LEFT JOIN " . DB_PREFIX . "courier cr on (c.courier = cr.id)";

		$pref = false;
		if(!$data['is_admin']){
			$pref = true;
			$sql .= " WHERE s.user_id = '" . (int)$data['user_id'] . "'";
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

	public function filterKey($key){
		if(isset($this->columns_guide[$key])){
			return $this->columns_guide[$key];
		}
		return $key;
	}

	public function getContainer($container_id) {
		$query = $this->db->query("SELECT c.* , cr.name as courier_name , cr.url as courier_url FROM " . DB_PREFIX . "container c LEFT JOIN " . DB_PREFIX . "courier cr on (c.courier = cr.id) WHERE c.container_id = '" . (int)$container_id . "'");
		return $query->row;
	}

	public function getContainerShippers($container_id){
		$query = $this->db->query("SELECT s.shipper_id , sp.shipment_id , s.name , s.email , cs.container_id FROM `" . DB_PREFIX . "container_shipments` cs LEFT JOIN `" . DB_PREFIX . "shipment` sp on (sp.shipment_id = cs.shipment_id) LEFT JOIN `" . DB_PREFIX . "shipper` s on (sp.shipper_id = s.shipper_id) WHERE cs.container_id = '" . (int)$container_id . "'");
		return $query->rows;
	}

	public function getSignatureByCode($code){
		$query = $this->db->query("SELECT s.* , c.container_no FROM `" . DB_PREFIX . "signature` s LEFT JOIN `" . DB_PREFIX . "container` c on(s.container_id = c.container_id)  WHERE s.shipper_code = '" . $this->db->escape($code) . "'");
		return $query->row;
	}

	public function getManagerSignatureByCode($code){
		$query = $this->db->query("SELECT * FROM `" . DB_PREFIX . "signature` WHERE shipper_code = '" . $this->db->escape($code) . "' AND shipper_signed = '1' AND user_signed = '0'");
		return $query->row;
	}

	public function getContainerSignatureById($signature_id){
		$query = $this->db->query("SELECT s.* , sp.name as shipper_name , c.container_no , c.booking_no FROM `" . DB_PREFIX . "signature` s LEFT JOIN `" . DB_PREFIX . "container` c on(s.container_id = c.container_id) LEFT JOIN `" . DB_PREFIX . "shipper` sp on(s.shipper_id = sp.shipper_id) WHERE s.shipper_signed = '1' AND s.signature_id = '" . (int)$signature_id . "'");
		return $query->rows;
	}



	public function getContainersSignatures(){
		$query = $this->db->query("SELECT s.* , sp.name as shipper_name , c.container_no , c.booking_no FROM `" . DB_PREFIX . "signature` s LEFT JOIN `" . DB_PREFIX . "container` c on(s.container_id = c.container_id) LEFT JOIN `" . DB_PREFIX . "shipper` sp on(s.shipper_id = sp.shipper_id) WHERE s.shipper_signed = '1'");
		return $query->rows;
	}

	public function setSignatureByCode($code){
		$this->db->query("UPDATE " . DB_PREFIX . "signature SET shipper_signed = '1' WHERE shipper_code = '" . $this->db->escape($code) . "'");
	}

	public function setManagerSignatureByCode($user_id , $code){
		$this->db->query("UPDATE " . DB_PREFIX . "signature SET user_signed = '1' , user_id = '" . (int)$user_id . "' WHERE shipper_code = '" . $this->db->escape($code) . "'");
	}



	public function deleteContainer($container_id) {
		$query = $this->db->query("DELETE FROM " . DB_PREFIX . "container WHERE container_id = '" . (int)$container_id . "'");
		$query = $this->db->query("DELETE FROM " . DB_PREFIX . "container_history WHERE container_id = '" . (int)$container_id . "'");
		$query = $this->db->query("DELETE FROM " . DB_PREFIX . "container_shipments WHERE container_id = '" . (int)$container_id . "'");
		$query = $this->db->query("DELETE FROM " . DB_PREFIX . "container_files WHERE container_id = '" . (int)$container_id . "'");
		return true;
	}

	public function addContainerHistory($data) {
		$this->db->query("INSERT INTO " . DB_PREFIX . "container_history SET container_status_id = '" . (int)$data['container_status_id'] . "', container_id = '" . (int)$data['container_id'] . "', user_id = '" . (int)$data['user_id'] . "', file = '" . $this->db->escape($data['file']) . "', note = '" . $this->db->escape($data['note']) . "', date_added = NOW()");

		$record_id = $this->db->getLastId();

		$this->db->query("UPDATE " . DB_PREFIX . "container SET container_status_id = '" . (int)$data['container_status_id'] . "' WHERE container_id = '" . (int)$data['container_id'] . "'");



		return $record_id;
	}

	public function requestSignature($data){
		$this->db->query("INSERT INTO " . DB_PREFIX . "signature SET container_id = '" . (int)$data['container_id'] . "', shipment_id = '" . (int)$data['shipment_id'] . "', shipper_id = '" . (int)$data['shipper_id'] . "', shipper_code = '" . $this->db->escape($data['shipper_code']) . "', contract_form = '" . $this->db->escape($data['contract_form']) . "' , date_added = NOW()");
		$record_id = $this->db->getLastId();
		return $record_id;
	}


	public function getSignatures($container_id) {
		$query = $this->db->query("SELECT * FROM " . DB_PREFIX . "signature WHERE container_id = '" . (int)$container_id . "'");
		return $query->rows;
	}

	public function getContainerFiles($container_id) {
		$query = $this->db->query("SELECT f.file_id , u.code , f.container_id , f.user_id , concat(us.firstname , ' ' , us.lastname) as username , u.name as image_name , u.filename, f.date_added FROM " . DB_PREFIX . "container_files as f LEFT JOIN " . DB_PREFIX . "upload as u on (u.code = f.file) LEFT JOIN " . DB_PREFIX . "user as us on (us.user_id = f.user_id) WHERE f.container_id = '" . (int)$container_id . "'");
		return $query->rows;
	}

	public function addContainerFile($data) {
		$this->db->query("INSERT INTO " . DB_PREFIX . "container_files SET container_id = '" . (int)$data['container_id'] . "', user_id = '" . (int)$data['user_id'] . "', file = '" . $this->db->escape($data['file']) . "' , date_added = NOW()");
		$record_id = $this->db->getLastId();
		return $record_id;
	}

	public function getContainerFile($container_id , $file_id) {
		$query = $this->db->query("SELECT f.file_id , f.container_id , f.user_id , u.code , u.name as image_name , u.filename, f.date_added FROM " . DB_PREFIX . "container_files as f LEFT JOIN " . DB_PREFIX . "upload as u on (u.code = f.file) LEFT JOIN " . DB_PREFIX . "user as us on (us.user_id = f.user_id) WHERE f.container_id = '" . (int)$container_id . "' AND f.file_id = '" . (int)$file_id . "'");
		return $query->row;
	}

	public function deleteContainerFile($data) {
		$query = $this->db->query("DELETE FROM " . DB_PREFIX . "container_files WHERE container_id = '" . (int)$data['container_id'] . "' AND file_id = '" . (int)$data['file_id'] . "'");
		$query = $this->db->query("DELETE FROM " . DB_PREFIX . "upload WHERE code = '" . $this->db->escape($data['code']) . "'");
		return true;
	}

	public function getContainerHistory($container_id) {
		$query = $this->db->query("SELECT h.history_id , h.note , h.container_id , h.file , h.user_id , concat(us.firstname , ' ' , us.lastname) as username , u.name as image_name , u.filename , h.container_status_id , cst.name , h.date_added FROM " . DB_PREFIX . "container_history as h LEFT JOIN " . DB_PREFIX . "container_statuses as cst on (h.container_status_id = cst.id) LEFT JOIN " . DB_PREFIX . "user as us on (us.user_id = h.user_id) LEFT JOIN " . DB_PREFIX . "upload as u on (u.code = h.file) WHERE container_id = '" . (int)$container_id . "'");
		return $query->rows;
	}

	public function addContainer($data) {

		//echo ;

		$this->db->query("INSERT INTO " . DB_PREFIX . "container SET user_id = '" . (int)$data['user_id'] . "', container_no = '" . $this->db->escape($data['container_no']) . "', booking_no = '" . $this->db->escape($data['booking_no']) . "', port_of_loading = '" . $this->db->escape($data['port_of_loading']) . "', port_of_discharge = '" . $this->db->escape($data['port_of_discharge']) . "', sailing_date = '" . $this->db->escape($data['sailing_date']) . "', courier = '" . $this->db->escape($data['courier']) . "', eta = '" . $this->db->escape($data['eta']) . "' , eta_max = '" . $this->db->escape(date('Y-m-d', strtotime($data['eta'] . ' + 0 days'))) . "' ,	eta_sent = '0' , date_modified = NOW(), date_added = NOW()");

		$record_id = $this->db->getLastId();

		if(isset($data['container_status_id'])){
			$this->db->query("UPDATE " . DB_PREFIX . "container SET container_status_id = '" . (int)$data['container_status_id'] . "' WHERE container_id = '" . (int)$record_id . "'");
		}

		return $record_id;
	}

	public function updateContainer($container_id , $data) {
		$this->db->query("UPDATE " . DB_PREFIX . "container SET container_no = '" . $this->db->escape($data['container_no']) . "', booking_no = '" . $this->db->escape($data['booking_no']) . "', port_of_loading = '" . $this->db->escape($data['port_of_loading']) . "', port_of_discharge = '" . $this->db->escape($data['port_of_discharge']) . "', sailing_date = '" . $this->db->escape($data['sailing_date']) . "', courier = '" . $this->db->escape($data['courier']) . "', eta = '" .  $this->db->escape($data['eta']) . "' , eta_max = '" . $this->db->escape(date('Y-m-d', strtotime($data['eta'] . ' + 0 days'))) . "' ,	eta_sent = '0' , date_modified = NOW(), date_added = NOW() WHERE container_id = '" . (int)$container_id  . "'");

		if(isset($data['container_status_id'])){
			$this->db->query("UPDATE " . DB_PREFIX . "container SET container_status_id = '" . (int)$data['container_status_id'] . "' WHERE container_id = '" . (int)$container_id . "'");
		}

		$query = $this->db->query("DELETE FROM " . DB_PREFIX . "container_shipments WHERE container_id = '" . (int)$container_id . "'");


		return;
	}

	public function assignShipment($data) {
		$this->db->query("INSERT INTO " . DB_PREFIX . "container_shipments SET container_id = '" . (int)$data['container_id'] . "', shipment_id = '" . (int)$data['shipment_id'] . "'");
		$record_id = $this->db->getLastId();

		$this->db->query("UPDATE " . DB_PREFIX . "shipment SET container_id = '" . (int)$data['container_id'] . "' WHERE shipment_id = '" . (int)$data['shipment_id'] . "'");

		return $record_id;
	}

	public function getContainerShipments($container_id) {
		$query = $this->db->query("SELECT * FROM " . DB_PREFIX . "container_shipments WHERE container_id = '" . (int)$container_id . "'");
		return $query->rows;
	}

	public function getContainerShipmentOwner($container_id){
		$query = $this->db->query("SELECT cs.shipment_id , cs.container_id , ct.container_no , s.user_id , u.email FROM " . DB_PREFIX . "container_shipments cs LEFT JOIN " . DB_PREFIX . "shipment s on(cs.shipment_id = s.shipment_id) LEFT JOIN " . DB_PREFIX . "container ct on(cs.container_id = ct.container_id) LEFT JOIN " . DB_PREFIX . "user u on(s.user_id = u.user_id) WHERE cs.container_id = '" . (int)$container_id . "'");
		return $query->rows;
	}

}
