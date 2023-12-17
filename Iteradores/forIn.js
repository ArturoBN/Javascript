//hace lo mismo que forOf pero forIn itera sobre un objeto

const automovil={
    marca:'BMW',
    año: '2006',
    color:'azul'
}

for(let propiedad in automovil){
    console.log(`${automovil[propiedad]}`);
}

//hace lo mismo que for In pero es mas actualizado
for(let[llaveObj,valorllave] of Object.entries(automovil)){
    console.log(valorllave);
}