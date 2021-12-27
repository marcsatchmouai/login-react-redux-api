import React from 'react'
import { Navbar, Container, Nav, NavDropdown, Button } from 'react-bootstrap';
import { FaRegUser } from 'react-icons/fa';

const Navigationbar = () => {
    return (

        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">MCGA</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/home">Home</Nav.Link>
                        <NavDropdown title="Peliculas" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="/filmList">Listado</NavDropdown.Item>
                            <NavDropdown.Item href="/addFilm">Agregar</NavDropdown.Item>
                            
                        </NavDropdown>
                    </Nav>
                    <hr className=""/>
                    <Navbar.Text>
                        <Nav.Link href="/">
                            <span>
                                <FaRegUser className='mb-1'/> 
                                    Logout
                            </span>
                        </Nav.Link>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navigationbar

