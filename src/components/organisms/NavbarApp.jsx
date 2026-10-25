// Desarrollado por: Jonathan Ulloa (src/components/organisms/NavbarApp.jsx)
import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';

export function NavbarApp({ onNavegar }) {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="shadow-sm">
      <Container>
        <Navbar.Brand
          href="#home"
          className="fw-bold text-warning cursor-pointer"
          onClick={(e) => { e.preventDefault(); onNavegar && onNavegar('home'); }}
        >
          🛠️ Ferretería Los Maestros
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link
              href="#catalogo"
              onClick={(e) => { e.preventDefault(); onNavegar && onNavegar('catalogo'); }}
            >
              Catálogo
            </Nav.Link>
            <Nav.Link
              href="#login"
              onClick={(e) => { e.preventDefault(); onNavegar && onNavegar('login'); }}
            >
              Ingreso
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarApp;