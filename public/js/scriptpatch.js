// let enviar = document.getElementById('enviar')
// enviar.addEventListener('click', getDatos)
document.getElementById('enviar').addEventListener('click', (e)=>{
    e.preventDefault()
    let dato0 = document.getElementById('dato0').value
    getDatos(dato0)
})

async function getDatos(dato){
    
    let url = `/productos/${dato}`

    let respuesta = await fetch(url)
    let datos = await respuesta.json()
    
    let id = document.getElementById('dato1')
    id.value = datos.id
    id.disabled = true
    let nombre = document.getElementById('dato2')
    nombre.value = datos.nombre
    nombre.disabled = true
    let descripcion = document.getElementById('dato3')
    descripcion.value = datos.descripcion
    descripcion.disabled = true
    let precio = document.getElementById('dato4')
    precio.value = datos.precio
    let cantidad = document.getElementById('dato5')
    cantidad.value = datos.cantidad
    cantidad.disabled = true
}

// let actualizar = document.getElementById('actualizar')
// actualizar.addEventListener('click', patchDatos)
document.getElementById('actualizar').addEventListener('click', (e) =>{
    e.preventDefault()

    patchDatos()
})

async function patchDatos(){

    const formulario = document.getElementById('formupatch')
    let datos = new FormData(formulario)
    console.log(datos)
    let datosjson = Object.fromEntries(datos.entries())
    //console.log(JSON.stringify(datosjson))
    
    let dato1 = document.getElementById('dato1').value
    let url = `/productos/${dato1}`

    const conf = {
        method: 'PATCH',
        headers:{
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify(datosjson)
    }
    try{
        let peticion = await fetch(url, conf)
        if(!peticion.ok){
            throw new Error('Hubo un problema al enviar la solicitud.')
        }
        let valores = await peticion.json()
        alert('El precio del producto se ha actualizado')
        console.log('Respuesta del servidor:', valores)
        document.getElementById('formuget').reset()
        document.getElementById('formupatch').reset()
    }catch(error){
        console.error('Error:', error)
    }
    
}

