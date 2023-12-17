//every retorna un valor booleando y para que regrese true todos los 
// elementos del arreglo deben cumplir la condicion
const carrito =[
    {nombre:'Monitor 27 pulgadas', precio:500 },
    {nombre:'Television', precio:100 },
    {nombre:'Tablet', precio: 200 },
    {nombre:'Audifonos', precio: 300, descuento:true },
    {nombre:'Teclado', precio: 400 },
    {nombre:'Celular', precio: 700 }
]

const resultado = carrito.every((producto) =>{
   return producto.precio < 1000
})

console.log(resultado);