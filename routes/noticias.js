const express = require('express')
const router = express.Router()

const { getNoticias, crearNoticia, borrarNoticia, modificarNoticia, getUnaNoticia } = require('../controller/noticias')
const { jwtValidator } = require('../middleware/jwtvalidator')

router
    .get('/', getNoticias )
    .get('/getUna', getUnaNoticia)
    .post('/', jwtValidator, crearNoticia)
    .delete('/', jwtValidator, borrarNoticia)
    .put('/', jwtValidator, modificarNoticia)
       
module.exports =  router 