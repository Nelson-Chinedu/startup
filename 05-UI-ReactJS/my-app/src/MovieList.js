import React from 'react';
import MovieEditer from './MovieEditer.js';
import Filter from './Filter.js';

import { deleteMovie } from './Actions.js';
import { connect } from 'react-redux';

class MovieList extends React.Component { // Componente stateless
    constructor(){
        super();
        this.state = {
            name:'',
            author:'',
            editar: false
        }
      
        this.onClickDelete=this.onClickDelete.bind(this);
        this.switchWatch=this.switchWatch.bind(this);
        this.switchEdit=this.switchEdit.bind(this);
    }

    onClickDelete(event){
        event.preventDefault();

        let movie = {
            name: event.target.attributes.name.value,
            author: event.target.attributes.author.value
        }
        
        this.props.onDeleteMovie(movie);

    }

    efectuarFiltro(keyWord){
        this.props.onFiltered(keyWord);
    }

    switchWatch(){
        
        this.setState({
            editar:false
        })
    }

    switchEdit(event){
        console.log("Nombre: " + event.target.attributes.name.value + ", autor: " + event.target.attributes.author.value)
        
        this.setState({
            name: event.target.attributes.name.value,
            author: event.target.attributes.author.value,
            editar:true
        })
    }

    mostrar(){
            if (this.state.editar===false){
            let items = this.props.movies;

            return( 
                <div> Peliculas disponibles:
                    <ul>
                            { items.map(item => <Elemento onClickDelete={this.onClickDelete} switchEdit={ this.switchEdit } key={ item.name } items={ item } />) } 
                    </ul>
                    <Filter onFiltered={ this.efectuarFiltro } />
                </div>
            )
        }
        else
            {
                
                return(
                    <div>
                        <p>Zona de edicion</p>
                        <MovieEditer
                                    name={ this.state.name }
                                    author={ this.state.author }
                                    onSubmit={ this.switchWatch }
                                    cancelar={ this.switchWatch } /> 
                        
                    </div>

                )}
    }


    render(){
        return(
            this.mostrar()
        )
    }
}




const Elemento = (props) => <li>
                                { props.items.name + " " }
                                { "- " + props.items.author + " "}

                                { <button // boton de editar
                                        onClick={props.switchEdit}
                                        name={props.items.name}
                                        author={props.items.author} > Editar </button> }

                                { <button // boton de eliminar
                                        onClick={props.onClickDelete}
                                        name={props.items.name}
                                        author={props.items.author} > Eliminar </button> }
                                
                             </li>



const mapStateToProps = (state) => { // mapea el estado de redux al componente este, como props
  console.log(state)
  return {
     movies: state.movieReducer.movies
    };
  };

  const mapDispatchToProps = (dispatch) => {
      return {
        onDeleteMovie: (movie) => {
          dispatch(deleteMovie(movie))
        }
      };
  }; 

export default connect (
     mapStateToProps,
     mapDispatchToProps
   )(MovieList); 
