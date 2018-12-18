import React from 'react';
import { addMovie } from './Actions.js';
import { connect } from 'react-redux';

class MovieCreator extends React.Component {
constructor() {

    super();

    this.state = {
        name:'',
        author:''
    }

    this.refName = React.createRef();
    this.refAuthor = React.createRef();
    
    this.onSubmit = this.onSubmit.bind(this);
}

onSubmit(event) {
    event.preventDefault();

    const movie = {
        name:this.refName.current.value,
        author:this.refAuthor.current.value
        }

    this.props.onAddMovie(movie);
    
}

    render() {
        return(
            <div>
                <input placeholder="Ingresa nombre de peli" ref={ this.refName } /> 

                <hr />

                <input placeholder="Ingresa el autor" ref={ this.refAuthor } />

                <br />
                <br />

                <button type="submit" onClick={ this.onSubmit } > Agregar! </button>

            </div>
            
        )
    }
}

const mapStateToProps = (state) => {
  return {
     movies: state.movieReducer.movies
    };
  };

  const mapDispatchToProps = (dispatch) => {
      return {
        onAddMovie: (movie) => {
          dispatch(addMovie(movie))
        }
      };
  }; 

export default connect (
     mapStateToProps,
     mapDispatchToProps
   )(MovieCreator); 