//destructuring arreglo

const numeros = [12, 1, 3, 4, 6, 5];

const [, , tercero] = numeros;
// const [primero, ,tercero] = numeros;
//const [primero, ...tercero] = numeros;  esto hace un arreglo con el resto del los elementos

console.log(tercero);
