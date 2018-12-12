import React from 'react';


const Movie = (props) => { // Componente stateless

        let items = props.movies;

        return(
            <div>
                <ul>
                    {items.map(item => <Elemento  key={item.name} items={item} />)}
                </ul>
            </div>
        )
}

const Elemento = (props) => <li>{props.items.name}</li>

export default Movie;