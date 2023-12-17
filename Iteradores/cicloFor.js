//codigo se ejecuta hasta que una condicion se cumpla o deje de cumplir

for(let i = 0; i<2; i++){ //se ejecuta hasta que el codigo deja de cumplir una condicion
console.log(`Numero: ${i}`);
}  

for(let ind = 0; ind<=2; ind++){
    if(ind % 2 == 0){
console.log(`Es par ${ind}`);
    }else{
        console.log(`Es non ${ind}`);
    }
}

//Recorrer arreglo
const carrito =[
    {nombre:'Monitor 27 pulgadas', precio:500 },
    {nombre:'Television', precio:100 },
    {nombre:'Tablet', precio: 200 },
    {nombre:'Audifonos', precio: 300, descuento:'este producto tiene descuento' },
    {nombre:'Teclado', precio: 400 },
    {nombre:'Celular', precio: 700 }
]



for(let rec = 0; rec < carrito.length; rec++){
    let nameProduct = carrito[rec];
    console.log(`Este producto ${nameProduct.nombre} se encuentra en el indice ${rec}`);
} 


//break y continue
for(let count= 0; count<=10; count++){

    if(count == 5){
        console.log(`cinco`);
        break //detiene el for cuando encuentra el numero o valor
    }
    console.log(`${count}`);
}

for(let ct= 0; ct<=10; ct++){

    if(ct == 5){
        console.log(`cinco`);
        continue //continua el ciclo en lugar de romperlo
    }
    console.log(`${ct}`);
}

//ejemplo de continue y break
const carrito2 =[
    {nombre:'Monitor 27 pulgadas', precio:500 },
    {nombre:'Television', precio:100 },
    {nombre:'Tablet', precio: 200 },
    {nombre:'Audifonos', precio: 300, descuento:true },
    {nombre:'Teclado', precio: 400 },
    {nombre:'Celular', precio: 700 }
]

for(let index = 0; index < carrito2.length; index++){
    let carritoObj = carrito2[index];
    if(carritoObj.descuento == true){
        console.log(`Este producto: ${carritoObj.nombre}, tiene descuentos`);
        continue; // es para que no lo liste, lo modifica
    }
    console.log(carritoObj);
}