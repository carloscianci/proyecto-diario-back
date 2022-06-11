const express = require('express')
const app = express()

const port = 8000

app.use(express.json())
app.use(express.urlencoded())

app.get('/', (req, res ) => {
    res.json({
        message: "Estas en el home."
    })
})

app.listen(port,() => {
    console.log("Servidor corriendo en puerto: " + port)
})