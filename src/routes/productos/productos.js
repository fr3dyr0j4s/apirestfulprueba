const express = require('express') 
const mibdp = require('../../data/productos.json')
const fs = require('fs')
const productoRouter = express.Router()

const capitalMiddleware = require('../../middlewares/capital')

//ENDPOINTS
productoRouter.get('/:nombre', capitalMiddleware, (req, resp)=>{
    let texto = resp.locals.textoValidado

    const consultar = mibdp.find((producto) => producto.nombre === texto)
    
    if(consultar){
        //console.log(consultar)
        resp.send(consultar)
    }else{
        //console.log('El nombre no existe en la bd')
        resp.status(404)
        resp.send('El nombre no existe en la bd')
    }
})

///*** Para DATATABLES creamos un nuevo EndPoint para consultar todo nuestro JSON
productoRouter.get('/', (req, resp) => {

    const productos = mibdp 

    if(!productos) return resp.status(404).send()

    return resp.send(productos) 
})

productoRouter.post('/', (req, resp) => {
    
    let id = req.body.id,
        nombre = req.body.nombre,
        descripcion = req.body.descripcion,
        precio = req.body.precio,
        cantidad = req.body.cantidad

    if(!id || !nombre) resp.status(400).send
    
    const productos = mibdp.find((productos) => productos.id === id)
    if(productos) return resp.status(409).send()

    mibdp.push({
        id, nombre, descripcion, precio, cantidad
    })

    let datos = JSON.stringify(mibdp)
    try{
        fs.writeFileSync('./src/data/productos.json', datos)
    } catch(error){
        console.log(error)
    }

    return resp.send(mibdp)

})

productoRouter.patch('/:id', (req, resp) => { 
    
    let id = req.params.id
    
    let precio = req.body.precio
    if(!precio) return resp.status(400).send() 

    const producto = mibdp.find((producto) => producto.id === id)
    if(!producto) return resp.status(404).send() 
    
    producto.precio = precio
    
    let datos = JSON.stringify(mibdp)
    try{
        fs.writeFileSync('./src/data/productos.json', datos)
    } catch(error){
        console.log(error)
    }
    return resp.send(mibdp)
})   

productoRouter.delete('/:id', (req, resp) => { 
    
    let id = req.params.id
    
    const productoIndex = mibdp.findIndex((producto) => producto.id === id)
    
    if(productoIndex === -1) return resp.status(404).send()
    mibdp.splice(productoIndex, 1)
    console.log(productoIndex) 
    
    let datos = JSON.stringify(mibdp)
    try{
        fs.writeFileSync('./src/data/productos.json', datos)
    } catch(error){
        console.log(error)
    }
    return resp.send(mibdp) 
    
})

module.exports = productoRouter

