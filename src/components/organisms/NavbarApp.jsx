// Desarrollado por: Jonathan Ulloa (src/components/organisms/NavbarApp.jsx)

import React, { useState } from 'react';
import { Navbar, Nav, Container, Button, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { CarritoModal } from './CarritoModal';

export function NavbarApp() {
  const [showCarrito, setShowCarrito] = useState(false);

  // Estado simulado para el ejemplo (luego se puede pasar a Context o Redux)
  const [itemsCarrito, setItemsCarrito] = useState([]);

  const handleClose = () => setShowCarrito(false);
  const handleShow = () => setShowCarrito(true);

  return (
    <>
      <Navbar bg="primary" variant="dark" expand="lg" className="shadow-sm mb-4">
        <Container>
          <Navbar.Brand as={Link} to="/" className="fw-bold">
            🛠️ Ferretería Los Maestros
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">Inicio</Nav.Link>
              <Nav.Link as={Link} to="/catalogo">Catálogo</Nav.Link>
            </Nav>
            <Nav className="d-flex align-items-center gap-3">
              <Button variant="outline-light" onClick={handleShow} className="d-flex align-items-center gap-2">
                🛒 Carrito
                <Badge bg="danger" pill>
                  {itemsCarrito.length}
                </Badge>
              </Button>
              <Nav.Link as={Link} to="/login" className="text-white">
                Iniciar Sesión
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Modal del carrito integrado */}
      <CarritoModal
        show={showCarrito}
        handleClose={handleClose}
        items={itemsCarrito}
      />
    </>
  );
}

export default NavbarApp;