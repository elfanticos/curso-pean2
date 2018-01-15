var express    = require('express');
var bodyParser = require('body-parser');
var app        = express();

//CARGAR RUTAS
var user_routes = require('./routes/r_user');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//CONFIGURAR CABECERAS HTTP

//RUTAS BASE
app.use('/api',user_routes);

module.exports = app;