import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Row, Button, Col } from 'react-bootstrap';

const AddFilm = ({ history }) => {
    // useState Se utiliza para setear los valores en los campos del formulario.
    const [titulo, setTitulo] = useState('');
    const [genero, setGenero] = useState('');
    const [anio, setAnio] = useState('');
    const [duracion, setDuracion] = useState('');
    const [director, setDirector] = useState('');
    // Permite utilziar los dispatch.
    const dispatch = useDispatch();

    // Acceder al state del Store! [!IMPORTANTE!]
    const { loading, error } = useSelector((state) => state.films);

    // Llama el action.
    const addNewFilm = (film) => dispatch(addNewFilmAction(film));

    const onSubmit = (e) => {
        e.preventDefault();
        //Validar formulario.
        if (titulo.trim() === '' || genero.trim() === '' || anio.trim() === '' || duracion.trim() === '' || director.trim() === '')
        return;

        //Si no hay errores.
        //Agregar Pelicula.
        const film = {
            titulo,
            genero,
            anio,
            duracion,
            director
        };

        addNewFilm(film);

        // Redireccionar a la lista de peliculas.
        history.push('/films');

    };
    return (
        <Form onSubmit={onSubmit}>
            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridTitulo">
                <Form.Label>Titulo</Form.Label>
                <Form.Control type="text" placeholder="Titulo" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridGenero">
                <Form.Label>Genero</Form.Label>
                <Form.Select defaultValue="Choose...">
                    <option>Seleccione...</option>
                    <option>Drama</option>
                    <option>Accion</option>
                    <option>Comedia</option>
                    <option>Terror</option>
                    <option>Aventuras</option>
                    <option>Ciencia Ficion</option>
                    <option>Musical</option>
                    <option>Documental</option>
                    <option>Infantil</option>
                    <option>Musical</option>

                </Form.Select>
                </Form.Group>
            </Row>

            <Form.Group className="mb-3" controlId="formGridAddress2">
                <Form.Label>Director</Form.Label>
                <Form.Control type="text" placeholder="" />
            </Form.Group>

            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>Año</Form.Label>
                <Form.Control type="date" />
                </Form.Group>

                

                <Form.Group as={Col} controlId="formGridZip">
                <Form.Label>Duracion</Form.Label>
                <Form.Control type="time"/>
                </Form.Group>
            </Row>

            <Button variant="primary" type="submit">
                Guardar
            </Button>
            &nbsp;
            <Button variant="danger" type="submit">
                Cancelar
            </Button>
        </Form>
        
    )
}

export default AddFilm