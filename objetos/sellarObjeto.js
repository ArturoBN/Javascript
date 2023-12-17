"use strict";

const electronico = {
  color: "negro",
  nombre: "Monitor 20 pulgadas",
  precio: 300,
  disponible: true,
};

Object.seal(electronico);

console.log(Object.isSealed(electronico));

//solo se pueden modificar los valores del objeto ya existentes con seal

electronico.color = "rojo";
console.log(electronico.color);
