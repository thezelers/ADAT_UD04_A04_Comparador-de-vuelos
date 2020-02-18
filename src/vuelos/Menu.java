package vuelos;

import java.util.Scanner;

import api.VuelosNode;
import api.VuelosPHP;

public class Menu {
	VuelosNode vN ;
	public VuelosNode getvN() {
		return vN;
	}
	public void setvN(VuelosNode vN) {
		this.vN = vN;
	}
	public VuelosPHP getvP() {
		return vP;
	}
	public void setvP(VuelosPHP vP) {
		this.vP = vP;
	}
	VuelosPHP vP ;
	public void menuShow() {
		String option = "", fecha = "", origen = "", destino = "", id = "";

		System.out.println("Selecciona API");
		System.out.println("1- Node + MySQL");
		System.out.println("2- PHP + MySQL");
		System.out.println("3- Node + Mongo");
		Scanner sc = new Scanner(System.in);
		switch (sc.next()) {
		case "1":
			Scanner sc1 = new Scanner(System.in);
			System.out.println("1- Buscar con fecha origen y destino");
			System.out.println("2- Buscar con fecha y origen");
			System.out.println("3- Reservar plaza");
			option = sc1.nextLine();
			switch (option) {
			case "1":
				System.out.println("Fecha:");
				fecha = sc1.nextLine();
				System.out.println("origen:");
				origen = sc1.nextLine();
				System.out.println("destino:");
				destino = sc1.nextLine();
				vN.origenDestino(fecha, origen, destino);

				break;
			case "2":
				System.out.println("Fecha:");
				fecha = sc1.nextLine();
				System.out.println("origen:");
				origen = sc1.nextLine();
				vN.cualquierDestino(fecha, origen);

				break;
			case "3":
				System.out.println("ID:");
				id = sc1.nextLine();
				vN.comprarPlaza(id);

				break;
			default:
				System.out.println("Opción Inválida");
				break;
			}

			break;
		case "2":
			Scanner sc11 = new Scanner(System.in);
			System.out.println("1- Buscar con fecha origen y destino");
			System.out.println("2- Buscar con fecha y origen");
			System.out.println("3- Reservar plaza");
			option = sc11.nextLine();
			switch (option) {
			case "1":
				System.out.println("Fecha:");
				fecha = sc11.nextLine();
				System.out.println("origen:");
				origen = sc11.nextLine();
				System.out.println("destino:");
				destino = sc11.nextLine();
				vP.origenDestino(fecha, origen, destino);

				break;
			case "2":
				System.out.println("Fecha:");
				fecha = sc11.nextLine();
				System.out.println("origen:");
				origen = sc11.nextLine();
				vP.cualquierDestino(fecha, origen);

				break;
			case "3":
				System.out.println("ID:");
				id = sc11.nextLine();
				vP.comprarPlaza(id);

				break;
			default:
				System.out.println("Opción Inválida");
				break;
			}

			break;
		case "3":
			Scanner sc111 = new Scanner(System.in);
			System.out.println("1- Buscar con fecha origen y destino");
			System.out.println("2- Buscar con fecha y origen");
			System.out.println("3- Reservar plaza");
			option = sc111.nextLine();
			switch (option) {
			case "1":
				System.out.println("Fecha:");
				fecha = sc111.nextLine();
				System.out.println("origen:");
				origen = sc111.nextLine();
				System.out.println("destino:");
				destino = sc111.nextLine();
				vN.origenDestino(fecha, origen, destino);

				break;
			case "2":
				System.out.println("Fecha:");
				fecha = sc111.nextLine();
				System.out.println("origen:");
				origen = sc111.nextLine();
				vN.cualquierDestino(fecha, origen);

				break;
			case "3":
				System.out.println("ID:");
				id = sc111.nextLine();
				vN.comprarPlaza(id);

				break;
			default:
				System.out.println("Opción Inválida");
				break;
			}

			break;

		default:
			System.out.println("Opción Inválida");
			break;
		}

	}

}
