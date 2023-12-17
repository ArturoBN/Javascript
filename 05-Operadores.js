let a = 3;
let b = 2;

let z = a + b;

console.log("OPERACIONES");

console.log("resultado de la suma:" + z);

z = a - b;

console.log("resultado de la resta:" + z);

z = a * b;

console.log("resultado de la multiplicacion:" + z);

z = a / b;

console.log("resultado de la división:" + z);

z = a % b;

console.log("resultado de la operacion modulo:" + z);

z = a ** b;

console.log("resultado del operador exponente:" + z);

console.log("INCREMENTOS Y DECREMENTOS");

console.log("pre-incremento (el operador ++ antes de la variable)");
z = ++a;

console.log(a);
console.log(z);

console.log("pos-incremento (el operador ++ despues de la variable)");
z = b++;

console.log(b);
console.log(z);

console.log("pre-decremento");
z = --a;
console.log(a);
console.log(z);

console.log("pos-decremento");
z = b--;
console.log(b);
console.log(z);

console.log("ORDEN DE OPERACIONES");

(a = 3), (b = 2), (c = 1), (d = 4);

z = a * b + c / d;
console.log(z);

z = c + a * b;
console.log(z);

z = c + (a * b) / d;
console.log(z);

console.log("OPERADORES DE ASIGNACION");
a = 1;
console.log("Operador de asignacion básico =");
console.log("a = 1");

console.log("Operador de asignacion compuesto += y -=");
console.log("a += 3");
a += 3;
console.log(a);

console.log("a -= 2");
a -= 2;
console.log(a);

console.log("OPERADORES DE COMPARACION");

(a = 3), (b = 2), (c = "3");
console.log("(a = 3), (b = 2), (c = '3')");
console.log("operador  == para saber si 'a' es igual a 'b'");
console.log("z = a == b");
z = a == b;
console.log(z);

console.log(
  "operador de comparacion estricta === para saber\n si a es igual b revisando el valor y el tipo"
);

console.log("z = a === c");
z = a === c;
console.log(z);

console.log("operador diferente de != revisa el valor sin importar el tipo");
console.log("z = a != c");
z = a != c;
console.log(z);

console.log("operador diferente de !== revisa el valor y tambien el tipo");
console.log("z = a !== c");
z = a !== c;
console.log(z);

(a = 3), (b = 3), (c = "3");
console.log("mayor que <");
console.log("z = a < b");
z = a < b;
console.log(z);

console.log("menor igual que <=");
console.log("z = a <= b");
z = a <= b;
console.log(z);

console.log("mayor que >");
console.log("z = a > b");
z = a > b;
console.log(z);

console.log("mayor igual que >=");
console.log("z = a >= b");
z = a >= b;
console.log(z);
