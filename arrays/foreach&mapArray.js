const carrito = [
  {
    nombre: "monitor 27 pulgadas",
    precio: 22,
  },
  {
    nombre: "bocina",
    precio: 10,
  },
  {
    nombre: "zapatos",
    precio: 12,
  },
];

//for normal
// for (i = 0; i < carrito.length; i++) {
//   console.log(`${carrito[i].nombre} - Precio: ${carrito[i].precio}`);
// }

//foreach
const arregloForEach = carrito.forEach(function (producto) {
  console.log(`${producto.nombre} - Precio: ${producto.precio}`);
});

//map crea un nuevo arreglo
const arregloMap = carrito.map(function (producto) {
  return `${producto.nombre} - Precio: ${producto.precio}`;
});

console.log(arregloMap);
