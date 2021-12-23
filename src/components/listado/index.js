import React from 'react'
import Navbar from '../common/navbar'
import List from '../listado/listado'

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
                        <List/>
                    </Col>
                </Row>
                    
            </Container>            
        </React.Fragment>
    )
}

export default Listado

