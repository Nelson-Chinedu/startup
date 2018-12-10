import React from 'react';
import ReactDOM from 'react-dom';

class Table extends Component {

    constructor(){
        const movies = [];
    } 

    askForMovies(){
        <form>
        <label>
            Name:
            <input type="text" name="name" />
        </label>
        <label>
            Year:
            <input type="text" name="year" />
        </label>
        <label>
            Duration:
            <input type="text" name="duration" />
        </label>
        <input type="submit" value="Submit" onclick=send() />
        </form>
    }

    send(){

    }

    render() {
        const { movieData, removeMovie } = this.props;

        return (
            <table>
                <TableHeader />
                <TableBody 
                    movieData={movieData} 
                    removeMovie={removeMovie} 
                />
            </table>
        );
    }
}

const TableHeader = () => { 
    return (
        <thead>
            <tr>
                <th>Titulo</th>
                <th>Año</th>
                <th>Duracion</th>
            </tr>
        </thead>
    );
}

const TableBody = props => { 
    const rows = props.movieData.map((row, index) => {
        return (
            <tr key={index}>
                <td>{row.title}</td>
                <td>{row.year}</td>
                <td>{row.duration}</td>
            </tr>
        );
    });

    return <tbody>{rows}</tbody>;
}
