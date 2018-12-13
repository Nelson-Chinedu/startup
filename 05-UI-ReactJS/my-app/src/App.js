import React from 'react';
import MovieCreator from './MovieCreator.js';
import MovieList from './MovieList.js';
import Filter from './Filter.js';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    const movieList = [{name:'The Terminator',author:'Rober'},{name:'Back to the future',author:'Lucho'}];

    this.state = {
        movies: movieList,
        filteredMovies: movieList
    }

    this.addMovie=this.addMovie.bind(this);
    this.efectuarFiltro=this.efectuarFiltro.bind(this);
  }

 
  addMovie (movie) {
    if ((movie.name==='') || (movie.author==='')) // evito poner contenido vacio
      return;
    this.setState({
        movies: [...this.state.movies, movie],
        filteredMovies: [...this.state.filteredMovies, movie]
      })
      

  }

  efectuarFiltro(keyWord){

    const myItems = this.state.movies

    const newArray = myItems.filter(item => item.name.includes(keyWord) || item.author.includes(keyWord))

    this.setState({
        filteredMovies: newArray
      })
  }

  render() {
    return (
      <div id="container">
          <MovieCreator onAddMovie={ this.addMovie } />
          <MovieList movies = {this.state.filteredMovies} />
          <hr />
          <Filter onFiltered = {this.efectuarFiltro} />
      </div>
    )
  }
}



export default App;
