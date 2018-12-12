import React from 'react';
import MovieCreator from './MovieCreator.js';
import Movie from './Movie.js';
import Filter from './Filter.js';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
        movies:[{name:'The Terminator',author:'Rober'},{name:'Back to the future',author:'Lucho'}]
    }
    this.addMovie=this.addMovie.bind(this);
    this.show=this.show.bind(this);
    this.efectuarFiltro=this.efectuarFiltro.bind(this);
  }

 
  addMovie (movie) {
    if ((movie.name==='') || (movie.author==='')) // evito poner contenido vacio
      return;
    this.setState({
        movies: [...this.state.movies, movie]
      })

  }

  efectuarFiltro(keyWord){

    const myItems = this.state.movies

    const newArray = myItems.filter(item => item.name.includes(keyWord) || item.author.includes(keyWord))

    this.setState({
        movies: newArray
      })
  }

  show () {
    for (var i=0;i<this.state.movies.length;i++)
      console.log (this.state.movies[i].name);
  }

  

  render() {
    return (
      <div id="container">
          <MovieCreator onAddMovie = {this.addMovie} />
          <Movie movies = {this.state.movies} />
          <hr />
          <Filter onFiltered = {this.efectuarFiltro} />
      </div>
    )
  }
}



export default App;
