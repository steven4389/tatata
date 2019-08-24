'use strict'

var mongoose = require('mongoose');
var Schema= mongoose.Schema;

var floresPYESchema= Schema({
    fecha:String,
    plagayenfermedad:String,
    variedad:String,
    sitio:Number,
    cama:Number,
    lote:Number,
    empresa:String,
    sede:String,
    individuos:Number
});

module.exports = mongoose.model('floresPYE',floresPYESchema);