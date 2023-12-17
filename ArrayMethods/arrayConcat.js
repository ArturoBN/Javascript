//concatena varios arreglos

const meses = [
    "Enero", "Febrero", "Marzo", "Abril",
    "Mayo", "Junio" ]

const meses2= ["Julio", "Agosto",
"Septiembre"]

const meses3 = ["Octubre", "Noviembre", "Diciembre"]


//.concat
const meses4 = meses.concat(meses2, meses3)

console.log(meses4);

//spread Operator

const resultado = [...meses, ... meses2, ...meses3]

console.log(resultado);