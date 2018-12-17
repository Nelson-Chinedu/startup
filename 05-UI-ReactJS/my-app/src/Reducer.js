import {ADD_MOVIE, EDIT_MOVIE, DELETE_MOVIE} from './actions';
import { combineReducers } from 'redux';

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

function todoApp(state = initialState, action) {
  switch (action.type) {
    case ADD_MOVIE:
      return Object.assign({}, state, {
        // ACA DEBERIA AGREGAR UNA PELICULA
        movies: [
            ...state.movies,
            {
                name:action.name,
                author:action.author
            }
        ]
      })

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
        return Object.assign({}, state, {
        // ACA DEBERIA ELIMINAR UNA PELICULA
        movies:state.movies.map(item => item.name!==action.name && item.author!==action.author)
      })
    default:
      return state
  }
}

export default todoApp;