
const mibdpv = require('../data/usuarios.json')

const autenticar = (req, resp, next)=>{
    let username = req.body.username,
        password = req.body.password

    if(!username || !password) return resp.sendStatus(400)

    let user = mibdpv.find(user => user.username === username)

    if(!user) return resp.sendStatus(401)

    if(user.password !== password) resp.sendStatus(401)
    
    resp.locals.userAut = user    

    next()
}

module.exports = autenticar

//para trabajar sesiones es posible hacer uso del modulo nanoid
//una vez instalado el modulo se puede hacer uso creando una variable
//o constante y hacerla de tipo nanoid: const sesionId = nanoid()

//de igual manera el modulo de cookie-parser