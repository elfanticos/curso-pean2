'use strict'

var db = require('../index');
var Schema = db.Schema;

var UserSchema = Schema({
	name     :String,
	email    :String,
	password :String,
	role     :String,
	image    :String
});

module.exports = db.model('User',UserSchema);


// function selectPersonas(id = null,response) {
// 	var sql = `SELECT id,
// 				      nombre_pers,
// 				      ape_mater,
// 				      ape_pater,
// 				      nro_doc,
// 				      TO_CHAR(fecha_nac,'dd/mm/yyyy') as fecha_nac
// 		         FROM personas
// 		        WHERE id = COALESCE($1, id)
// 		     ORDER BY id DESC`;
// 	db.conection.any(sql,[id])
// 		.then(function(data) {
// 			response(data);

// 		}).catch(function(error) {

// 		});
// }

// module.exports = {
// 	selectPersonas 
// }