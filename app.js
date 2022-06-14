const express = require('express')
const app = express()
require('./database/db')

const port = 8000

app.use(express.json())
app.use(express.urlencoded())

const noticia = require('./routes/noticias')

app.use('/noticia', noticia)


app.listen(port,() => {
    console.log("Servidor corriendo en puerto: " + port)
})