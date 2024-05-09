
const mibdpv = require('../data/usuarios.json')

const autorizar = (req, resp, next)=>{
    let username = req.body.username,
        password = req.body.password

    if(!username || !password) return resp.sendStatus(400)

    let user = mibdpv.find(user => user.username === username)

    if(!user) return resp.sendStatus(401)

    if(user.password !== password) resp.sendStatus(401)

    if(user.role != 'admin') return resp.status(403).send('No tiene permisos')

    resp.send(`Usuario ${user.name} administrador`)
}

module.exports = autorizar