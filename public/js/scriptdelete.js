// let enviar = document.getElementById('enviar')
// enviar.addEventListener('click', pedirDatos)

document.getElementById('enviar').addEventListener('click', (e)=>{
    e.preventDefault()
    let dato1 = document.getElementById('dato1').value
    pedirDatos(dato1)
})


async function pedirDatos(dato){
    //let dato1 = document.getElementById('dato1').value
    let url = `/productos/${dato}`

    let respuesta = await fetch(url)
    let datos = await respuesta.json()
    document.getElementById('formuget').reset()
    
    let id = document.getElementById('idp')
    id.textContent = datos.id
    let nombre = document.getElementById('nombrep')
    nombre.textContent = datos.nombre
    let descripcion = document.getElementById('descripcionp')
    descripcion.textContent = datos.descripcion
    let precio = document.getElementById('preciop')
    precio.textContent = datos.precio
    let cantidad = document.getElementById('cantidadp')
    cantidad.textContent = datos.cantidad
    let btndel = document.getElementById('btndel')
    let botondel = document.createElement('button')
    botondel.setAttribute('class','btn border-0 botonicon')
    btndel.append(botondel)
    btndel.addEventListener('click', confirmardel)
    return 
}

function confirmardel(){
    
    let confirmar = document.getElementById('confirm')
    let contenconfim = document.createElement('td')
    contenconfim.setAttribute('colspan','6')
    contenconfim.setAttribute('class','text-center')
    contenconfim.textContent = '¿Esta seguro de eliminar el item seleccionado?'
    confirmar.appendChild(contenconfim)
    let botonremov = document.createElement('button')
    botonremov.setAttribute('class','btn border-0 mx-4 botonapply')
    let botoncancel = document.createElement('button')
    botoncancel.setAttribute('class','btn border-0 mx-2 botoncancel')
    contenconfim.appendChild(botonremov)
    contenconfim.appendChild(botoncancel)
    botonremov.addEventListener('click', deleteData)
    botoncancel.addEventListener('click', cancelar)
    btndel.removeEventListener('click', confirmardel)
    enviar.removeEventListener('click', pedirDatos)
}

async function deleteData(){
    let datoid = document.getElementById('idp').textContent
    console.log(datoid)
    let url = `/productos/${datoid}`

    const conf = {
        method: 'DELETE',
        headers:{
            'Content-Type' : 'application/json'
        }
    }
    
    try{
        let peticion = await fetch(url, conf)
        if(!peticion.ok){
            throw new Error('Hubo un problema al enviar la solicitud.')
        }
        let valores = await peticion.json()
        alert('El producto se ha eliminado')
        location.reload()
        console.log('Respuesta del servidor:', valores)
    }catch(error){
        console.error('Error:', error)
    }

}

function cancelar(){
    alert('Ha cancelado la eliminación del producto')
    location.reload()
}