/*
Funciones que al utilizarse son igual que un metodo
es decir declaras un objeto y sus metodos, en cada metodo declaras una función
y al llamarse el metodo se ejecuta la función
*/

const reproductor = {
    reproducir: function(id) {
        console.log(`Reproduciendo cancion ${id}`);
    },
    pausar: function(){
        console.log(`Pausando...`);
    },
    borrar:  function(id){  
        console.log(`Borrando Cancion.... ${id}`);
        },
    crearPlayList: function(nombre){
        console.log(`Playlist ${nombre} creada`);
    },
    reproducirPlayList: function(nombre){
        console.log(`Reproduciendo Play List: ${nombre}`);
    }

}

reproductor.reproducir(30)
reproductor.pausar()
reproductor.borrar(40)
reproductor.crearPlayList('Sexo desenfrenado')
reproductor.reproducirPlayList('Sexo desenfrenado')