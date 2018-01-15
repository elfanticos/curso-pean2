const pgp = require("pg-promise")();
const db  = pgp("postgres://postgres:postgres@localhost:5433/curso_mean2");
var   app = require('./app');
var   fs  = require('fs'); 
var port = process.env.PORT || 3978;
db.connect();

app.listen(port, function() {
	console.log('Levanto correctamente el puerto '+port);
});

exports.conection = db;