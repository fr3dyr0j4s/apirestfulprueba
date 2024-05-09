const express = require('express') 
const mibdpr = require('../../data/proveedores.json')
const fs = require('fs')
//id
//nombre
//correo
//direccion
//contacto
//estado

const proveedorRouter = express.Router()

//Middlewares a Proveedores

//EndPoints a Proveedores
proveedorRouter.get('/', (req, resp)=>{
    //logica para consultar todos los proveedores
    const proveedores = mibdpr

    if(!proveedores) return resp.status(404).send()
    return resp.send(proveedores)
})


module.exports = proveedorRouter