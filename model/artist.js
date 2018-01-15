'use strict'

var db = require('../index');
var Schema = db.Schema;

var ArtistSchema = Schema({
	name        :String,
	description :String,
	image       :String
});

module.exports = db.model('Artist',ArtistSchema);