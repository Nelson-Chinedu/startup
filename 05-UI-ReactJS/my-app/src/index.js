
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './Reducers' // automaticamente busca un index si no especifico el file



const store = createStore(rootReducer)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

/*const mapStateToProps = (state) => {
  return {
     movies: getALGO (
        state.movies
      )
    };
  };*/

  /*const mapDispatchToProps = (dispatch) => {
      return {
        onClick: (ID_ALGO) => {
          dispatch({
            type:'ADD_MOVIE'
            ID_ALGO
          })
        }
      };
  }; */

  /*const { connect } = ReactRedux;
   const ConstanteAlgo = connect (
     mapStateToProps,
     mapDispatchToProps
   )(TodoList); */