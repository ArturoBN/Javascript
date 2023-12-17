//formas para declarar un arreglo

//forma vieja
// let array1 = new array("BMW", "MERCEDES BENZ", "VOLVO");

//forma nueva
const array2 = ["BMW", "MERCEDES BENZ", "VOLVO"];
// console.log(array2);

// console.log(array2[0]);

for (i = 0; i < array2.length; i++) {
  console.log(i + ":" + array2[i]);
}

//modificar elementos de un arreglo
array2[1] = "TOYOTA";

console.log(array2[1]);

//agregar valores nuevos a un arreglo USANDO EL METODO PUSH
array2.push("FORD", "LANDROVER");
console.log(array2);

//otra forma de agregar un elemento al arreglo
console.log(array2.length);

array2[array2.length] = "ASTON MARTIN";

console.log(array2);

array2[7] = "CHEVROLET";
console.log(array2);

//preguntar si es un arreglo
console.log(typeof array2); //este no sirve

console.log(Array.isArray(array2)); //forma 1

console.log(array2 instanceof Array); //forma 2
