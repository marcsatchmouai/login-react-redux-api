import React from 'react'
import { Form, Row, Button, Col } from 'react-bootstrap';

const List = () => {
    return (
        <Form>
            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Titulo</Form.Label>
                <Form.Control type="text" placeholder="Titulo" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridState">
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

            <Form.Group className="mb-3" controlId="formGridAddress1">
                <Form.Label>Address</Form.Label>
                <Form.Control placeholder="1234 Main St" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGridAddress2">
                <Form.Label>Address 2</Form.Label>
                <Form.Control placeholder="Apartment, studio, or floor" />
            </Form.Group>

            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>City</Form.Label>
                <Form.Control />
                </Form.Group>

                

                <Form.Group as={Col} controlId="formGridZip">
                <Form.Label>Zip</Form.Label>
                <Form.Control />
                </Form.Group>
            </Row>

            <Form.Group className="mb-3" id="formGridCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>

            <Button variant="primary" type="submit">
                Guardar
            </Button>
        </Form>
        
    )
}

export default List