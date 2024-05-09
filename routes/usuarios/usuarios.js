const express = require('express')
const mibdu = require('../../data/usuarios.json')
const fs = require('fs')

const usuariosRouter = express.Router()

//middlewares personales
usuariosRouter.use('/',(req, resp, next)=>{
    //console.log('Esto se ejecuta antes del endopoint')
    let archivojson = './data/usuario.json'
    fs.readFile(archivojson, 'utf-8', (error, datos)=>{
        if(error){
            console.log('Error al leer los datos')
        }else{
            console.log('Datos ubicados y cargados satisfactoriamente')
            next()
        }

    })
    next()
})


//endpoint de consulta al json usuarios
usuariosRouter.get('/',(req, resp)=>{

    let usuarios = mibdu
    if(!usuarios) return resp.status(404).send()
    resp.send(usuarios)

})

usuariosRouter.post('/',(req,resp)=>{

})

usuariosRouter.patch('/:id',(req,resp)=>{

})

usuariosRouter.delete('/:id',(req,resp)=>{

})


module.exports = usuariosRouter