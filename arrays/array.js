//forma 1 de crear arreglo
const numeros = [10, 1, 2, 3, 45, 65, [3, 4, 5, 1]];

//forma 2 de crear arreglo
const meses = new Array("Enero", "Febrero", "Marzo");

console.log(numeros);
console.log(meses);
console.table(meses);

//acceder a los valores de un arreglo
console.log(meses[1]);
console.log(numeros[6][2]); //para acceder a un arreglo que contiene otro arreglo y acceder al valor del arreglo contenido

//recorrer un array
for (i = 0; i < numeros.length; i++) {
  let recorrido = numeros[i];
  console.log(recorrido);
}
