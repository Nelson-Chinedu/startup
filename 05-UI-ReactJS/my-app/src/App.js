import React from 'react';
import MovieCreator from './MovieCreator.js';
import Movie from './Movie.js';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
        movies:[{name:'The Terminator',author:'Rober'},{name:'Volver al futuro',author:'Lucho'}]
    }
    this.addMovie=this.addMovie.bind(this);
    this.show=this.show.bind(this);
  }

 
  addMovie (movie) {
    if ((movie.name==='') || (movie.author==='')) // evito poner contenido incompleto
      return;
    this.setState({
        movies: [...this.state.movies, movie]
      })

  }

  show (){
    for (var i=0;i<this.state.movies.length;i++)
      console.log (this.state.movies[i].name);
  }

  

  render(){
    return (
      <div id="container">
          <MovieCreator onAddMovie = {this.addMovie} />
          <Movie movies = {this.state.movies} />
          <hr />
          
      </div>
    )
  }
}



export default App;
