const express = require('express')
const router = express.Router()

const { getUsuario, getUsuarios, crearUsuario, borrarUsuario, modificarUsuario, login } = require('../controller/usuario')
const { jwtValidator } = require('../middleware/jwtvalidator')
const { adminValidator } = require('../middleware/adminValidator')

router
    .get('/', jwtValidator, getUsuario )
    .post('/', jwtValidator, crearUsuario)
    .post('/listaUsuarios', jwtValidator, getUsuarios)
    .post('/login', login)
    .delete('/', jwtValidator, adminValidator, borrarUsuario)
    .put('/', jwtValidator, modificarUsuario)
       
module.exports =  router 