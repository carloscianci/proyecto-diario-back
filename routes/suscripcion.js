const express = require('express')
const router = express.Router()

const { getSuscripcion, crearSuscripcion, borrarSuscripcion, modificarSuscripcion, login} = require('../controller/suscripcion')
const { jwtValidator } = require('../middleware/jwtvalidator')

router
    .get('/', jwtValidator, getSuscripcion )
    .post('/', crearSuscripcion)
    .delete('/', jwtValidator, borrarSuscripcion)
    .put('/', jwtValidator, modificarSuscripcion)
       
module.exports =  router 