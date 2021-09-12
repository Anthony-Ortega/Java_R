//Arreglos
const pares = [2,4,6,8,10]
const impares = [1,3,5,7,9]
const numero1 = pares.concat(impares)
const numero2 = [...impares,...pares]

//console.log(numeros1, numeros2)

//**************/
//OBjectos
let precio = 4
const articulo = {
    descripcion:'coca cola',
    precio: 2,
    stock: 10000
} 
const art = {...articulo}
art.id = 1
//console.log ('articulo','articulo')
//console.log ('art','art')
// x = 4
// y = x
//x = 5
//console.log (x,y)
const articulo2 = {
    ...articulo,

    precio: 5,
    ['stock']:500
}

console.log(articulo2)

const masDatos = ({precio,stock}) =>{
    //console.log ("Faltante", datos)
    console.log("Faltante",precio,stock)
}
const mostrarArticulo = ({descripcion,...props}) =>{
    console.log(descripcion.props)
    masDatos({...props})
}

mostrarArticulo(articulo)