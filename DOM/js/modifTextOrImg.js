//manera de modificar un elemento en el DOM

const encabezado = document.querySelector('.contenido-hero h1').textContent
console.log(encabezado);

//acceder al texto de un elemento seleccionado del DOM
// console.log(encabezado.innerText); //si tiene en css la propiedad visibility como hidden no encontrara
// console.log(encabezado.textContent);//este lo encontrara aunque tenga la propiedad hidden
// console.log(encabezado.innerHTML);// traer el bloque de html junto con el texto




//modificamos el encabezado
const nuevoHead = 'Nuevo header'
document.querySelector('.contenido-hero h1').textContent = nuevoHead

//modificar una imagen
const imagen = document.querySelector('.card img');
imagen.src = 'img/hacer2.jpg'
