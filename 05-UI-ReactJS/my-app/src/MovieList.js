import React from 'react';


class MovieList extends React.Component { // Componente stateless
    constructor(){
        super();
        this.state = {
            editar:false
        }
        this.listarPeli=this.listarPeli.bind( this );
        this.update=this.update.bind(this);
    }

    listarPeli(){
            if (!(this.state.editar)){
            let items = this.props.movies;
            return( 
                <div> Peliculas disponibles:
                    <ul> 
                            { items.map(item => <Elemento update={ this.update } key={ item.name } items={ item } />) } 
                    </ul>
                </div>
            )
        }
        else
            {
                return(
                <p>HOLA LUCHO ESTO ES PARA EDITAR</p>)


            }
    }

    update(){
        let a=!(this.state.editar)
        this.setState({
            editar:a
        })
    }

    render(){
        
        return(
            this.listarPeli()
        )
}
}

const Elemento = (props) => <li>
                                { props.items.name + " " }
                                { "- " + props.items.author + " "}
                                { <button onClick={props.update} > Editar </button> }
                               
                             </li>

const MovieEditer = (props) => <form>
                                    <label>
                                        Name:
                                        <input type="text" name="name" />
                                    </label>

                                    <label>
                                        Author:
                                        <input type="text" name="author" />
                                    </label>
                                    <input type="submit" value="Submit" />
                                </form>
export default MovieList;