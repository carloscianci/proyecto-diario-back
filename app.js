const express = require('express')
const app = express()
require('./database/db')

const port = 8000

app.use(express.json())
app.use(express.urlencoded())

const noticia = require('./routes/noticias')
const suscripcion = require('./routes/suscripcion')
const usuario = require('./routes/usuario')

app.use('/usuario', usuario) 
app.use('/noticia', noticia)
app.use('/suscripcion', suscripcion)

app.listen(port,() => {
    console.log("Servidor corriendo en puerto: " + port)
})