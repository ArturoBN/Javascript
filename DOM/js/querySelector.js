//es una forma mas actualizada de getElementById o getElementByClass


//query selector retorna maximo un elemento, si no existe no retorna nada
const card = document.querySelector('.card')
console.log(card);

//podemos tener selectores especificos como css
const info = document.querySelector('.premium .info')

//seleccionar el segundo card de hospedaje
const segundoCard = document.querySelector('section.hospedaje .card:nth-child(2)')
console.log(segundoCard);

const selectId = document.querySelector('#formulario')
console.log(selectId);

//seleccionar elementos HTML
const navegacion = document.querySelector('nav')
console.log(navegacion);
