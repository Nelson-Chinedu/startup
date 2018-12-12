import React from 'react';

class Filter extends React.Component{
    constructor(){
        super();
        this.refInput = React.createRef();
        this.filtrar = this.filtrar.bind(this);
    }

    filtrar(){
        this.props.onFiltered(this.refInput.current.value)
    }

    render(){

        return(
            <div>
                <input placeholder = "Ingresa el filtro aqui!" ref = {this.refInput} />
                <hr />
                <button type = "submit" onClick = {this.filtrar} > Filtrar! </button>
            </div>
        )
    }
}

export default Filter;