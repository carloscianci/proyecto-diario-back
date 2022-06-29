require('dotenv').config()
const mongoose = require('mongoose')

const database = process.env.DB
//const database = process.env.DBLOCAL

const connectDB = async() => {
    try {
        await mongoose.connect(database)
        
        console.log("Conectado a la BD.")
    } catch (error) {
        console.error(error)
    }
}

connectDB()



