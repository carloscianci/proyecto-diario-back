require('dotenv').config()
const Noticia = require('../model/noticias')

const destacadaSeccion = async(req, res, next) => {
    const {idnoticia, idtiponoticia, destacada_seccion} = req.body

    try {
        if (destacada_seccion === 0)
            return next()

        const verificacion = await Noticia.findOne({idtiponoticia : idtiponoticia, destacada_seccion : 1})

        if(!verificacion) {
            return next()
        }

        if (idnoticia && verificacion._id.toString() === idnoticia) {
            return next()
        }

        return res.json({
            resultado : false,
            message : 'ERROR!!! Sólo puede haber una noticia destacada por sección'
        })
    } catch (error) {
        return res.json({
            resultado : false,
            message : 'ERROR!!! No se pudo validar la noticia destacada'
        })        
    }
}

const destacadaDiario = async(req, res, next) => {
    const {idnoticia, destacada_diario} = req.body

    try {
        if (destacada_diario === 0)
            return next()

        const verificacion = await Noticia.findOne({destacada_diario : 1})

        if(!verificacion) {
            return next()
        }

        if (idnoticia && verificacion._id.toString() === idnoticia) {
            return next()
        }

        return res.json({
            resultado : false,
            message : 'ERROR!!! Sólo puede haber una noticia destacada del diario'
        })
    } catch (error) {
        return res.json({
            resultado : false,
            message : 'ERROR!!! No se pudo validar la noticia destacada del diario'
        })        
    }
}

module.exports = {destacadaSeccion, destacadaDiario}