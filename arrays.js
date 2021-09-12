//--------------------------AREGLOS-----------------//
const arreglo = [2,45,60,85,10,20]
for (let ind=0; ind<arreglo.length;ind++){
    console.log(`${ind}[${arreglo[ind]}]`)
}
/* ------------------------------------------------------------------------*/
const numeros = [20,40,20,80.50,120]
const alumnos = [
    {nombre: "Karla", n1:30,n2:45}, 
    {nombre: "Jose", n1:30,n2:25},
    {nombre: "Hernan", n1:30,n2:50}, 
    {nombre: "Julio", n1:50,n2:38},
    {nombre: "Steven", n1:45,n2:35},
    {nombre: "Carlos", n1:50,n2:50},
]
console.log("Alumno =>",alumnos)
for( pos=0;pos<alumnos.length;pos++)
console.log("alumnos =>",alumnos[pos].nombre)

//Uso de forEach//
//1 Forma

const fun = alumno =>{
    pro = alumno.n1+alumno.n2
    console.log("El promedio de", alumno.nombre, "es:",pro);
}
alumnos.forEach(fun);

// //2 Forma de usar ForEach

alumnos.forEach(item => {
    pro = item.n1+item.n2
    console.log(item.nombre,pro)
})
//.map: retorna un nuevo arreglo
const items = alumnos.map(items => {
    prom = (items.n1+items.n2)/2
    return items.nombre
});
console.log(items)

//filter: Arroja lo que buscas

const itemss = alumnos.filter(itemss => itemss.nombre!="Karla");

//alumnos = [...items]
console.log(itemss)