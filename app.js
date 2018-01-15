var express    = require('express');
var bodyParser = require('body-parser');
var app        = express();

//CARGAR RUTAS


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//CONFIGURAR CABECERAS HTTP

//RUTAS BASE

app.get('/pruebas', function(req, res) {
	res.status(200).send({message : 'Hola mundo'});
});

module.exports = app;