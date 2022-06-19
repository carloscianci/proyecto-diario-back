const express = require('express')
const router = express.Router()

const { getUsuario, crearUsuario, borrarUsuario, modificarUsuario, login } = require('../controller/usuario')

router
    .get('/', getUsuario )
    .post('/', crearUsuario)
    .post('/login', login)
    .delete('/', borrarUsuario)
    .put('/', modificarUsuario)
       
module.exports =  router 