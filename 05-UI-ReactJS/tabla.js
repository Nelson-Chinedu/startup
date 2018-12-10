import React, { Component } from 'react';

class Table extends Component {
    render() {
        return (
            <table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Año</th>
                        <th>Duracion</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>The Terminator</td>
                        <td>1987</td>
                        <td>106 min</td>
                    </tr>
                    <tr>
                        <td>The Hateful Eight</td>
                        <td>2016</td>.
                        <td>121 min</td>
                    </tr>
                </tbody>
            </table>
        );
    }
}

export default Tabla;