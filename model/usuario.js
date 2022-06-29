const mongoose = require('mongoose')
const {Schema, model } = require('mongoose')

const usuario = new Schema({
    nombre: String,
    email: String,
    clave: String,
    principal: Number
})

module.exports = model('Usuario', usuario)