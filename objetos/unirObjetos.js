const electronico = {
  color: "negro",
  nombre: "Monitor 20 pulgadas",
  precio: 300,
  disponible: true,
};

const medidas = {
  peso: "1kg",
  medida: "1m",
};

//primera forma de unir dos objetos
const resultado = Object.assign(electronico, medidas);
console.log(resultado);

//segunda forma (Spread Operator)
const resultado2 = { ...electronico, ...medidas };
