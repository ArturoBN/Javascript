//recopila una gran cantidad de datos para reunirlos 
//y entregar un solo resultado

const carrito =[
    {nombre:'Monitor 27 pulgadas', precio:500 },
    {nombre:'Television', precio:100 },
    {nombre:'Tablet', precio: 200 },
    {nombre:'Audifonos', precio: 300, descuento:true },
    {nombre:'Teclado', precio: 400 },
    {nombre:'Celular', precio: 700 }
]


let total = 0
carrito.forEach((producto)=>{total += producto.precio})
console.log(total);

//no sigue el mismo patron que los otros array methods reduce
let resultado = carrito.reduce((total, producto) => total + producto.precio,0)
console.log(resultado);