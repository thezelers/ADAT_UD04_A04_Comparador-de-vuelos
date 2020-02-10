const Express = require('express');
const BodyParser = require('body-parser');
var app = Express();

app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: false }));


var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "adat1"
});

app.get("/vuelos", (req, res)=>{
    con.query("SELECT * FROM vuelos", function (err, result, fields) {
      if (err) throw err;
      res.json(result);
    });


});

app.get("/vuelos/:fecha/:origen/:destino", (req, res)=>{
    con.query(`SELECT * FROM vuelos WHERE Fecha like '${req.params.fecha}' and Origen like '${req.params.origen}'and Destino like '${req.params.destino}'`, function (err, result, fields) {
      if (err) throw err;
      res.json(result);
    });


});

app.put("/vuelos/:id", (req, res)=>{

    con.query(`UPDATE vuelos  SET Disponibles =((SELECT Disponibles from vuelos WHERE ID like '${req.params.id}')-1)WHERE ID like '${req.params.id}'`, function (err, result, fields) {
      if (err) throw err;
      res.json(result);
    });


});


app.get("/vuelos/:fecha/:origen", (req, res)=>{
    con.query(`SELECT * FROM vuelos WHERE Fecha like '${req.params.fecha}' and Origen like '${req.params.origen}'`, function (err, result, fields) {
      if (err) throw err;
      res.json(result);
    });


});

app.listen(420, () => {
  console.log("Server running on port 9000");
});
