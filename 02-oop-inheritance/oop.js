/*Creating classes

Create a Movie Class with the following structure

Movie
- title 
- year 
- duration
+ constructor(name, year, duration) 
+ play() 
+ pause()
+ resume()

Instantiate some of your favorite movies and play with them in the console.*/

class Movie extends EventEmitter {
  constructor(name, year, duration) {
    this.title = name;
    this.year = year;
    this.duration = duration; // en minutos
  }

  toString(){
  	return "Title: " + this.title + ", year: " + this.year + ", duration: " + this.duration + " minutes.";
  }

  play() {

  }

  pause() {

  }

  resume() {

  }

}

const pelicula1 = new Movie("The Terminator",1984,107);
const pelicula2 = new Movie("Back to the Future",1985,116);
const pelicula3 = new Movie("The Hateful Eight",2015,168);

function mostrarPeliculas(){
	console.log(pelicula1.toString());
	console.log(pelicula2.toString());
	console.log(pelicula3.toString());
}

/*
Create an Actor class with the following structure

Actor
- name 
- age
+ constructor(name, age)*/


class Actor {
	constructor(name,age){
		this.name=name;
		this.age=age;
	}
}

/*Create a class called EventEmitter with the following structure

EventEmitter
+ constructor()
+ on(eventName, callback) 
+ emit(eventName)
+ off(eventName, callback)
The on method will receive a eventName and a callback or listener that will be executed each time a that event is triggered.

The emit method will trigger events to be consumed by other functions or objects.

The off method will delete previously defined event listeners.*/

class EventEmitter {
	constructor(){
    	this.events = {}; // creo un array de eventos
	}

	on(eventName, callback){
		if( !this.events[eventName] ) { // si nunca se registro el evento eventName,
	    	this.events[eventName] = []; // entonces creo una "pila" que lleve un registro (la pila esta en un lugar del array)
	  	}
	    
	  	this.events[eventName].push(callback); // indistintamente si habia pila o no, agrego el callback del evento

	  	return () => { // destinado a ser un closure
    		this.events[eventName] = this.events[eventName].filter(eventFn => callback !== eventFn);
    		//crea una nueva pila del evento, identica salvo la funcion a eliminar, y la pisa donde estaba la anterior
  }
	}

	emit(eventName, data){
		const event = this.events[eventName];
 		if (event) { // si esta el evento en el array,
    		event.forEach(fn => { // para cada callback asignado al evento,
       			fn.call(null, data); // los ejecuto todos (null y data es para ejecutar funciones genericas)
     		});
   		}
	}

	off(eventName, callback){
		let unsubscribe = emitter.on(eventName, callback => console.log(callback)); // capturo el closure

		unsubscribe(); // ejecuto el closure
	}

}

/*Make the Movie class a subclass of EventEmitter and use the inherited
methods to publish play, pause and resume events when the related method is called.*/