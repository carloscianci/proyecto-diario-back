require('dotenv').config()
const jwt = require('jsonwebtoken')

const jwtValidator = async(req, res, next) => {
    const {access_token} = req.body
    
    const secretKey = process.env.SECRET_KEY

    try {
        console.log(access_token)
        console.log(secretKey)
        const verificacion = jwt.verify(access_token, secretKey)
        console.log(verificacion)
        if(verificacion) {
            return next()
        }

        return res.json({
            message : 'Token invalido'
        })
    } catch (error) {
        return res.json({
            message : 'ERROR!!! No se pudo validar el Token'
        })        
    }
}

module.exports = {jwtValidator}