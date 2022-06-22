const Suscripcion = require('../model/suscripcion')

const getSuscripcion = async(req, res) => {
    const { idsuscripcion } = req.body 
    try {
        const unaSuscripcion = await Suscripcion.findById(idsuscripcion) 
        const mensaje = (unaSuscripcion) ? "Suscripción obtenida con éxito." : "La suscripción seleecionada no existe"
        
        res.json({
            resultado : true,
            message: mensaje,
            unaSuscripcion
        })
    } catch (error) {
        console.error(error)
    }
}

const crearSuscripcion = async(req, res) => {
    const {nombre, apellido, email, telefono} = req.body 

    try
    {    
        const existe = await Suscripcion.findOne({email: email}).exec()

        if (!existe) {
            const nuevaSuscripcion = new Suscripcion({
                nombre,
                apellido,
                email,
                telefono
            })
    
            await nuevaSuscripcion.save()
    
            res.json({
                resultado : true,
                message: 'Suscripcion creada exitosamente.'
            })
        } else {
            res.json({
                resultado : false,
                message: `ATENCION!!! Ya existe un usuario suscripto con el mail ${email}.`
            })
        }
    } catch (error) {
        console.error(error)
    }
}

const borrarSuscripcion = async(req, res) => {
    const  {idsuscripcion} = req.body 

    try {
        const resultado = await Suscripcion.findByIdAndDelete(idsuscripcion)
        
        if(resultado) {
            res.json({
                resultado : true,
                message: `La suscripción ${idsuscripcion} fue eliminada.`
            })
        } else {
            res.json({
                resultado : false,
                message: `ERROR!!! No se encontró la suscripción ${idsuscripcion}.`
            })
        }
    } catch (error) {
        console.error(error)
    }
}

const modificarSuscripcion = async(req, res) => {
    const  {idsuscripcion, nombre, apellido, email, telefono} = req.body 

    try {
        const resultado = await Suscripcion.findByIdAndUpdate(idsuscripcion, {
            nombre,
            apellido, 
            email,
            telefono
        })
        
        if(resultado) {
            res.json({
                resultado : true,
                message: `La suscripción ${idsuscripcion} se actualicó con éxito.`
            })
        } else {
            res.json({
                resultado : false,
                message: `ERROR!!! No se encontró la suscripción ${idsuscripcion}.`
            })
        }
    } catch (error) {
        console.error(error)
    }
}

module.exports = { getSuscripcion, crearSuscripcion, borrarSuscripcion, modificarSuscripcion }