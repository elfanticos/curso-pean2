'use strict'

var express = require('express');
var UserController = require('../controller/c_user');

var api = express.Router();

api.get('/probando-controlador',UserController.pruebas);

module.exports = api;