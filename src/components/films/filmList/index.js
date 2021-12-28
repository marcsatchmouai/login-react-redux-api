import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Row, Col, Table } from 'react-bootstrap';


import Navbar from '../../common/navbar'
import List from './filmList'

import { getAllFilmsAction } from '../../../store/actions/filmsActions';

const FilmList = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        const getAllFilms = () => dispatch(getAllFilmsAction());
        getAllFilms();
        
      }, []);

       
    const { loading, error, films } = useSelector((state) => state.films);
    
    return (
        <React.Fragment>
            <Container fluid>
                <Row>
                    <Col>
                        <Navbar/>
                    </Col>
                </Row>
                <Row className="justify-content-md-center p-5">
                    <Col>
                        <h2 className='text-center my-5'>Listado de Peliculas</h2>

                        {loading ? <h4 className='text-center'> Loading... </h4> : null}

                        {error ? (
                            <p className='alert alert-danger p-2 m-4 text-center'>
                                Ocurrio un error.
                            </p>
                        ) : null}
                        <div className="justify-content-md-center">
                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                        <th className="col">Titulo</th>
                                        <th className="col">Genero</th>
                                        <th className="col">Año</th>
                                        <th className="col">Duracion</th>
                                        <th className="col">Director</th>
                                        <th className="col">Acciones</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {films.length === 0
                                        ? 'No hay Peliculas'
                                        : films.map((film) => (
                                            <List key={film._id} film={film} />
                                        ))
                                    }
                                </tbody>
                            </Table>
                        </div>
                    </Col>
                </Row>
                    
            </Container>            
        </React.Fragment>
    )
}

export default FilmList

