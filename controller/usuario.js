const Usuario = require('../model/usuario')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
require('dotenv').config()

const getUsuario = async(req, res) => {
    const { idusuario } = req.body 
    try {
        const unUsuario = await Usuario.findById(idusuario) 
        const mensaje = (unUsuario) ? "Usuario obtenido con éxito." : "El usuario solicitado no existe"
        
        res.json({
            resultado : true,
            message: mensaje,
            unUsuario
        })
    } catch (error) {
        console.error(error)
    }
}

const crearUsuario = async(req, res) => {
    const {nombre, email, clave} = req.body 
    const saltRound = 10

    const claveEncriptada = bcrypt.hashSync(clave, saltRound)

    try
    {    
        const existe = await Usuario.findOne({email: email}).exec()

        if (!existe) {
            const nuevoUsuario = new Usuario({
                nombre,
                email,
                clave : claveEncriptada
            })
    
            await nuevoUsuario.save()
    
            res.json({
                resultado : true,
                message: 'Usuario creado exitosamente.'
            })
        } else {
            res.json({
                resultado : false,
                message: `ATENCION!!! Ya existe un usuario con el mail ${email}.`
            })
        }
    } catch (error) {
        console.error(error)
    }
}

const borrarUsuario = async(req, res) => {
    const  {idusuario} = req.body 

    try {
        const resultado = await Usuario.findByIdAndDelete(idusuario)
        
        if(resultado) {
            res.json({
                resultado : true,
                message: `El usuario ${idusuario} fue eliminado.`
            })
        } else {
            res.json({
                resultado : false,
                message: `ERROR!!! No se encontró el usuario ${idusuario}.`
            })
        }
    } catch (error) {
        console.error(error)
    }
}

const modificarUsuario = async(req, res) => {
    const  {idusuario, nombre, email, clave} = req.body 
    const saltRound = 10

    const claveEncriptada = bcrypt.hashSync(clave, saltRound)

    try {
        const resultado = await Usuario.findByIdAndUpdate(idusuario, {
            nombre,
            email,
            clave : claveEncriptada
        })
        
        if(resultado) {
            res.json({
                resultado : true,
                message: `El usuario ${idusuario} se actualicó con éxito.`
            })
        } else {
            res.json({
                resultado : false,
                message: `ERROR!!! No se encontró el usuario ${idusuario}.`
            })
        }
    } catch (error) {
        console.error(error)
    }
}

const login = async(req, res) => {
    const {email, clave} = req.body 

    try
    {    
        const user = await Usuario.findOne({email: email}).exec()
        if (user) {
            const autoriza = bcrypt.compareSync(clave, user.clave)
            if (autoriza)
            {
                const secretKey = process.env.SECRET_KEY
                const token = jwt.sign({user},secretKey,{expiresIn : '1h'})
                res.json({
                    resultado: true,
                    message: 'Usuario logueado exitosamente.',
                    token
                })
            } else {
                res.json({
                    resultado : false,
                    message: 'ERROR!!! Usuario o contraseña incorrecta.'
                })    
            }
        } else {
            res.json({
                resultado: false,
                message: 'ERROR!!! Usuario o contraseña incorrecta.'
            })
        }
    } catch (error) {
        console.error(error)
    }
}

module.exports = { getUsuario, crearUsuario, borrarUsuario, modificarUsuario, login }