
pedirId()

document.getElementById('registrar').addEventListener('click', (e)=>{
    e.preventDefault()
    postDatos()
})

function pedirId(){
    let url = '/productos'

    fetch(url)
        .then(respuesta => respuesta.json())
            .then(datos =>{
                const tam = datos.length
                const ult = datos[tam-1]
                let ultid = parseInt(ult.id) + 1
                let id = document.getElementById('dato1')
                id.value = ultid
            })
}


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


