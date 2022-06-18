const express = require('express')
const router = express.Router()

const { getSuscripcion, crearSuscripcion, borrarSuscripcion, modificarSuscripcion} = require('../controller/suscripcion')

router
    .get('/', getSuscripcion )
    .post('/', crearSuscripcion)
    .delete('/', borrarSuscripcion)
    .put('/', modificarSuscripcion)
       
module.exports =  router 