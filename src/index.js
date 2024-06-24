console.clear()
//instalar dotenv -> npm i dotenv

//const dotenv = require('dotenv')
//const path = require('path')
const express = require('express') 
const expressApp = express()

//dotenv.config()

const PUERTO = process.env.PUERTO || 3150
//const PUERTO = 3250


const rutasApp = require('./routes/adminrouters')

expressApp.use(express.static('./src/public'))


expressApp.use('/', rutasApp)

// const server = expressApp.listen(0,()=>{
//     const port = server.address().port
//     console.log('Servidor listo en el puerto', port)
// })

expressApp.listen(PUERTO, () =>{
    console.log(`Servidor listo en el puerto ${PUERTO}`)
})



