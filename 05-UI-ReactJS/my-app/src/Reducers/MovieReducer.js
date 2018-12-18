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
        // let array = this.state.movies
   
        // if (nombreFinal===''){
        //     nombreFinal=nombreInicial;
        // }

        // if (authorFinal===''){
        //     authorFinal=authorInicial;
        // }

        // for(var i=0;i<array.length;i++){
        //     if (array[i].name===nombreInicial){
        //         array[i].name=nombreFinal;
        //         array[i].author=authorFinal;
        //         break;
        //     }
        // }
        return Object.assign({}, state, {
            
        // ACA DEBERIA EDITAR UNA PELICULA
      })
      
    case DELETE_MOVIE:
        const result = state.movies.filter(item => item.name!==action.movie.name && item.author!==action.movie.author)
        return {
        // ACA DEBERIA ELIMINAR UNA PELICULA
        movies:result
      }
    default:
      return state
  }
}

export default movieReducer;