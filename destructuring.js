const datos = {
    imagen: '',
    correo: 'aortegai2@unemi.edu.ec'
}

//console.log(Datos)
const mostrarDatos = (avatar) =>
    `
    <img src={avatar.imagen} alt=${avatar.correo}/>
    `
const mostrarDatos1 = (avatar) =>{
    const {imagen,correo} = avatar
    return (
        `
         <img src={imagen} alt=${correo}/>
         `
    )
}

////////////////////////////////
const mostrarDatos2 = ({imagen:ing,correo}) =>{
`
<img src={imagen} alt=${correo}/>
`
}

//let x = mostrarDatos (datos)
let img = mostrarDatos (datos)
const $root = document.getElementById ("root")
$root.innerHTML = "<h2> Destructuring </h2>"
$root.innerHTML += mostrarDatos(datos)
$root.innerHTML += mostrarDatos1(datos)
$root.innerHTML += mostrarDatos2(datos)
    