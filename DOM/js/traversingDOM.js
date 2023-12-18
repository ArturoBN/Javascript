//en js todo esta conectado al DOM

let navegacion = document.querySelector('.navegacion');

console.log(navegacion.lastElementChild ); //puedes ir al ultimo elemento de tu query seleccionado
// console.log(navegacion.childNodes);//trae espacios en blanco tambien
// console.log(navegacion.children);




//  console.log(navegacion.children[1].nodeName); //en lista elementos que solo sean reales
// console.log(navegacion.children[1].nodeType);
  

let card = document.querySelector('.card')

//TRAVESING DEL PADRE AL HIJO
// card.children[1].children[1].textContent = 'Nuevo Head'
// card.children[0].scr= '/img/hacer2.jpg'
// console.log(card.children[0]);

//TRAVERSIGN DEL HIJO AL PADRE
// console.log(card.parentElement.parentElement); //recorre del hijo al padre 

// console.log(card.nextElementSibling.nextElementSibling); //manera de ir al siguiente elemento

const ultimoCard = document.querySelector('.card:nth-child(4)')
console.log(ultimoCard.previousElementSibling);  //manera de regresarte al elemento anterior

