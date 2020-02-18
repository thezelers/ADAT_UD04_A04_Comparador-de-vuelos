package vuelos;

public interface ApiVuelos {
	
	String origenDestino(String fecha, String origen, String destino);
	String cualquierDestino(String fecha, String origen);
	String comprarPlaza(String id);

	

}
