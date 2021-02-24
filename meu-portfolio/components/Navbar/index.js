import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

export default function NavBarMenu() {
    return (
        <div>
            <Navbar bg="info" expand="lg">
                <a href="MeuPortfolio"><div className="briefcase-icon" /></a>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" color="light">
                    <Nav className="mr-auto">
                        <Nav.Link href="felipemaeda">Felipe Maeda</Nav.Link>
                        <Nav.Link href="projetos">Projetos</Nav.Link>
                        <Nav.Link href="github">GitHub</Nav.Link>
                        <Nav.Link href="sobre">Sobre</Nav.Link>
                        <Nav.Link href="contato">Contato</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

            
        </div>
    )
}