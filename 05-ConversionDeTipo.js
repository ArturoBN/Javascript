let Numero = "43";
console.log(typeof Numero);

let edad = Number(Numero);
console.log(typeof edad);
console.log(edad);

if (isNaN(edad)) {
  console.log("No es un numero");
} else {
  let voto = edad >= 18 ? "Puede votar" : "No puede votar";
  console.log(voto);
}
