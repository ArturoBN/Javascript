const electronico = {
  color: "negro",
  nombre: "Monitor 20 pulgadas",
  precio: 300,
  disponible: true,
  mostrarInfo: function () {
    console.log(
      //palabra this se refiere a los valores que existen en el mismo objeto
      `El producto ${this.nombre}: tiene un precio de ${this.precio}`
    );
  },
};

electronico.mostrarInfo();

//palabra this se refiere a los valores que existen en el mismo objeto
