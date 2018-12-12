class Actor {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

}

export default Actor;
class EventEmitter {
  constructor() {
    this.events = {};
  }

  on(eventName, callback) {
    if (!this.events[eventName]) {
      this.events[eventName] = [];
    }

    this.events[eventName].push(callback);
    return () => {
      // closure
      this.events[eventName] = this.events[eventName].filter(eventFn => callback !== eventFn);
    };
  }

  emit(eventName, data) {
    const event = this.events[eventName];

    if (event) {
      event.forEach(fn => {
        fn.call(null, data);
      });
    }
  }

  off(eventName, callback) {
    let unsubscribe = emitter.on(eventName, callback => console.log(callback)); // capturo el closure

    unsubscribe(); // ejecuto el closure
  }

}

export default EventEmitter;
const michael = new Actor('Michael J. Fox', 57);
const castHateful = [new Actor('Samuel L. Jackson', 69), new Actor('Kurt Russell', 67)];
const peli = new Movie('La vida de un estudiante', 2018, 240);
const log1 = new Logger();
peli.on('play', log1.log); // agrego como listener a log1 cuando ejecuto play()

peli.on('pause', log1.log); // agrego como listener a log1 cuando ejecuto pause()

peli.on('resume', log1.log); // agrego como listener a log1 cuando ejecuto resume()

peli.play();
peli.pause();
peli.resume();
peli.pause();
let social = {
  like(friendName) {
    console.log(friendName + " likes.");
  },

  share(friendName) {
    console.log("Share " + friendName + ".");
  }

};
Object.assign(Movie.prototype, social);
peli.share("Nuria Suarez coach");
peli.like("Fernando Ochoteco");
peli.like("Luciano Elissondo");
peli.like("Roberto Marcos");
class Logger {
  constructor() {}

  log(info) {
    console.log('The ' + info + ' event has been emitted');
  }

}

export default Logger;
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

    for (var i = 0; i < this.actualCast.length; i++) alert(this.actualCast[i].name);
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
  } // podria dejar el segundo parametro con "this" y usaria en el log los atributos de la pelicula


}

export default Movie;
