<?php
	ini_set('display_errors', 1);
	ini_set('display_startup_errors', 1);
	error_reporting(E_ALL);
	class Vuelo {
		public $id;
		public $origen;
		public $destino;
		public $fecha;
		public $hora;
		public $precio;
		public $plazastotales;
		public $plazasdisponibles;
	}
	header('Content-Type: application/json');
	include("database.php");
	if (isset($_GET["origen"]) && isset($_GET["fecha"])) {
		$origen = $_GET["origen"];
		$fecha = $_GET["fecha"];
		if (isset($_GET["destino"])) {
			$destino = $_GET["destino"];
			$sql = "SELECT * FROM Vuelos2 WHERE origen=\"$origen\" AND fecha=\"$fecha\" AND destino=\"$destino\"";
		}
		else {
			$sql = "SELECT * FROM Vuelos2 WHERE origen=\"$origen\" AND fecha=\"$fecha\"";
		}
		$result = $conn->query($sql);
		$vuelos = array();
		while ($row = $result->fetch_assoc()) {
			$vuelo_obj = new Vuelo();
			$vuelo_obj->id = $row["idVuelo"];
			$vuelo_obj->origen = $row["origen"];
			$vuelo_obj->destino = $row["destino"];
			$vuelo_obj->fecha = $row["fecha"];
			$vuelo_obj->hora = $row["hora"];
			$vuelo_obj->precio = $row["precio"];
			$vuelo_obj->plazastotales = $row["plazasTotales"];
			$vuelo_obj->plazasdisponibles = $row["plazasDisponibles"];
			$vuelos[] = $vuelo_obj;
		}
		echo json_encode($vuelos);
	}
?>
