import React from 'react';



class MovieCreator extends React.Component {
constructor() {
    super();
    this.state = {
        name:'',
        author:''
    }
    this.refName = React.createRef();
    this.refAuthor = React.createRef();
    this.onSubmit = this.onSubmit.bind(this);
}

onSubmit(event) {
    event.preventDefault();

    const movie = {
        name:this.refName.current.value,
        author:this.refAuthor.current.value
        }
    
    this.props.onAddMovie(movie);
}





    render() {
        return(
            <div>
                <input placeholder = "Ingresa nombre de peli"  ref = {this.refName} /> 

                <hr />

                <input placeholder = "Ingresa el autor" ref = {this.refAuthor} />

                <hr />

                <button type = "submit" onClick = {this.onSubmit} > Submit! </button>

            </div>
            
        )
    }
}




export default MovieCreator

 /* render(){
    return(
      <div id="container">
          <Input ref={component => this.a = component} update={this.update.bind(this)} />
          {this.state.a}
          <hr />
          <Input ref={component => this.b = component} update={this.update.bind(this)} />
          {this.state.b}
          <Button ref={component => this.input = component} setear={this.setear.bind(this)} />
          
      </div>
    )
  }
}

class Input extends React.Component{
  render(){
    return(
      <div><input type="text" ref="input" onChange={this.props.setear}/></div>
    )
  }
}

class Button extends React.Component{
  render(){
    return(
      <button ref="submit" type="submit" onClick={this.props.setear}>Submit!</button>
    )
  }
}*/

