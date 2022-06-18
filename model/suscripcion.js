const mongoose = require('mongoose')
const {Schema, model } = require('mongoose')

const suscripcion = new Schema({
    nombre: String,
    apellido: String,
    email: String,
    telefono: String
})

module.exports = model('Suscripcion', suscripcion)