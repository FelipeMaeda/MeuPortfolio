import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

export default function NavBarMenu() {
    return (
        <div>
            <Navbar bg="info" expand="lg">
                <div></div>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" color="light">
                    <Nav className="mr-auto">
                        <Nav.Link href="#FelipeMaeda">Felipe Maeda</Nav.Link>
                        <Nav.Link href="#Projetos">Projetos</Nav.Link>
                        <Nav.Link href="#GitHub">GitHub</Nav.Link>
                        <Nav.Link href="#Sobre">Sobre</Nav.Link>
                        <Nav.Link href="#Contato">Contato</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}