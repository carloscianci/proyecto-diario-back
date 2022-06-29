const Usuario = require('../model/usuario')

const adminValidator = async(req, res, next) => {
    const  {idusuario} = req.body 

    try {
        const resultado = await Usuario.findById(idusuario)
        
        if(resultado) {
            if (resultado.principal === 1) {
                res.json({
                    resultado : false,
                    message: 'ERROR!!! No puede eliminar el Administrador Principal'
                })
            } else {
                return next()
            }
        } else {
            res.json({
                resultado : false,
                message: 'ERROR!!! No se pudo validar el usuario'
            })
        }
    } catch (error) {
        console.error(error)
    }
}

module.exports = {adminValidator}