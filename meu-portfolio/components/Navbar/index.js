import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

export default function NavBarMenu() {
    return (
        <div style={{background: 'linear-gradient(#f8f9fa, #fff)'}}>
            <Container>
                <Navbar bg="" expand="lg">
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" color="light">
                        <Nav className="mr-auto">
                            <Nav.Link href="felipemaeda">Felipe Maeda</Nav.Link>
                            <Nav.Link href="carreira">Carreira</Nav.Link>
                            <Nav.Link href="github">GitHub</Nav.Link>
                            <Nav.Link href="sobre">Sobre</Nav.Link>
                            <Nav.Link href="contato">Contato</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <br /><br /><br /><br />
            </Container>
        </div>
    )
}