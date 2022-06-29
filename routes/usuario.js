const express = require('express')
const router = express.Router()

const { getUsuario, getUsuarios, crearUsuario, borrarUsuario, modificarUsuario, login } = require('../controller/usuario')
const { jwtValidator } = require('../middleware/jwtvalidator')

router
    .get('/', jwtValidator, getUsuario )
    .post('/', jwtValidator, crearUsuario)
    .post('/listaUsuarios', jwtValidator, getUsuarios)
    .post('/login', login)
    .delete('/', jwtValidator, borrarUsuario)
    .put('/', jwtValidator, modificarUsuario)
       
module.exports =  router 