import React from 'react'
import Navbar from '../common/navbar'
import Add from '../agregar/agregar'

import { Container, Row, Col } from 'react-bootstrap';

const Listado = () => {
    return (
        <React.Fragment>
            <Container fluid>
                <Row>
                    <Col>
                        <Navbar/>
                    </Col>
                </Row>
                
                <Row className="justify-content-md-center">
                    <Col>
                        <Add/>
                    </Col>
                </Row>
                    
            </Container>            
        </React.Fragment>
    )
}

export default Listado

