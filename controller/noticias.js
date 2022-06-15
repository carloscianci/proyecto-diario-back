const Noticia = require('../model/noticias')

const getNoticias = async(req, res) => {
    try {
        const listaNoticias = await Noticia.find().sort({ idtiponoticia: 1, titulo: 1} )
        res.json({
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
        const mensaje = (unaNoticia) ? "Noticia obtenida con éxito." : "La noticia seleecionada no existe"
        
        res.json({
            message: mensaje,
            unaNoticia
        })
    } catch (error) {
        console.error(error)
    }
}

const crearNoticia = async(req, res) => {
    const {idtiponoticia, titulo, resumen, texto, urlImagen} = req.body 

    try
    {    
        const nuevaNoticia = new Noticia({
            idtiponoticia,
            titulo,
            resumen,
            texto,
            urlImagen
        })

        await nuevaNoticia.save()

        res.json({
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
                message: `La noticia ${idnoticia} fue eliminada.`
            })
        } else {
            res.json({
                message: `ERROR!!! No se encontró la noticia ${idnoticia}.`
            })
        }
    } catch (error) {
        console.error(error)
    }
}

const modificarNoticia = async(req, res) => {
    const  {idnoticia, idtiponoticia, titulo, resumen, texto, urlImagen} = req.body 

    try {
        const resultado = await Noticia.findByIdAndUpdate(idnoticia, {
            idtiponoticia,
            titulo, 
            resumen,
            texto,
            urlImagen
        })
        
        if(resultado) {
            res.json({
                message: `La noticia ${idnoticia} se actualicó con éxito.`
            })
        } else {
            res.json({
                message: `ERROR!!! No se encontró la noticia ${idnoticia}.`
            })
        }
    } catch (error) {
        console.error(error)
    }
}

module.exports = { getNoticias, crearNoticia, borrarNoticia, modificarNoticia, getUnaNoticia }