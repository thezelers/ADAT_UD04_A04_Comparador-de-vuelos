package api;

import java.io.IOException;

import okhttp3.*;
import okhttp3.Request;
import vuelos.ApiVuelos;

public class VuelosPHP implements ApiVuelos {

	@Override
	public String origenDestino(String fecha, String origen, String destino) {
		OkHttpClient client = new OkHttpClient().newBuilder().build();
		Request request = new Request.Builder().url(
				"http://localhost/vuelos/getVuelos.php?fecha=" + fecha + "&origen=" + origen + "&destino=" + destino)
				.method("GET", null).build();
		Response response;
		try {
			response = client.newCall(request).execute();
			System.out.println(response.body().string());
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

		return null;
	}

	@Override
	public String cualquierDestino(String fecha, String origen) {
		OkHttpClient client = new OkHttpClient().newBuilder().build();
		Request request = new Request.Builder()
				.url("http://localhost/vuelos/getVuelos.php?fecha=" + fecha + "&origen=" + origen).method("GET", null)
				.build();
		Response response;
		try {
			response = client.newCall(request).execute();
			System.out.println(response.body().string());
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

		return null;
	}

	@Override
	public String comprarPlaza(String id) {
		OkHttpClient client = new OkHttpClient().newBuilder().build();
		MediaType mediaType = MediaType.parse("text/plain");
		RequestBody body = RequestBody.create(mediaType, "");
		Request request = new Request.Builder().url(
				"http://localhost/vuelos/reservarVuelo.php?id=" + id )
				.method("PUT", body).build();
		Response response;
		try {
			response = client.newCall(request).execute();
			System.out.println(response.body().string());
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

		return null;
	}

	public static void main(String[] args) {
		VuelosPHP v = new VuelosPHP();
		v.origenDestino("2020-02-18", "Madrid", "Barcelona");
		v.cualquierDestino("2020-02-18", "Madrid");
		v.comprarPlaza("1");
	}

}
