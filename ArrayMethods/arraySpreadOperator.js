//spread operator siempre te va a dar un arreglo nuevo,
//no modificara el arreglo original
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

//con arreglo de indicies
const meses2 = [...meses, 'Otro mes']

console.log(meses2);

//con arreglo de objetos

const producto = { nombre: 'Radio', precio: 50};
const carrito2 = [ ...carrito, producto]

console.log(carrito2);