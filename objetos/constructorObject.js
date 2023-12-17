//Object Literal
const electronico = {
  color: "negro",
  nombre: "Monitor 20 pulgadas",
  precio: 300,
  disponible: true,
};

//Object Constructor  'this, siempre hará referencia a los valores del objeto en donde se maneja'
function Electronico(nombre, precio) {
  this.nombre = nombre;
  this.precio = precio;
  this.disponible = true;
}

const electronico2 = new Electronico("Bocinas Monster", 400);

console.log(electronico2);
