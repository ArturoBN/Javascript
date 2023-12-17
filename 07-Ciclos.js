//CICLO WHILE
console.log("CICLO WHILE");

let count1 = 0;

while (count1 <= 3) {
  console.log(count1);
  count1++;
}

console.log("Ciclo terminado");

//CICLO DO WHILE
//este se ejecuta al menos una vez
console.log("CICLO DO WHILE");

let count2 = 0;
do {
  console.log(count2);
  count2++;
} while (count2 <= 3);

console.log("Ciclo terminado");

//CICLO FOR
console.log("CICLO FOR");
for (count3 = 0; count3 <= 3; count3++) {
  console.log(count3);
}

console.log("EJERCICIO FOR");
//imprimir todos los numeros pares del 1 al 10
for (i = 0; i <= 10; i++) {
  if (i % 2 == 0) {
    console.log(i);
    break;
  }
}

console.log("EJERCICIO FOR CON LA PALABRA CONTINUE");
inicio: for (let a = 0; a <= 10; a++) {
  if (a % 2 !== 0) {
    continue inicio; //ir a la siguiente iteración
  } else {
    console.log(a);
  }
}
