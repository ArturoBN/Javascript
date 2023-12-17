//SENTENCIA IF ELSE
let condicion = false;

if (condicion) {
  console.log("Condición verdadera");
} else {
  console.log("Condición falsa");
}

let numero = 11;

if (numero == 1) {
  console.log("Numero 1");
} else if (numero == 2) {
  console.log("Numero 2");
} else if (numero == 3) {
  console.log("Numero 3");
} else if (numero == 4) {
  console.log("Numero 4");
} else {
  console.log("Numero no encontrado");
}

console.log("CALCULAR HORA");

/*
6am-11am -Buenos Días
12pm-18pm -Buenas Tardes
19pm-24pm -Buenas Noches
0am-6am -Durmiendo
*/

let hora = 6;
let mensaje;

if (
  (hora = 6 || hora == 7 || hora == 8 || hora == 9 || hora == 10 || hora == 11)
) {
  mensaje = "Buenos Días";
} else if (
  (hora =
    12 ||
    hora == 13 ||
    hora == 14 ||
    hora == 15 ||
    hora == 16 ||
    hora == 17 ||
    hora == 18)
) {
  mensaje = "Buenas Tardes";
} else if (
  (hora =
    19 || hora == 20 || hora == 21 || hora == 22 || hora == 23 || hora == 24)
) {
  mensaje = "Buenas Noches";
} else if (
  (hora = 0 || hora == 1 || hora == 2 || hora == 3 || hora == 4 || hora == 5)
) {
  mensaje = "Durmiendo";
}

console.log(mensaje);

//SENTENCIA SWITCH
console.log("retornar numero con switch");
let num = 3;

let numeroTexto = "Valor desconocido";

switch (num) {
  case 1:
    numeroTexto = "Numero 1";

    break;

  case 2:
    numeroTexto = "Numero 2";

    break;

  case 3:
    numeroTexto = "Numero 3";

    break;

  case 4:
    numeroTexto = "Numero 4";

    break;

  default:
    numeroTexto = "Caso no encontrado";

    break;
}

console.log(numeroTexto);

console.log("retornar estación con switch");
//la sentencia switch utiliza comparación estricta

let mes = 13;
let estación;

switch (mes) {
  case 1:
  case 2:
  case 12:
    estación = "Invierno";
    break;
  case 3:
  case 4:
  case 5:
    estación = "Primavera";
    break;
  case 6:
  case 7:
  case 8:
    estación = "Verano";
    break;
  case 9:
  case 10:
  case 11:
    estación = "Otoño";
    break;
  default:
    estación = "No se encontró estación";
}

console.log(estación);

//Detener un if con una funcion 

const autenticado = true;

if(autenticado){
  console.log('El usuario está autenticado');
}


const puntaje = 500;

 // PARA USAR EL RETURN EN UN IF, ESTE IF DEBE ESTAR ADENTRO DE UNA FUNCION
function revisarPuntaje(){
if(puntaje>300){
  console.log('Buen Puntaje');
  return   
} else if (puntaje>400){
  console.log('Excelente');
  return
}
}

revisarPuntaje()