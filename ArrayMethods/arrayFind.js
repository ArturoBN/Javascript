const carrito =[
    {nombre:'Monitor 27 pulgadas', precio:500 },
    {nombre:'Television', precio:100 },
    {nombre:'Tablet', precio: 200 },
    {nombre:'Audifonos', precio: 300, descuento:true },
    {nombre:'Teclado', precio: 400, descuento:true },
    {nombre:'Celular', precio: 700 }
]


let result= '';
carrito.forEach((producto, index) =>{
    if(producto.nombre === 'Tablet'){
        result = carrito[index]  //lo asignas a la variable y devuelves el resultado del index donde lo encontraste
    }
})

console.log(result);

//find regresa el primer elemento que cumpla con esa condicion
let resultado;
resultado = carrito.find((producto) =>{
    return producto.descuento == true
})

console.log(resultado);