import React from 'react';
import MovieEditer from './MovieEditer.js';
import { deleteMovie } from './Actions.js';
import { connect } from 'react-redux';

class MovieList extends React.Component {
    constructor(){
        super();
        this.state = {
            name:'',
            author:'',
            editar: false,
            filtro:''
        }
      
        this.onClickDelete=this.onClickDelete.bind(this);
        this.switchWatch=this.switchWatch.bind(this);
        this.switchEdit=this.switchEdit.bind(this);
        this.filtrar=this.filtrar.bind(this);
        
        this.refInput=React.createRef();
    }

    filtrar(){
        this.setState({
                filtro:this.refInput.current.value
            })
    }

    onClickDelete(event){
        event.preventDefault();

        let movie = {
            name: event.target.attributes.name.value,
            author: event.target.attributes.author.value
        }
        
        this.props.onDeleteMovie(movie);

    }

    switchWatch(){   
        this.setState({
            editar:false
        })
    }

    switchEdit(event){
        this.setState({
            name: event.target.attributes.name.value,
            author: event.target.attributes.author.value,
            editar:true
        })
    }

    mostrar(){
            if (this.state.editar===false){

                let items = this.props.movies
                let newArray = items.filter(
                    item => item.name.toLowerCase().includes(this.state.filtro.toLowerCase()) || item.author.toLowerCase().includes(this.state.filtro.toLowerCase()))
    
                return( 
                    <div> Peliculas disponibles:
                        <ul>
                                { newArray.map(item => <Elemento onClickDelete={this.onClickDelete} switchEdit={ this.switchEdit } key={ item.name } items={ item } />) } 
                        </ul>
                        <input onChange={ this.filtrar } placeholder="Ingresa palabras clave aqui!" ref={this.refInput} />
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
