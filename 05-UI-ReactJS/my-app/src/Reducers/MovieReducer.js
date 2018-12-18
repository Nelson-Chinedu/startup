import {ADD_MOVIE, EDIT_MOVIE, DELETE_MOVIE} from '../Constantes.js';


const initialState = {
  movies: [
    {
        name:'The Terminator',
        author:'Rober'
    },
    {
        name:'Back to the future',
        author:'Lucho'
    },
    {
        name:'The Simpsons',
        author:'Matt Groening'
    },
    {
        name:'Futurama',
        author:'Matt Groening'
    }
  ]
}

function movieReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_MOVIE:
      for(let i=0;i<state.movies.length;i++){
        
        if(state.movies[i].name===action.movie.name){
          alert("Ese titulo ya existe!")
          return {movies:state.movies}
        }
      }
      return {
        movies: [
            ...state.movies,
            {
                name:action.movie.name,
                author:action.movie.author
            }
        ]
      }

    case EDIT_MOVIE:
        let array = state.movies
   
        for(let i=0;i<array.length;i++){
            if (array[i].name===action.data.oldMovie.name && array[i].author===action.data.oldMovie.author){
                array[i].name=action.data.newMovie.name;
                array[i].author=action.data.newMovie.author;
                break;
            }
        }
        return {
            movies:array
      }
      
    case DELETE_MOVIE:
        const result = state.movies.filter(item => item.name!==action.movie.name || item.author!==action.movie.author)
        
        return {
          movies:result
      }
    default:
      return state
  }
}

export default movieReducer;