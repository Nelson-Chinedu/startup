import React from 'react';

class Movie extends React.Component {

    render() {

        let items = this.props.movies;

        return(
            <div>
                <ul>
                    {items.map(item => <Elemento  key={item.name} items={item} />)}
                </ul>
            </div>
        )
    }
}

export default Movie

 


const Elemento = (props) => <li>{props.items.name}</li>