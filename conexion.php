<?php
class Conexion{
	private static $instancia;
	private $db_host;
	private $db_user;
	private $db_pass;
	private $db_name;

	function __construct(){
		$this->db_host=DB_HOST;
		$this->db_user=DB_USER;
		$this->db_pass=DB_PASS;
		$this->db_name=DB_NAME;
	}

	public static function getInstancia(){
		$clase= __CLASS__;
		if(!isset(self::$instancia)){
			self::$instancia=new $clase;
		}
		return self:: $instancia;
	}

	public function conectar(){
		$enlace=mysqli_connect(DB_HOST,DB_USER,DB_PASS,DB_NAME);
		return $enlace;

	}

	
}

