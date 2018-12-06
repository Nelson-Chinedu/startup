/*Creating classes

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

/*Make the Movie class a subclass of EventEmitter and use the inherited
methods to publish play, pause and resume events when the related method is called.*/


/*Create a Movie Class with the following structure

Movie
- title 
- year 
- duration
+ constructor(name, year, duration) 
+ play() 
+ pause()
+ resume()*/ 

class Movie extends EventEmitter {
  constructor(name, year, duration) {
  	super();
    this.title = name;
    this.year = year;
    this.duration = duration; // en minutos
    this.actualCast = [];
  }

  addCast(actores){
  	this.actualCast = this.actualCast.concat(actores); // "concat" funciona con string individual y/o array, indistintamente
  	for(var i=0;i<this.actualCast.length;i++)
  		alert(this.actualCast[i].name);
  }

  toString(){
  	return "Title: " + this.title + ", year: " + this.year + ", duration: " + this.duration + " minutes.";
  }

  play() {
  		this.emit('play','play');
  }

  pause() {
  		this.emit('pause','pause');
  }

  resume() {
  		this.emit('resume','resume');
  }

}

// Instantiate some of your favorite movies and play with them in the console.*/

const terminator = new Movie("The Terminator",1984,107);
const future = new Movie("Back to the Future",1985,116);
const hateful = new Movie("The Hateful Eight",2015,168);

function mostrarPeliculas(){
	console.log(terminator.toString());
	console.log(future.toString());
	console.log(hateful.toString());
}


/*Add a method to Movie as addCast(cast) that allows the addition
of one or more Actors to a movie. It must work if provided with
more than one Actor at the same time.

You should be able to do something like:...*/

const arnold = new Actor('Arnold Schwarzenegger', 50);
const actors = [
    new Actor('Paul Winfield', 50),
    new Actor('Michael Biehn', 50),
    new Actor('Linda Hamilton', 50)
];

const michael = new Actor ('Michael J. Fox', 57);

const castHateful= [
	new Actor ('Samuel L. Jackson', 69),
	new Actor ('Kurt Russell', 67),
];


const peli = new Movie('La vida de un estudiante',2018,240);

/*Create a Logger class with the following structure

Logger
+ constructor()
+ log(info)
After creating this class make an instance of Logger and make it listen to Movie's play event.

As example you must end with something like

const terminator = new Movie('Terminator I', 1985, 60);

...

terminator.play(); // output: The 'play' event has been emitted*/

class Logger {
	constructor(){

	}

	log(info){
		console.log('The ' + info + ' event has been emitted');
	}
}

const log1 = new Logger();
peli.on('play',log1.log);
peli.on('pause',log1.log);
peli.on('resume',log1.log);

peli.play();
peli.pause();
peli.resume();
peli.pause();