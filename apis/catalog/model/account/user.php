<?php
class ModelAccountUser extends Model {
	public function addUser($data) {
		$this->db->query("INSERT INTO " . DB_PREFIX . "user SET user_group_id = '" . (int)(isset($data['user_group_id']) ? $data['user_group_id'] : $this->config->get('module_cargo_setting_default_user_group')) . "', firstname = '" . $this->db->escape($data['firstname']) . "', lastname = '" . $this->db->escape($data['lastname']) . "', email = '" . $this->db->escape($data['email']) . "', code = '" . $this->db->escape($data['code']) . "', phone = '" . $this->db->escape($data['phone']) . "', signature = '" . (isset($data['signature']) ? (int)$data['signature'] : 0) . "', salt = '" . $this->db->escape($salt = token(9)) . "', password = '" . $this->db->escape(sha1($salt . sha1($salt . sha1($data['password'])))) . "', status = '1' , approved = '" . (isset($data['approved']) ? (int)$data['approved'] : 0) . "', date_added = NOW()");

		$user_id = $this->db->getLastId();

		if(isset($data['image'])){
			$this->db->query("UPDATE " . DB_PREFIX . "user SET image = '" . $this->db->escape($data['image']) . "' WHERE user_id = '" . (int)$user_id . "'");
		}
		return $user_id;
	}

	public function getUserByCode($code) {
		$query = $this->db->query("SELECT * FROM `" . DB_PREFIX . "user` WHERE code = '" . $this->db->escape($code) . "'");
		return $query->row;
	}

	public function approveUser($code) {
		$this->db->query("UPDATE `" . DB_PREFIX . "user` SET approved = '1' WHERE code = '" . $this->db->escape($code) . "'");
	}

	public function resetPassword($email,$password) {

		$this->db->query("UPDATE `" . DB_PREFIX . "user` SET salt = '" . $this->db->escape($salt = token(9)) . "', password = '" . $this->db->escape(sha1($salt . sha1($salt . sha1($password)))) . "' WHERE email = '" . $this->db->escape($email) . "'");

	}

	public function getManagerSignature(){
		$query = $this->db->query("SELECT * FROM `" . DB_PREFIX . "user` WHERE signature = '1'");
		return $query->rows;
	}

	public function getAdminUsers(){
		$query = $this->db->query("SELECT * FROM `" . DB_PREFIX . "user` WHERE user_group_id = '1'");
		return $query->rows;
	}





	public function updateUser($user_id, $data) {
		$this->db->query("UPDATE `" . DB_PREFIX . "user` SET user_group_id = '" . (int)$data['user_group_id'] . "', firstname = '" . $this->db->escape($data['firstname']) . "', lastname = '" . $this->db->escape($data['lastname']) . "', email = '" . $this->db->escape($data['email']) . "', phone = '" . $this->db->escape($data['phone']) . "', signature = '" . (isset($data['signature']) ? (int)$data['signature'] : 0) . "' , code = '', approved = '" . (isset($data['approved']) ? (int)$data['approved'] : 0) . "' WHERE user_id = '" . (int)$user_id . "'");

		if(isset($data['image'])){
			$this->db->query("UPDATE " . DB_PREFIX . "user SET image = '" . $this->db->escape($data['image']) . "' WHERE user_id = '" . (int)$user_id . "'");
		}

		if ($data['password']) {
			$this->db->query("UPDATE `" . DB_PREFIX . "user` SET salt = '" . $this->db->escape($salt = token(9)) . "', password = '" . $this->db->escape(sha1($salt . sha1($salt . sha1($data['password'])))) . "' WHERE user_id = '" . (int)$user_id . "'");
		}
	}

	public function updateUserProfile($user_id, $data) {
		$this->db->query("UPDATE `" . DB_PREFIX . "user` SET user_group_id = '" . (int)$data['user_group_id'] . "', firstname = '" . $this->db->escape($data['firstname']) . "', lastname = '" . $this->db->escape($data['lastname']) . "', email = '" . $this->db->escape($data['email']) . "', phone = '" . $this->db->escape($data['phone']) . "' WHERE user_id = '" . (int)$user_id . "'");

		if(isset($data['image'])){
			$this->db->query("UPDATE " . DB_PREFIX . "user SET image = '" . $this->db->escape($data['image']) . "' WHERE user_id = '" . (int)$user_id . "'");
		}

		if ($data['password']) {
			$this->db->query("UPDATE `" . DB_PREFIX . "user` SET salt = '" . $this->db->escape($salt = token(9)) . "', password = '" . $this->db->escape(sha1($salt . sha1($salt . sha1($data['password'])))) . "' WHERE user_id = '" . (int)$user_id . "'");
		}
	}



