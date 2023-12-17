const meses = [
    "Enero", "Febrero", "Marzo", "Abril",
    "Mayo", "Junio", "Julio", "Agosto",
    "Septiembre", "Octubre", "Noviembre", "Diciembre"
]

const carrito =[
    {nombre:'Monitor 27 pulgadas', precio:500 },
    {nombre:'Television', precio:100 },
    {nombre:'Tablet', precio: 200 },
    {nombre:'Audifonos', precio: 300, descuento:true },
    {nombre:'Teclado', precio: 400 },
    {nombre:'Celular', precio: 700 }
]


//Comprobar si un valor existe en un arreglo

//Esta seria la forma tradicional
// meses.forEach((mes)=>
//     if(mes==='Enerso')
//     console.log('Enero existe');
// })

//Con includes
// const resultado = meses.includes('Enero')
// console.log(resultado);

//para objetos se usa Some
const existe = carrito.some((producto)=>{
    return producto.nombre ==='Teclado'
})
console.log(existe); 