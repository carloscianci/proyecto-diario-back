const express = require('express')
const router = express.Router()

const { getNoticias, crearNoticia, borrarNoticia, modificarNoticia, getUnaNoticia } = require('../controller/noticias')
const { jwtValidator } = require('../middleware/jwtvalidator')
const { destacadaSeccion, destacadaDiario} = require('../middleware/destacadasValidator')

router
    .get('/', getNoticias )
    .get('/getUna', getUnaNoticia)
    .post('/', jwtValidator, destacadaSeccion, destacadaDiario, crearNoticia)
    .delete('/', jwtValidator, borrarNoticia)
    .put('/', jwtValidator, destacadaSeccion, destacadaDiario, modificarNoticia)
       
module.exports =  router 