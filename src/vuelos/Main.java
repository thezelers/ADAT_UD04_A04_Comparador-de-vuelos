package vuelos;

import api.VuelosNode;
import api.VuelosPHP;

public class Main {
	public static void main(String[] args) {
		Menu m = new Menu();
		VuelosNode vN = new VuelosNode();
		VuelosPHP vP = new VuelosPHP();
		m.setvN(vN);
		m.setvP(vP);
		while(true) {
		m.menuShow();
		}

	}
}
