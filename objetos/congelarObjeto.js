"use strict"; //exige buenas practicas

const electronico = {
  color: "negro",
  nombre: "Monitor 20 pulgadas",
  precio: 300,
  disponible: true,
};

//Si un objeto está en una variable si se pueden modificar sus valores
/*Prevención*/
Object.freeze(electronico); //congelar el objeto para evitar que se modifique

//Saber si un objeto está congelado

console.log(Object.isFrozen(electronico));
