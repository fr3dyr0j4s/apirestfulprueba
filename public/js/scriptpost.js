
document.getElementById('registrar').addEventListener('click', (e)=>{
    e.preventDefault()
    postDatos()
})

async function postDatos(){
    const formulario = document.getElementById('formupost')
    let datos = new FormData(formulario)
    //console.log(datos)
    let datosjson = Object.fromEntries(datos.entries())
    console.log(JSON.stringify(datosjson))
    
    let url = '/productos'

    const conf = {
        method: 'POST',
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
        alert('El producto se ha registrado')
        console.log('Respuesta del servidor:', valores)
        document.getElementById('formupost').reset()
    }catch(error){
        console.error('Error:', error)
    }

}


