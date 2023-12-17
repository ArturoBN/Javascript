//tipo de dato STRING
let nombre = "Arturo";
console.log(nombre);

//tipo de dato NUMERO
let number = 1000;
console.log(number);

//tipo de dato OBJECT
let objeto = {
  nombre: "Arturo",
  apellido: "Ballesteros",
  telefono: 5582215777,
};
// typeof nos sirve para imprimir el tipo de variable
console.log(typeof objeto, objeto);

//tipo de dato BOOLEANO
let bandera = true;
console.log(typeof bandera, bandera);

//tipo de dato FUNCTION
function miFuncion() {}
console.log(typeof miFuncion, miFuncion);

//tipo de dato SYMBOL
let simbolo = Symbol("mi simbolo");
console.log(simbolo);

//tipo clase, será una funcion

class Persona {
  constructor(nombre, apellido) {
    (this.nombre = nombre), (this.apellido = apellido);
  }
}
console.log(Persona);

//tipo de dato undefined
let x;
console.log(x);

//tipo null
let y = null;
console.log(y);

//tipo array
const array = ["audi", "volvo", "bmw", "mercedes"];

console.log(array[1]);

//tipo vacío
const vacio = "";
console.log(vacio);
