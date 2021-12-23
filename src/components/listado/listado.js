import React from 'react'
import { Table } from 'react-bootstrap';

const List = () => {
    return (
        <div className="justify-content-md-center">
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Titulo</th>
                        <th scope="col">Genero</th>
                        <th scope="col">Año</th>
                        <th scope="col">Duracion</th>
                        <th scope="col">Director</th>
                        <th scope="col">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">3</th>
                        <td>Larry</td>
                        <td>the Bird</td>
                        <td>Larry</td>
                        <td>the Bird</td>
                        <td>Bird</td>
                        <td>
                            <div class="btn-group" role="group" aria-label="Basic mixed styles example">
                                <button type="button" className="btn btn-warning">Editar</button>
                                <button type="button" className="btn btn-danger">Eliminar</button>
                            </div>              
                        </td>
                    </tr>
                </tbody>
            </Table>
        </div>
        
    )
}

export default List