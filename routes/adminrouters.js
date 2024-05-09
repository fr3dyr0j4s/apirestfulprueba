const express = require('express')
const cors = require('cors')

const routerProductos = require('./productos/productos')
const routerUsuarios = require('./usuarios/usuarios')
const routerProveedores = require('./proveedores/proveedores')
const routerPrivilegios = require('./privilegios/privilegios')

const rutas = express.Router()

//const fs = require('fs') // IMPORTANTE
//Middlewares de Express
rutas.use(express.json()) 
rutas.use(express.text()) 
//rutas.use(express.urlencoded({extended:true}))
rutas.use(cors())

// {
//     origin:(origin, callback) => {
//     const ACCEPTED_ORIGINS = [
//         'http://localhost:3000'
//     ]
//     }
// }

rutas.use('/productos', routerProductos)
rutas.use('/usuarios', routerUsuarios)
rutas.use('/proveedores', routerProveedores)
rutas.use('/privilegios', routerPrivilegios)

module.exports = rutas