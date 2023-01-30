<?php
class ModelAccountMessages extends Model {
	public function getMessages() {
		$query = $this->db->query("SELECT * FROM " . DB_PREFIX . "messages WHERE status = '1'");		
		return $query->rows;
	}
}