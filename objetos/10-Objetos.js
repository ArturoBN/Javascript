const electronico = {
  color: "negro",
  nombre: "Monitor 20 pulgadas",
  precio: 300,
  disponible: true,
};

//añadir nuevas propiedades a un objeto
electronico.imagen = "imagenMonitor.jpg";

//eliminar propiedades de un objeto
delete electronico.color;

//como acceder al los valores de un objeto y asignarlos a una variable
/*MANERA 1*/
const nombre = electronico.nombre;
console.log(nombre);

/*MANERA 2 */ //con destructuring creas la variable y extraes el valor al mismo tiempo
const { precio, disponible } = electronico;
console.log(precio);
console.log(disponible);

//crear objetos a dentro de un objeto

const auto = {
  color: "morado",
  marca: "bmw",
  precio: 500000,
  tamaño: "XL",
  equipamiento: {
    bocinas: "Sony",
    clima: true,
    asientos: {
      numero: 4,
      material: "piel",
    },
    traccion: "4x4",
  },
};

console.log(auto.equipamiento.asientos.material);

//destructuring para objetos anidados

const {
  marca,
  equipamiento: {
    asientos: { numero },
  },
} = auto;
console.log(numero);
