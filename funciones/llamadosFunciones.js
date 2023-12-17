
iniciarApp()

function iniciarApp(){ //                                   Esta funcion inicia la app y llama otra funcion llamada 'segundaF'
    console.log('iniciando app..');
    segundaF();
}

function segundaF(){//                                      Esta funcion a su vez manda a llamar 'userAuth'
    console.log('desde la segunda funcion');
    userAuth('Arturo');
}

function userAuth(Usuario){
    console.log('Autenticando Usuario... espere...');
    console.log(`Usuario autenticado exitosamente, ${Usuario} Bienvenido`);
}