const meses = ["Enero", "Febrero", "Marzo"];

console.log(meses);

//agrega al final del arreglo mas indices
meses.push("Abril", "Mayo");
meses.push("Junio");

console.log(meses);

/*EJEMPLO CARRITO DE COMPRAS*/
//arreglo vacío
const carrito = [];

//productos
const producto = {
  nombre: "tetera",
  precio: 300,
  cantidad: 1,
};

const producto2 = {
  nombre: "Hotwheels",
  precio: 25,
  cantidad: 1,
};

const producto3 = {
  nombre: "Playera",
  precio: 100,
  cantidad: 1,
};

carrito.push(producto);
console.table(carrito);

carrito.push(producto2);
console.table(carrito);

//agregar al inicio de un arreglo
carrito.unshift(producto3);
console.table(carrito);

//agregar elementos al arreglo con spread operator
const garage = [];

const auto = {
  marca: "BMW",
  año: "2023",
  color: "Morado",
  precio: 700,
};

const auto2 = {
  marca: "MERCEDES BENZ",
  año: "2012",
  color: "Dorado",
  precio: 100,
};

const auto3 = {
  marca: "JEEP",
  año: "2010",
  color: "Azul",
  precio: 200,
};

let resultado; /*se toma una copia del arreglo original y se trabaja sobre la copia
                en lugar del originar, es como hacer un nuevo arreglo*/
resultado = [...garage, auto];
resultado = [...resultado, auto2];
resultado = [...resultado, auto3];

console.log(resultado);

//para eliminar el ultimo elemento de un arreglo
// carrito.pop();
// console.log(carrito);

//para eliminar del inicio de un arreglo
// carrito.shift();
// console.log(carrito);

//para eliminar de cualquier parte del arreglo
carrito.splice(1, 1); //el primer numero es la posicion en donde empezara eliminar y el segundo cuantos elementos eliminara
console.log(carrito);
