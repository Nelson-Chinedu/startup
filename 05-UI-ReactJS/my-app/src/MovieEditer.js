import React from 'react';

import { editMovie } from './Actions.js';
import { connect } from 'react-redux';
class MovieEditer extends React.Component{

    constructor(){
        
        super();

        this.cancelar=this.cancelar.bind( this );
        this.editar=this.editar.bind( this );

        this.refName = React.createRef();
        this.refAuthor = React.createRef();
        
    }

    editar(event){
        
        event.preventDefault();

        let oldMovie = {
            name: this.props.name,
            author: this.props.author
        }

        let newMovie = {
            name: this.refName.current.value,
            author: this.refAuthor.current.value,
        }

        if (newMovie.name==='')
            newMovie.name=oldMovie.name;
        if (newMovie.author==='')
            newMovie.author=oldMovie.author;

        let data = {oldMovie,newMovie}

        this.props.onEdit(data);

        this.props.onSubmit();
        
    }

    cancelar(event){

        event.preventDefault();

        this.props.cancelar();
    }

    render(){
        return(
            <form>
                 <label>
                        Name:
                        <input type="text" defaultValue={ this.props.name } ref={ this.refName } />
                </label>
                <label>
                        Author:
                         <input type="text" defaultValue={ this.props.author } ref={ this.refAuthor } />
                 </label>
              <button type="submit" value="Submit" onClick={ this.editar } > atr submit </button>
              <button type="submit" value="Submit" onClick={ this.cancelar } > cancelar </button>
            </form>
        )}
}

const mapStateToProps = (state) => {
  return {
     movies: state.movieReducer.movies
    };
  };

  const mapDispatchToProps = (dispatch) => {
      return {
        onEdit: (data) => {
          dispatch(editMovie(data))
        }
      };
  }; 

export default connect (
     mapStateToProps,
     mapDispatchToProps
   )(MovieEditer); 