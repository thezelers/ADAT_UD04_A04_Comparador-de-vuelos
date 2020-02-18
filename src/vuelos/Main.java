package vuelos;

import api.VuelosNode;
import api.VuelosPHP;

public class Main {
	public static void main(String[] args) {
		Menu m = new Menu();
		VuelosNode vNSQL = new VuelosNode("420");
		VuelosPHP vP = new VuelosPHP();
		m.setvN(vNSQL);
		m.setvP(vP);
		while(true) {
		m.menuShow();
		}

	}
}
