const mongoose = require('mongoose')
const {Schema, model } = require('mongoose')

const usuario = new Schema({
    nombre: String,
    email: String,
    clave: String
})

module.exports = model('Usuario', usuario)