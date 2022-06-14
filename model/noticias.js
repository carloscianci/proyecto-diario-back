const mongoose = require('mongoose')
const {Schema, model } = require('mongoose')

const noticia = new Schema({
    idtiponoticia: Number,
    titulo: String,
    resumen: String,
    texto: String,
    urlImagem: String
})

module.exports = model('Noticia', noticia)

