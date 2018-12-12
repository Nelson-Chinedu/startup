class Movie extends EventEmitter {
  constructor(name, year, duration) {
  	super();
    this.title = name;
    this.year = year;
    this.duration = duration; // en minutos
    this.actualCast = [];
  }

  addCast(actores) {
  	this.actualCast = this.actualCast.concat(actores); // "concat" funciona con string individual y/o array, indistintamente
  	for(var i = 0; i < this.actualCast.length ; i++)
  		alert(this.actualCast[i].name);
  }

  toString() {
  	return "Title: " + this.title + ", year: " + this.year + ", duration: " + this.duration + " minutes.";
  }

  play() {
  		this.emit('play', 'play'); 
  }

  pause() {
  		this.emit('pause', 'pause');
  }

  resume() {
  		this.emit('resume', 'resume');
  }
// podria dejar el segundo parametro con "this" y usaria en el log los atributos de la pelicula
}

export default Movie;