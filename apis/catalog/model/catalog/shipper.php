<?php
class ModelCatalogShipper extends Model {
	private $columns_guide = array();
	public function getShippers($data = array()) {

		$sql = "SELECT * FROM " . DB_PREFIX . "shipper WHERE name != ''";
		$pref = false;
		if(isset($data['is_admin']) && !$data['is_admin']){
			$pref = true;
			$sql .= " AND user_id = '" . (int)$data['user_id'] . "'";
			if(isset($data['status'])){
				$sql .= " AND status = '" . (int)$data['status'] . "'";
			}
		} else {
			if(isset($data['status'])){
				$pref = true;
				$sql .= " AND status = '" . (int)$data['status'] . "'";
			}
		}

		if(isset($data['filter'])){
			if($pref){
				foreach ($data['filter'] as $key => $value) {
					$f_key = $this->filterKey($key);
					$sql .= " " . $this->whereOrAnd($sql) . " " . $f_key . " LIKE '%" . $this->db->escape($value) . "%'";
				}
			} else {
				$fi = 0;
				foreach ($data['filter'] as $key => $value) {
					$f_key = $this->filterKey($key);
					if($fi == 0){
						$sql .= " " . $this->whereOrAnd($sql) . " " . $f_key . " LIKE '%" . $this->db->escape($value) . "%'";
					} else {
						$sql .= " " . $this->whereOrAnd($sql) . " " . $f_key . " LIKE '%" . $this->db->escape($value) . "%'";
					}
					$fi++;
				}
			}
		}

		$sort_data = array(
			'shipper_id',
			'name',
			'phone',
			'address',
			'email'
		);

		if (isset($data['sort']) && in_array($data['sort'], $sort_data)) {
			$sql .= " ORDER BY " . $data['sort'];
		} else {
			$sql .= " ORDER BY shipper_id";
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
		} else {
			$data['start'] = 0;
			$data['limit'] = 20;
		}
		$sql .= " LIMIT " . (int)$data['start'] . "," . (int)$data['limit'];

		$query = $this->db->query($sql);
		return $query->rows;
	}

	private function whereOrAnd($str){
		if(strpos(strtolower($str) , 'where')){
			return 'AND';
		}
		return 'WHERE';
	}

	public function getTotalShippers($data = array()) {

		$sql = "SELECT COUNT(DISTINCT shipper_id) AS total FROM " . DB_PREFIX . "shipper WHERE name != ''";
		$pref = false;
		if(isset($data['is_admin']) && !$data['is_admin']){
			$pref = true;
			$sql .= " AND user_id = '" . (int)$data['user_id'] . "'";
			if(isset($data['status'])){
				$sql .= " AND status = '" . (int)$data['status'] . "'";
			}
		} else {
			if(isset($data['status'])){
				$pref = true;
				$sql .= " AND status = '" . (int)$data['status'] . "'";
			}
		}

		if(isset($data['filter'])){
			if($pref){
				foreach ($data['filter'] as $key => $value) {
					$f_key = $this->filterKey($key);
					$sql .= " " . $this->whereOrAnd($sql) . " " . $f_key . " LIKE '%" . $this->db->escape($value) . "%'";
				}
			} else {
				$fi = 0;
				foreach ($data['filter'] as $key => $value) {
					$f_key = $this->filterKey($key);
					if($fi == 0){
						$sql .= " " . $this->whereOrAnd($sql) . " " . $f_key . " LIKE '%" . $this->db->escape($value) . "%'";
					} else {
						$sql .= " " . $this->whereOrAnd($sql) . " " . $f_key . " LIKE '%" . $this->db->escape($value) . "%'";
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

	public function getShipper($shipper_id) {
		$query = $this->db->query("SELECT * FROM " . DB_PREFIX . "shipper WHERE shipper_id = '" . (int)$shipper_id . "'");
		return $query->row;
	}

	public function delete($shipper_id) {
		$query = $this->db->query("DELETE FROM " . DB_PREFIX . "shipper WHERE shipper_id = '" . (int)$shipper_id . "'");
		return true;
	}

	public function add($data) {
		return $this->addShipper($data);
	}

	public function addShipper($data) {
		$this->db->query("INSERT INTO " . DB_PREFIX . "shipper SET user_id = '" . (int)$data['user_id'] . "', phone = '" . $this->db->escape($data['phone']) . "', email = '" . $this->db->escape($data['email']) . "', address = '" . $this->db->escape($data['address']) . "', name = '" . $this->db->escape($data['name']) . "', ein = '" . $this->db->escape($data['ein']) . "', shipper_type_id = '" . (int)$data['shipper_type_id'] . "', status = '" . (int)$data['status'] . "', date_added = NOW()");

		$record_id = $this->db->getLastId();

		return $record_id;
	}

	public function updateShipper($shipper_id , $data) {
		$this->db->query("UPDATE " . DB_PREFIX . "shipper SET phone = '" . $this->db->escape($data['phone']) . "', email = '" . $this->db->escape($data['email']) . "', address = '" . $this->db->escape($data['address']) . "', name = '" . $this->db->escape($data['name']) . "', ein = '" . $this->db->escape($data['ein']) . "', status = '" . (int)$data['status'] . "', shipper_type_id = '" . (int)$data['shipper_type_id'] . "' WHERE shipper_id = '" . (int)$shipper_id . "'");
		$this->cache->delete('shipper');
	}

	public function update($shipper_id , $data) {
		return $this->updateShipper($shipper_id , $data);
	}

}
