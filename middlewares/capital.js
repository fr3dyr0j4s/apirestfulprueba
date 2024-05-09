
const capital = (req, res, next)=>{
    let texto = req.params.nombre
    if(!texto) res.send(400)

        texto = texto.toLowerCase()
        texto = texto.charAt(0).toUpperCase() + texto.slice(1)
        console.log(texto)

    res.locals.textoValidado = texto
        
    next()
}


























// const capital = (req, res, next)=>{
//     let texto = req.params.nombre
//     if(!texto) res.send(400)

//         texto = texto.toLowerCase()
//         texto = texto.charAt(0).toUpperCase() + texto.slice(1)
//         console.log(texto)
//         let consultar = mibdp.find((producto) => producto.nombre === texto)

//         if(consultar) res.send(consultar)
//         res.status(400).send()
        
//     next()
// }


// productoRouter.use('/:nombre',(req, resp, next)=>{
//     //let texto = req.query.producto
//     let texto = req.params.nombre
//     if(!texto) resp.send(400)
//         texto = texto.toLowerCase()
//         texto = texto.charAt(0).toUpperCase() + texto.slice(1)
//         console.log(texto)
//         resp.locals.textoValidado = texto
//     next()
// })

module.exports = capital