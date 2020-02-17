<?php
	ini_set('display_errors', 1);
	ini_set('display_startup_errors', 1);
	error_reporting(E_ALL);
	include("database.php");
	if (isset($_GET["id"])) {
		$id = $_GET["id"];
		$sql = "SELECT * FROM Vuelos WHERE idVuelo=\"$id\"";
		$result = $conn->query($sql);
		if ($result->num_rows > 0) {
			$row = $result->fetch_assoc();
			$disp = $row["plazasDisponibles"];
			if ($disp == 0) {
				echo "NOT_AVAILABLE";
				die();
			}
			$newdisp = $disp - 1;
			$sql2 = "UPDATE Vuelos SET plazasDisponibles = $newdisp WHERE idVuelo=\"$id\"";
			$conn->query($sql2);
			echo "OK";
			die();
		}
		else {
			echo "ID_NO_EXIST";
			die();
		}
	}
	else {
		echo "ID_NOT_PROVIDED";
		die();
	}
?>
