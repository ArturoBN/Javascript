
function sumar(a, b){
    return(a+b)
}

//cuando quieres trabajar con los datos que genere la función se usa la palabra return
// pero debes de guardar los datos retornados en una variable

const resultado = sumar (2,1);
console.log(resultado);


//ejemplo avanzado

let total = 0;                        //sobre esta variable se trabajara

function addToCart(precio){
return total += precio              // esta funcion retorna el total mas el precio que recibe como parametro 
}                                   // la funcion addToCart

function calculateImport(total){   //esta funcion toma el total sumado y lo multiplica para retornar el impuesto
    return total * 1.15;
}


total = addToCart(100)
total = addToCart(100)

const totalPay= calculateImport(total)

console.log(`El total a pagar es de: ${totalPay}`);
console.log(total);