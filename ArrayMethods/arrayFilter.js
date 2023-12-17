//crea un nuevo arreglo basado en el parametro evaluado

const carrito =[
    {nombre:'Monitor 27 pulgadas', precio:500 },
    {nombre:'Television', precio:100 },
    {nombre:'Tablet', precio: 200 },
    {nombre:'Audifonos', precio: 300, descuento:true },
    {nombre:'Teclado', precio: 400 },
    {nombre:'Celular', precio: 700 }
]

let resultado;

resultado = carrito.filter((producto)=>{
return producto.precio > 400
})
console.log(resultado);

let resultado2;

resultado2 = carrito.filter((producto) =>{
    return producto.nombre.startsWith("T")
})

console.log(resultado2);

let resultado3;

resultado3 = carrito.filter((producto)=>{
    return producto.nombre !== 'Audifonos'
})

console.log(resultado3);