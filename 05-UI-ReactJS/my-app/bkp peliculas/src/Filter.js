import React from 'react';

class Filter extends React.Component{
    constructor(){
        super();
        this.refInput=React.createRef();
        this.filtrar=this.filtrar.bind( this );
    }

    filtrar(){
        this.props.onFiltered( this.refInput.current.value )
    }

    render(){

        return(
            <div>
                <input onChange={ this.filtrar } placeholder="Ingresa palabras clave aqui!" ref={this.refInput} />
            </div>
        )
    }
}

export default Filter;