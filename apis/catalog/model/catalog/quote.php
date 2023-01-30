<?php
class ModelCatalogQuote extends Model {
	public function saveQuote($data) {

		$select = $this->db->query("SELECT * FROM " . DB_PREFIX . "quote WHERE date = '" . $this->db->escape($data['date']) . "' AND destination_id = '" . $this->db->escape($data['destination_id']) . "' AND user_id = '" . (int)$data['user_id'] . "' LIMIT 1");
		if($select->row){
			$this->db->query("UPDATE " . DB_PREFIX . "quote SET data = '" . $this->db->escape($data['data']) . "' WHERE date = '" . $this->db->escape($data['date']) . "' AND destination_id = '" . $this->db->escape($data['destination_id']) . "' AND user_id = '" . (int)$data['user_id'] . "'");
			return true;
		} else {
			$this->db->query("INSERT INTO " . DB_PREFIX . "quote SET user_id = '" . (int)$data['user_id'] . "', date = '" . $this->db->escape($data['date']) . "', data = '" . $this->db->escape($data['data']) . "', destination_id = '" . (int)$data['destination_id'] . "', date_added = NOW()");
			$record_id = $this->db->getLastId();

			return $record_id;
		}

	}

	public function dublicateQuote($data) {

		$select = $this->db->query("SELECT * FROM " . DB_PREFIX . "quote WHERE date = '" . $this->db->escape($data['date']) . "' AND destination_id = '" . $this->db->escape($data['destination_id']) . "' AND user_id = '" . (int)$data['user_id'] . "' LIMIT 1");
		if($select->row){

			$select2 = $this->db->query("SELECT * FROM " . DB_PREFIX . "quote WHERE date = '" . $this->db->escape($data['to_date']) . "' AND destination_id = '" . $this->db->escape($data['destination_id']) . "' AND user_id = '" . (int)$data['user_id'] . "' LIMIT 1");

			if($select2->row){
				$this->db->query("UPDATE " . DB_PREFIX . "quote SET data = '" . $this->db->escape($select['data']) . "' WHERE date = '" . $this->db->escape($data['to_date']) . "' AND destination_id = '" . $this->db->escape($data['destination_id']) . "' AND user_id = '" . (int)$data['user_id'] . "'");

			} else {
				$this->db->query("INSERT INTO " . DB_PREFIX . "quote SET user_id = '" . (int)$data['user_id'] . "', date = '" . $this->db->escape($data['to_date']) . "', data = '" . $this->db->escape($select['data']) . "', destination_id = '" . (int)$data['destination_id'] . "', date_added = NOW()");
			}
			return true;
		} else {
			$select2 = $this->db->query("SELECT * FROM " . DB_PREFIX . "quote WHERE date = '" . $this->db->escape($data['to_date']) . "' AND destination_id = '" . $this->db->escape($data['destination_id']) . "' AND user_id = '" . (int)$data['user_id'] . "' LIMIT 1");

			if($select2->row){
				$this->db->query("UPDATE " . DB_PREFIX . "quote SET data = '" . $this->db->escape($data['data']) . "' WHERE date = '" . $this->db->escape($data['to_date']) . "' AND destination_id = '" . $this->db->escape($data['destination_id']) . "' AND user_id = '" . (int)$data['user_id'] . "'");

			} else {
				$this->db->query("INSERT INTO " . DB_PREFIX . "quote SET user_id = '" . (int)$data['user_id'] . "', date = '" . $this->db->escape($data['to_date']) . "', data = '" . $this->db->escape($data['data']) . "', destination_id = '" . (int)$data['destination_id'] . "', date_added = NOW()");
			}
		}

	}

	public function deleteQuote($user_id) {
		$query = $this->db->query("DELETE FROM " . DB_PREFIX . "quote WHERE user_id = '" . (int)$user_id . "'");
	}

	public function getQuotes() {
		$query = $this->db->query("SELECT q.user_id , CONCAT(u.firstname,' ',u.lastname) as name , u.email , q.* FROM " . DB_PREFIX . "quote q LEFT JOIN " . DB_PREFIX . "user u on(u.user_id = q.user_id) GROUP BY q.user_id");
		return $query->rows;
	}

	public function getQuote($data) {
		$query = $this->db->query("SELECT u.firstname , u.lastname , q.* FROM " . DB_PREFIX . "quote q LEFT JOIN " . DB_PREFIX . "user u on(u.user_id = q.user_id) WHERE q.date = '" . $this->db->escape($data['date']) . "' AND q.destination_id = '" . (int)$data['destination_id'] . "' AND q.user_id = '" . $data['user_id'] . "' ORDER BY q.id DESC LIMIT 1");
		return $query->row;
	}


	public function getAvailableQuote($user_id) {
		$query = $this->db->query("SELECT u.firstname , u.lastname , q.* FROM " . DB_PREFIX . "quote q LEFT JOIN " . DB_PREFIX . "user u on(u.user_id = q.user_id) WHERE q.user_id = '" . (int)$user_id . "' ORDER BY q.id DESC LIMIT 1");
		return $query->row;
	}



}
