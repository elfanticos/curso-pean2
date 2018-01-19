'use strict'

// var bcrypt = require('bcrypt-nodejs');
var bcrypt = require('bcrypt');
var r_user = require('../model/m_user');

function pruebas(req, res) {
    res.status(200).send({
        message: 'Probando una acción del controlador de usuarios del api rest con Node y Postegresql'
    });
}

function saveUser(req,res) {
	var params = req.body;
	var user   = {};
	console.log(params);
	res.status(200).send({
        message: params
    });
	//DATOS DE USUARIO
	user.name    = params.name;
	user.email   = params.email;
	user.passwod = params.passwod;
	user.role    = 'ROLE_USER';
	user.image   = 'null';
	if(params.password) {
		//Encriptar contraseña
		bcrypt.hash(params.password,null,null, function(err,hash){
			user.password = hash;
			if(user.name != null && user.email != null) {
				//Guardar el usuario
				r_user.saveUser
			}else {
				res.status(200).send({message:'Introduce los datos completos'});
			}
		});
	}else {
		res.status(200).send({message:'Introduce la contraseña'});
	}
}

module.exports = {
    pruebas,
    saveUser
};