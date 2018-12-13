import React from 'react';

class DeletedElement extends React.Component {
    constructor() {
        super();
        this.state = {
            name: ''
        }
    this.refInput = React.createRef();
    this.update=this.update.bind(this);
    this.eliminar=this.eliminar.bind(this);
    }

    update(){
        this.setState({
            name:this.refInput.current.value
        })
    }

    eliminar(){
        this.props.onDeleteMovie(this.state.name)
    }

    render() {
        return (
            <div>
                <input onChange={ this.update } placeholder = "¿Que pelicula queres borrar?" ref = {this.refInput} />
                <button type="submit" onClick={ this.eliminar }> ELIMINAR </button>
            </div>
        )
    }
}

export default DeletedElement;