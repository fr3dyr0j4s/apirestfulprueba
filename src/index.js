console.clear()
//instalar dotenv -> npm i dotenv

const dotenv = require('dotenv')
//const path = require('path')
const express = require('express') 
const expressApp = express()

dotenv.config()

const PUERTO = process.env.PUERTO || 3150


const rutasApp = require('./routes/adminrouters')

expressApp.use(express.static('public'))


expressApp.use('/', rutasApp)


expressApp.listen(PUERTO, () =>{
    console.log(`Servidor listo en el puerto ${PUERTO}`)
})



