import React from 'react';
import MovieCreator from './MovieCreator.js';
import MovieList from './MovieList.js';
import Filter from './Filter.js';
import DeletedElement from './DeletedElement.js';

import './App.css';

class App extends React.Component {
  constructor() {
    super();
    const movieList = [{name:'The Terminator',author:'Rober'},
                       {name:'Back to the future',author:'Lucho'},
                       {name:'The Simpsons',author:'Matt'},
                       {name:'Futurama',author:'Matt'}];

    this.state = {
        movies: movieList,
        filteredMovies: movieList
    }

    this.addMovie=this.addMovie.bind(this);
    this.efectuarFiltro=this.efectuarFiltro.bind(this);
    this.deleteMovie=this.deleteMovie.bind(this);
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
    let myItems = this.state.movies
    let newArray = myItems.filter(
      item => item.name.toLowerCase().includes(keyWord.toLowerCase()) || item.author.toLowerCase().includes(keyWord.toLowerCase())
      )

    this.setState({
        filteredMovies: newArray
      })
  }

  deleteMovie(nombre) {

    var array = [];
    for (var i=0;i<this.state.movies.length;i++){
      if (this.state.movies[i].name!==nombre)
        array.push(this.state.movies[i]);
    }

    this.setState({
      movies:array,
      filteredMovies:array
    })  
  }

 
  render() {
    return (
      <div id="container">
          <MovieCreator onAddMovie={ this.addMovie } />
          <MovieList movies={ this.state.filteredMovies } />
          <hr />
          <Filter onFiltered={ this.efectuarFiltro } />
          <hr />
          <hr />
          
      </div>
    )
  }
}

// <DeletedElement onDeleteMovie={ this.deleteMovie } />

export default App;

/*import React from 'react';
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

    let myItems = this.state.movies

    let newArray = myItems.filter(item => item.name.includes(keyWord) || item.author.includes(keyWord))

    this.setState({
        filteredMovies: newArray
      })
  }

  render() {
    return (
      <div id="container">
          <MovieCreator onAddMovie={ this.addMovie } />
          <MovieList movies={ this.state.filteredMovies } />
          <hr />
          <Filter onFiltered={ this.efectuarFiltro } />
          
      </div>
    )
  }
}



export default App;

*/ 