
const reproductor = {
    reproducir: id => console.log(`Reproduciendo cancion ${id}`),
    pausar: () => console.log(`Pausando...`),
    borrar:  id => console.log(`Borrando Cancion.... ${id}`),
    crearPlayList: nombre => console.log(`Playlist ${nombre} creada`),
    reproducirPlayList: nombre => console.log(`Reproduciendo Play List: ${nombre}`),
    //set es para agregar valores
    set nuevaCancion(cancion) { this.cancion = cancion;
    console.log(`Añadiendo ${this.cancion}`);},
    //get es para obtener los valores
    get obtenerCancion(){console.log(`${this.cancion}`);}
}

reproductor.nuevaCancion = 'Un Coco'
reproductor.obtenerCancion;

reproductor.reproducir(30)
reproductor.pausar()
reproductor.borrar(40)
reproductor.crearPlayList('Sexo desenfrenado')
reproductor.reproducirPlayList('Sexo desenfrenado')