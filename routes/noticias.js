const express = require('express')
const router = express.Router()

const { getNoticias, crearNoticia, borrarNoticia, modificarNoticia } = require('../controller/noticias')

router
    .get('/', getNoticias )
    .post('/', crearNoticia)
    .delete('/', borrarNoticia)
    .put('/', modificarNoticia)
       
module.exports =  router 