//Declaración tradicional
const aprendiendo = function(aprendiendo){
    console.log(`Aprendiendo ${aprendiendo}`);
}
aprendiendo('Javasscript')

//Declaración usando Arrow Function 
//la diferencia es que la palabra function pasa a ser '=>'
const aprendiendo2 = () => 'Aprendiendo Javascript'; //si solo tienes una linea se quitan las llaves y se da por implicito el return
console.log(aprendiendo2());

//Pasarle parametros a una Arrow Function 
