'use strict'

var db = require('../index');

function saveUser(data,response) {
	var sql = `INSERT 
	             INTO users
	                  (name,email,password,role,image)
	           VALUES ($1,$2,$3,$4,$5)`;
	db.conection.any(sql)
		.then(function(data) {
			response(data);

		}).catch(function(error) {

		});
}

module.exports = {
	saveUser 
}