import {ADD_MOVIE,EDIT_MOVIE,DELETE_MOVIE,FILTER_MOVIE} from './Constantes.js';

/*
 * creadores de acciones
 */

export function addMovie(movie) {
  return { 
      type: ADD_MOVIE,
      movie
      }
}

export function editMovie(data) {
  return { 
      type: EDIT_MOVIE,
      data 
      }
}

export function deleteMovie(movie) {
  return { 
      type: DELETE_MOVIE, 
      movie 
      }
}

export function filterMovies(text) {
  return { 
      type: FILTER_MOVIE, 
      text 
      }
}