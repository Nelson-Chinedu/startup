const michael = new Actor ('Michael J. Fox', 57);

const castHateful = [
	new Actor ('Samuel L. Jackson', 69),
	new Actor ('Kurt Russell', 67),
];

const peli = new Movie('La vida de un estudiante',2018,240);

const log1 = new Logger();
peli.on('play', log1.log); // agrego como listener a log1 cuando ejecuto play()
peli.on('pause', log1.log);// agrego como listener a log1 cuando ejecuto pause()
peli.on('resume', log1.log);// agrego como listener a log1 cuando ejecuto resume()

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
}

Object.assign(Movie.prototype, social);

peli.share("Nuria Suarez coach");
peli.like("Fernando Ochoteco");
peli.like("Luciano Elissondo");
peli.like("Roberto Marcos");
