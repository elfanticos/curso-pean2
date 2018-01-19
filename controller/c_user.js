'use strict'

// var bcrypt = require('bcrypt-nodejs');
var bcrypt = require('bcrypt');
var m_user = require('../model/m_user');

function pruebas(req, res) {
    res.status(200).send({
        message: 'Probando una acción del controlador de usuarios del api rest con Node y Postegresql'
    });
}

function saveUser(req,res) {
	var params = req.body;
	var user   = {};
	if(params.password || params.name || params.email) {
		if(params.name != null && params.email != null && params.password != null) {
			//DATOS DE USUARIO
			user.name    = params.name;
			user.email   = params.email;
			user.password = params.password;
			user.role    = 'ROLE_ADMIN';
			user.image   = null;
			//GUARDAR USUARIO
			m_user.saveUser(user, function(data) {
				res.status(200).send({message: data});
			});
			
		}else {
			res.status(200).send({message:'Introduce los datos completos'});
		}
	}else {
		res.status(200).send({message:'Introduce la contraseña'});
	}
}

function loginUser(req,res) {
	var params   = req.body;
	var email    = params.email;
	var password = params.password;
	if(email != null && password != null) {
		m_user.findOne(email,password,function(data) {
			if(data === undefined) {
				res.status(404).send({message: 'Email o password incorrecto.'});
			}else {
				res.status(200).send('Bienvenido...');
			}
		});
	}else {
		res.status(200).send({message : 'Los campos no pueden estar vacios.'});
	}
}

module.exports = {
    pruebas,
	saveUser,
	loginUser
};