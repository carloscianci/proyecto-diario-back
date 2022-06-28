const Noticia = require('../model/noticias')

const getNoticias = async(req, res) => {
    try {
        const listaNoticias = await Noticia.find().sort({ idtiponoticia: 1, destacada_seccion: -1, titulo: 1})
        res.json({
            resultado : true,
            listaNoticias
        })
        
    } catch (error) {
        console.error(error)
    }
}

const getUnaNoticia = async(req, res) => {
    const { idnoticia } = req.body 
    try {
        const unaNoticia = await Noticia.findById(idnoticia) 
        const result = (unaNoticia) ? true : false
        const mensaje = (unaNoticia) ? "Noticia obtenida con éxito." : "La noticia seleecionada no existe"
        
        res.json({
            resultado : result,
            message: mensaje,
            unaNoticia
        })
    } catch (error) {
        console.error(error)
    }
}

const crearNoticia = async(req, res) => {
    const {idtiponoticia, titulo, resumen, texto, urlImagen, destacada_seccion, destacada_diario} = req.body 

    try
    {    
        const nuevaNoticia = new Noticia({
            idtiponoticia,
            titulo,
            resumen,
            texto,
            urlImagen,
            destacada_seccion,
            destacada_diario
        })

        await nuevaNoticia.save()

        res.json({
            resultado : true,
            message: 'Noticia creada exitosamente.'
        })
    } catch (error) {
        console.error(error)
    }
}

const borrarNoticia = async(req, res) => {
    const  {idnoticia} = req.body 

    try {
        const resultado = await Noticia.findByIdAndDelete(idnoticia)
        
        if(resultado) {
            res.json({
                resultado : true,
                message: `La noticia ${idnoticia} fue eliminada.`
            })
        } else {
            res.json({
                resultado : false,
                message: `ERROR!!! No se encontró la noticia ${idnoticia}.`
            })
        }
    } catch (error) {
        console.error(error)
    }
}

const modificarNoticia = async(req, res) => {
    const  {idnoticia, idtiponoticia, titulo, resumen, texto, urlImagen, destacada_seccion, destacada_diario} = req.body 

    try {
        const resultado = await Noticia.findByIdAndUpdate(idnoticia, {
            idtiponoticia,
            titulo, 
            resumen,
            texto,
            urlImagen,
            destacada_seccion,
            destacada_diario
        })
        
        if(resultado) {
            res.json({
                resultado : true,
                message: `La noticia ${idnoticia} se actualicó con éxito.`
            })
        } else {
            res.json({
                resultado : false,
                message: `ERROR!!! No se encontró la noticia ${idnoticia}.`
            })
        }
    } catch (error) {
        console.error(error)
    }
}

module.exports = { getNoticias, crearNoticia, borrarNoticia, modificarNoticia, getUnaNoticia }