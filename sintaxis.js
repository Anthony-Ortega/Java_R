//Variables_Primitivas
let nombre = ""
let apellido = "Ortega"
let edad = 21
let estado = true
//Constantes - //Arreglos
const numeros = [2,13,26,12,19]
//Objetos
const articulo = {
    descripcion: "Coca Cola",
    precio: 2,
    stock: 1000
}
const notas = [
    {   nombre: "Karen", promedio:100,
        parciales:[
                    {primer:[25,30]},
                    {segundo:[15,25]}
                  ]  
    },

    {   nombre: "luis", promedio:80,
        parciales:[
                    {primer:[15,30]},
                    {segundo:[25,20]}
                  ]
    },

    {   nombre: "Maria", promedio:95,
        parciales:[
                    {primer:[25,28]},
                    {segundo:[27,30]}
                  ]
    },
]
//IF- (Condiciones)
if (nombre)
    console.log("nombre: ",nombre, "edad: ",edad)
else 
    console.log("No ha ingresado nungún nombre" , nombre)

let resp= (nombre==undefined)? "No se ha creado la variable": nombre
//console.log(resp)

articulo.precio=30
articulo.estado= true
console.log("Articulo =>", articulo, articulo.descripcion,articulo.precio,articulo.estado)

console.log(notas[1])
console.log(notas[1].nombre)
console.log(notas[1].parciales)
console.log(notas[1].parciales[1])
console.log(notas[1].parciales[1].segundo)
console.log(notas[1].parciales[1].segundo[1])

//Switch//
day = 3
switch (day){
    case 1:
        console.log("Lunes")
        break
    case 2:
        console.log("Martes")
        break
    default:
        console.log("Día invalido")
        break
    
}    
let x=20
let y=0
try {
    if (y==0)
        throw ("Divisón para cero no está permitida")
    let resp = x/y
    console.log(resp)
}catch (error){
    console.log("Error con y=0",error)
}

/*-----------------------CICLOS------------------------*/

//Ciclo While
const numbers = [3,45,55,20,10,85,7]
let pos=0
while (pos< numbers.length && numbers[pos]!=10){
    console.log(pos,"[",numbers[pos],"]")
    pos +=1
}
console.log("Fin del ciclo While")
//Ciclo For
for (let ind=0; ind< numbers.length ; ind+=2){
    console.log(ind,"[",numbers[ind],"]")
}
//Ciclo For recorrido de atras para adelante
console.log("Ciclo For con recorrido de atras para adelante")
for (let ind= numbers.length-1 ;ind>=0; ind-=1){
    console.log(ind,"[",numbers[ind],"]")
}

//-----------------FUNCIONES---------------//
//Función_Suma
console.log("Función Suma")
function suma(){
    let num1=13
    let num2=31
    console.log("La suma de",num1,"+",num2,"=", num1+num2);
}
suma() //Llamar a la función 

//Función_Multiplicación
console.log("Función Multiplicación")
function multiplicacion(num1,num2){
    return num1*num2
}
console.log("La multiplicación es: ",multiplicacion(5,6))
multiplicar()

//Función multiplicar, validando datos
function multiplicar (num1=2,num2=9){
    num1 = (num1)? num1:0
    num2 = (num2)? num2:0
    return num1*num2
}
console.log(multiplicar(4,7))

//Función Resta
function resta(n1,n2){
    return n1-n2
}
console.log("La resta es:", resta(5,3))

//Función División
function division(n1,n2){
    resp = n1 ? n1/n2 : 0
    return resp
}
console.log("La división es:", division(8,4))
/*---------------------------------------------------------------------------------------*/

//--------Arrow Function(FUNCION FLECHA)=: Función Flecha---------//
//Funcion Flecha||Suma//
const sumar =() => {
    let num1=13
    let num2=31
    console.log(`Suma: ${num1}+${num2}= ${num1+num2}`);
}
sumar()
//Función Flecha||Multiplicación//
const multiplicarr =(num1=2,num2=9) =>{
    num1 = (num1)? num1:0
    num2 = (num2)? num2:0
    return num1*num2
}
console.log("LA multiplicación es =>", multiplicarr())

//Función Flecha Resta//
const restar = (n1,n2)=> n1-n2
    console.log(restar(5,2))

//Función Flecha División//
const divisionn = (n1,n2)=> n2 ? n1/n2 : 0
    console.log(divisionn(8,2));