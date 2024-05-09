
document.getElementById('enviar').addEventListener('click', (e)=>{
    e.preventDefault()
    let dato1 = document.getElementById('dato1').value
    pedirDatos(dato1)
})

let datostabla = document.querySelectorAll('#datostabla td')
let error = document.getElementById('error')
let exito = document.getElementById('exito')

async function pedirDatos(dato){
    try {
        const url = `/productos/${dato}`
        const respuesta = await fetch(url)
        const datos = await respuesta.json()
        mostrarDatos(datos)
    }catch(error) {
        mostrarError()
        datostabla.forEach((datos)=>{
            datos.textContent = ''
        })
    }
}

function mostrarDatos(datos) {
    
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

    exito.textContent = '¡Exito en la consulta!, El producto existe en la BD'
    error.textContent = ''
}

function mostrarError() {
    
    error.innerHTML = '¡Error! la consulta falló, El producto no existe en la BD'
    exito.textContent = ''
}

