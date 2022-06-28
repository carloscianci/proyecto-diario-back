const mongoose = require('mongoose')
const {Schema, model } = require('mongoose')

const noticia = new Schema({
    idtiponoticia: Number,
    titulo: String,
    resumen: String,
    texto: String,
    urlImagen: String,
    destacada_seccion: Number,
    destacada_diario: Number
})

module.exports = model('Noticia', noticia)

