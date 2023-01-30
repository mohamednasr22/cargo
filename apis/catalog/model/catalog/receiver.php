<?php
class ModelCatalogReceiver extends Model {
	private $columns_guide = array();
	public function getReceivers($data) {
		$sql = "SELECT * FROM " . DB_PREFIX . "receiver WHERE name != ''";
		$pref = false;
		if(!$data['is_admin']){
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
			'receiver_id',
			'name',
			'phone',
			'address',
			'email'
		);

		if (isset($data['sort']) && in_array($data['sort'], $sort_data)) {
			$sql .= " ORDER BY " . $data['sort'];
		} else {
			$sql .= " ORDER BY receiver_id";
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

	public function getTotalReceivers($data) {
		$sql = "SELECT COUNT(DISTINCT receiver_id) AS total FROM " . DB_PREFIX . "receiver WHERE name != ''";
		$pref = false;
		if(!$data['is_admin']){
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

	private function whereOrAnd($str){
		if(strpos(strtolower($str) , 'where')){
			return 'AND';
		}
		return 'WHERE';
	}

	public function filterKey($key){
		if(isset($this->columns_guide[$key])){
			return $this->columns_guide[$key];
		}
		return $key;
	}

	public function getReceiver($receiver_id) {
		$query = $this->db->query("SELECT * FROM " . DB_PREFIX . "receiver WHERE receiver_id = '" . (int)$receiver_id . "'");
		return $query->row;
	}

	public function add($data) {
		return $this->addReceiver($data);
	}

	public function delete($receiver_id) {
		$query = $this->db->query("DELETE FROM " . DB_PREFIX . "receiver WHERE receiver_id = '" . (int)$receiver_id . "'");
		return true;
	}

	public function addReceiver($data) {
		$this->db->query("INSERT INTO " . DB_PREFIX . "receiver SET user_id = '" . (int)$data['user_id'] . "', phone = '" . $this->db->escape($data['phone']) . "', email = '" . $this->db->escape($data['email']) . "', address = '" . $this->db->escape($data['address']) . "', name = '" . $this->db->escape($data['name']) . "', status = '" . (int)$data['status'] . "', date_added = NOW()");

		$record_id = $this->db->getLastId();

		return $record_id;
	}

	public function updateReceiver($receiver_id , $data) {
		$this->db->query("UPDATE " . DB_PREFIX . "receiver SET phone = '" . $this->db->escape($data['phone']) . "', email = '" . $this->db->escape($data['email']) . "', address = '" . $this->db->escape($data['address']) . "', status = '" . (int)$data['status'] . "', name = '" . $this->db->escape($data['name']) . "' WHERE receiver_id = '" . (int)$receiver_id . "'");
		$this->cache->delete('receiver');
	}

	public function update($receiver_id , $data) {
		return $this->updateReceiver($receiver_id , $data);
	}

}
