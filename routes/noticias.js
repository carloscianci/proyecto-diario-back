const express = require('express')
const router = express.Router()

const { getNoticias, crearNoticia, borrarNoticia, modificarNoticia, getUnaNoticia } = require('../controller/noticias')

router
    .get('/', getNoticias )
    .get('/getUna', getUnaNoticia)
    .post('/', crearNoticia)
    .delete('/', borrarNoticia)
    .put('/', modificarNoticia)
       
module.exports =  router 