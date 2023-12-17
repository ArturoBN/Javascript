//Conocer el indice de un elemento 

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

// meses.forEach((mes, i)=>{
//         if(mes === "Abril"){
//             console.log(`Encontrado en el indice ${i}`);
//         }
// })

// const mesExiste = meses.findIndex(()=>{

// })

//Encontrar el indice de un mes con findIndex

const indice = meses.findIndex((mes)=>{
   return mes ==='Abril'  
})
console.log(indice);


// Encontrar el indice de un arreglo de objetos con findIndex si hay mas valores coincidentes
//retorna solo el primero que encuentre en el arreglo
const indice2 = carrito.findIndex((producto) =>{
    return producto.precio === 700
})

console.log(indice2);