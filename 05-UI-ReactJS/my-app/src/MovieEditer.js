import React from 'react';

class MovieEditer extends React.Component{

    constructor(){
        super();

        this.enviar=this.enviar.bind( this );
        
        this.refName = React.createRef();
        this.refAuthor = React.createRef();

    }

    enviar(e){
        
        e.preventDefault();
        
        this.props.onSubmit(this.props.name,
                            this.props.author,
                            this.refName.current.value,
                            this.refAuthor.current.value
        );
        
    }

    render(){
        return(
            <form>
                 <label>
                        Name:
                        <input type="text" defaultValue={ this.props.name } ref={ this.refName } />
                </label>
                <label>
                        Author:
                         <input type="text" defaultValue={ this.props.author } ref={ this.refAuthor } />
                 </label>
              <button type="submit" value="Submit" onClick={ this.enviar } > atr submit </button>
            </form>
        )}
}

export default MovieEditer;