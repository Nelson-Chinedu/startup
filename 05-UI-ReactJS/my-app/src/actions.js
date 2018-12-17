/*
 * tipos de acciones
 */

export const ADD_MOVIE = 'ADD_MOVIE'
export const EDIT_MOVIE = 'EDIT_MOVIE'
export const DELETE_MOVIE = 'DELETE_MOVIE'


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