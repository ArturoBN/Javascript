const carrito = [
    {
      nombre: "monitor 27 pulgadas",
      precio: 22,
    },
    {
      nombre: "bocina",
      precio: 10,
    },
    {
      nombre: "zapatos",
      precio: 12,
    },
  ]; 
  
  
  //foreach
  const arregloForEach = carrito.forEach( producto => console.log(`${producto.nombre} - Precio: ${producto.precio}`));
  
  //map crea un nuevo arreglo
  const arregloMap = carrito.map( producto =>  `${producto.nombre} - Precio: ${producto.precio}`);
  
  console.log(arregloMap);
  