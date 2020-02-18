var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var VueloSchema   = new Schema({
	idVuelo: String,
	origen: String,
	destino: String,
	fecha: String,
	hora: String,
	precio: Number,
	plazasTotales: Number,
	plazasDisponibles: Number
});

module.exports = mongoose.model('Vuelo', VueloSchema);
