'use strict'

var db = require('../index');
function saveUser(data,response) {
	var sql = `INSERT 
	             INTO users
	                  (name,email,password,role,image)
			   VALUES ($1,$2,$3,$4,$5)`;
    sql = db.pgpromise.as.format(sql,[data.name,data.email,data.password,data.role, data.image]);
	db.conection.query(sql)
		.then(function(data) {
			response('Inserto exitosamente');
		}).catch(function(err) {
			console.log(err);
		});
}

function findOne(email,password,response) {
	var sql = `SELECT email,
					  password 
				 FROM users 
				WHERE email = $1
				  AND password = $2 
				LIMIT 1`;
	sql = db.pgpromise.as.format(sql,[email,password]);
	db.conection.any(sql)
		.then(data => {
			response(data[0]);
		}).catch(err => {
			console.log(err);
		});
}

module.exports = {
	saveUser,
	findOne
}