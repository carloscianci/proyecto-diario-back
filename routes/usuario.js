const express = require('express')
const router = express.Router()

const { getUsuario, crearUsuario, borrarUsuario, modificarUsuario, login } = require('../controller/usuario')
const { jwtValidator } = require('../middleware/jwtvalidator')

router
    .get('/', jwtValidator, getUsuario )
    .post('/', jwtValidator, crearUsuario)
    .post('/login', login)
    .delete('/', jwtValidator, borrarUsuario)
    .put('/', jwtValidator, modificarUsuario)
       
module.exports =  router 