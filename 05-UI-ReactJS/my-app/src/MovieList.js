import React from 'react';


class MovieList extends React.Component { // Componente stateless
    constructor(){
        super();

    }

    
    render(){

        let items = this.props.movies;
        
        return(
            <div> Peliculas disponibles:
                <ul>
                    { items.map(item => <Elemento  key={ item.name } items={ item } />) }
                </ul>
            </div>
        )
}
}

const Elemento = (props) => <li>
                                { props.items.name + " " }
                                { <button onClick={this} > Editar </button> }
                                { " " + props.items.author + " "}
                                { <button onClick={this} > Editar </button> }
                             </li>

export default MovieList;