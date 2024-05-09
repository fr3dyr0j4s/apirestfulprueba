const express = require('express')

const mibdpv = require('../../data/usuarios.json')

const privRouter = express.Router()

const middlewareAutenticar = require('../../middlewares/autenticado')


//privRouter.use('/autenticado', middlewareAutenticar)

//Publico
privRouter.get('/publico',(req, resp)=>{
    resp.send('Endpoint público')
})

//Autenticado
//privRouter.post('/autenticado', middlewareAutenticar)
//privRouter.post('/autenticado')
privRouter.post('/autenticado', middlewareAutenticar, (req, resp)=>{
    let user = resp.locals.userAut

    resp.send(`Usuario ${user.name} autenticado`)

})


//Autorizado

privRouter.post('/autorizado', (req, resp)=>{
    let username = req.body.username,
        password = req.body.password

    if(!username || !password) return resp.sendStatus(400)

    let user = mibdpv.find(user => user.username === username)

    if(!user) return resp.sendStatus(401)

    if(user.password !== password) resp.sendStatus(401)

    if(user.role != 'admin') return resp.status(403).send('No tiene permisos')

    resp.send(`Usuario ${user.name} administrador`)

})

module.exports = privRouter