	public function deleteUser($user_id) {
		$this->db->query("DELETE FROM `" . DB_PREFIX . "user` WHERE user_id = '" . (int)$user_id . "'");
	}

	public function getUserByEmail($email) {
		$query = $this->db->query("SELECT u.user_id , u.firstname , u.signature , u.approved , u.lastname , u.phone , u.image , u.user_group_id , ug.permission , u.email FROM " . DB_PREFIX . "user u LEFT JOIN " . DB_PREFIX . "user_group ug on(u.user_group_id = ug.user_group_id) WHERE email = '" . $this->db->escape($email) . "'");

		return $query->row;
	}

	public function getUser($user_id) {
		$query = $this->db->query("SELECT * FROM " . DB_PREFIX . "user WHERE user_id = '" . (int)$user_id . "'");
		return $query->row;
	}

	public function getUserMini($user_id) {
		$query = $this->db->query("SELECT user_id , firstname , lastname , email , phone FROM " . DB_PREFIX . "user WHERE user_id = '" . (int)$user_id . "'");
		return $query->row;
	}

	public function getUsers($data = array()) {
		$sql = "SELECT * FROM " . DB_PREFIX . "user where email != 'admin@admin.com'";
		$query = $this->db->query($sql);

		return $query->rows;
	}

	public function addFile($data) {
		$this->db->query("INSERT INTO " . DB_PREFIX . "user_files SET user_id = '" . (int)$data['user_id'] . "', file = '" . $this->db->escape($data['file']) . "', name = '" . $this->db->escape($data['name']) . "' , date_added = NOW()");
		$record_id = $this->db->getLastId();
		return $record_id;
	}

	public function getFiles($user_id) {
		$query = $this->db->query("SELECT * FROM " . DB_PREFIX . "user_files WHERE user_id = '" . (int)$user_id . "'");
		return $query->rows;
	}

	public function getFile($data) {
		$query = $this->db->query("SELECT * FROM " . DB_PREFIX . "user_files WHERE user_id = '" . (int)$data['user_id'] . "' AND file_id = '" . (int)$data['file_id'] . "'");
		return $query->row;
	}

	public function deleteFile($data) {
		$query = $this->db->query("DELETE FROM " . DB_PREFIX . "user_files WHERE user_id = '" . (int)$data['user_id'] . "' AND file_id = '" . (int)$data['file_id'] . "'");
		return true;
	}

	public function login($data) {
		$user_query = $this->db->query("SELECT u.user_id , u.firstname , u.signature , u.approved , u.lastname , u.phone , u.image , u.user_group_id , ug.permission , u.email FROM " . DB_PREFIX . "user u LEFT JOIN " . DB_PREFIX . "user_group ug on(u.user_group_id = ug.user_group_id) WHERE email = '" . $this->db->escape($data['email']) . "' AND (password = SHA1(CONCAT(salt, SHA1(CONCAT(salt, SHA1('" . $this->db->escape($data['password']) . "'))))) OR password = '" . $this->db->escape(md5($data['password'])) . "') AND status = '1'");
		if ($user_query->num_rows) {

			return $user_query->row;
		}
		return false;
	}

	public function addGroup($data) {
		$this->db->query("INSERT INTO " . DB_PREFIX . "user_group SET name = '" . $this->db->escape($data['name']) . "', permission = '" . (isset($data['permission']) ? $this->db->escape($data['permission']) : '') . "'");
		return $this->db->getLastId();
	}

	public function updateGroup($user_group_id, $data) {
		$this->db->query("UPDATE " . DB_PREFIX . "user_group SET name = '" . $this->db->escape($data['name']) . "', permission = '" . (isset($data['permission']) ? $this->db->escape($data['permission']) : '') . "' WHERE user_group_id = '" . (int)$user_group_id . "'");
	}

	public function deleteGroup($user_group_id) {
		$this->db->query("DELETE FROM " . DB_PREFIX . "user_group WHERE user_group_id = '" . (int)$user_group_id . "'");
	}

	public function getGroup($user_group_id) {
		$query = $this->db->query("SELECT DISTINCT * FROM " . DB_PREFIX . "user_group WHERE user_group_id = '" . (int)$user_group_id . "'");
		return $query->row;
	}

	public function getGroups($data = array()) {
		$sql = "SELECT * FROM " . DB_PREFIX . "user_group";
		$query = $this->db->query($sql);

		return $query->rows;
	}

}
