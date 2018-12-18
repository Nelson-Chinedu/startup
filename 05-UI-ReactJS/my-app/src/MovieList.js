import React from 'react';
import MovieEditer from './MovieEditer.js';
import Filter from './Filter.js';

import { deleteMovie } from './Actions.js';
import { connect } from 'react-redux';

class MovieList extends React.Component { // Componente stateless
    constructor(){
        super();
        this.state = {
            editar: false,
            name: '',
            author: ''
        }
      
        this.onClickDelete=this.onClickDelete.bind(this);
        
    }

    onClickDelete(event){
        event.preventDefault();

        this.props.onDeleteMovie(event.target.attributes.name.value,event.target.attributes.author.value);
        //this.props.onDeleteMovie(e.target.attributes.name.value,e.target.attributes.author.value)
    }

    efectuarFiltro(keyWord){
        this.props.onFiltered(keyWord);
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
                                    onSubmit={ this.ejecutarEdicion }
                                    cancelar={ this.switchWatch } /> 
                        
                    </div>

                )}
    }

    ejecutarEdicion(nInicial,aInicial,nFinal,aFinal){
        this.props.edit(nInicial,aInicial,nFinal,aFinal)
        this.switchWatch();
    }

    switchWatch(){
        
        this.setState({
            editar:false
        })
    }

    switchEdit(e){
        console.log("Nombre: " + e.target.attributes.name.value + ", autor: " + e.target.attributes.author.value)
        this.setState({
            name:e.target.attributes.name.value ,
            author:e.target.attributes.author.value,
            editar:true
        })
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
