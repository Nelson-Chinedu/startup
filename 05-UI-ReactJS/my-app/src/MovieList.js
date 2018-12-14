import React from 'react';
import MovieEditer from './MovieEditer.js';

class MovieList extends React.Component { // Componente stateless
    constructor(){
        super();
        this.state = {
            editar: false,
            name: '',
            author: ''
        }
        this.mostrar=this.mostrar.bind( this );
        this.switchEdit=this.switchEdit.bind(this);
        this.switchWatch=this.switchWatch.bind(this);
        this.ejecutarEdicion=this.ejecutarEdicion.bind(this);
        
    }

    

    mostrar(){
            if (this.state.editar===false){
            let items = this.props.movies;
            return( 
                <div> Peliculas disponibles:
                    <ul>
                            { items.map(item => <Elemento switchEdit={ this.switchEdit } key={ item.name } items={ item } />) } 
                    </ul>
                </div>
            )
        }
        else
            {
                
                return(
                    <div>
                        <p>zona de edicion</p>
                        <MovieEditer
                                    name={ this.state.name }
                                    author={ this.state.author }
                                    onSubmit={ this.ejecutarEdicion } /> 
                        
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
                                { <button 
                                        onClick={props.switchEdit}
                                        name={props.items.name}
                                        author={props.items.author} > Editar </button> }
                                        {console.log(props.items.author)}
                             </li>



export default MovieList;