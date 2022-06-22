require('dotenv').config()
const jwt = require('jsonwebtoken')

const jwtValidator = async(req, res, next) => {
    const {access_token} = req.body
    
    const secretKey = process.env.SECRET_KEY

    try {
        const verificacion = jwt.verify(access_token, secretKey)

        if(verificacion) {
            return next()
        }

        return res.json({
            resultado : true,
            message : 'Token invalido'
        })
    } catch (error) {
        return res.json({
            resultado : false,
            message : 'ERROR!!! No se pudo validar el Token'
        })        
    }
}

module.exports = {jwtValidator}