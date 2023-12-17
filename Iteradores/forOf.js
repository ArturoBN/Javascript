
const carrito2 =[
    {nombre:'Monitor 27 pulgadas', precio:500 },
    {nombre:'Television', precio:100 },
    {nombre:'Tablet', precio: 200 },
    {nombre:'Audifonos', precio: 300, descuento:true },
    {nombre:'Teclado', precio: 400 },
    {nombre:'Celular', precio: 700 }
]

const pendientes = ['Tarea','Comer', 'Proyecto', 'Estudiar Programacion']

for(let pendiente of pendientes){
    console.log(pendiente);
}

for(carrito of carrito2){
    console.log(carrito.nombre);
}