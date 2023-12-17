// alert("hubo un error");

// prompt("¿cual es tu edad?");

// parseInt("20");

//Diferencia entre función y método
const numero1 = 20;
const numero2 = "20";

console.log(parseInt(numero2)); // ==> esto es una función

console.log(numero1.toString()); //==>esto es un método

//funciones que toman parametros.

function saludar(nombre, apellido) {   //nombre y apellido son los parametros de la funcións
  console.log(`Hola ${nombre} ${apellido}`);
}

saludar("Arturo", "Ballesteros"); //los valores que pasas a la funcion son los argumentos


//funciones con parametros por default en dado caso de que no se pase el parametro

function saludarDos(nombre = 'Desconocido', apellido = ',No tiene apellido'){
  console.log(`Hola ${nombre} ${apellido}` );
}

saludarDos()