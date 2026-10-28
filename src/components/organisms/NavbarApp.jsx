// Desarrollado por: Jonathan Ulloa (src/components/organisms/NavbarApp.jsx)

import React, { useState } from 'react';
import { Navbar, Nav, Container, Button, Badge } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { CarritoModal } from './CarritoModal';
import { useCarrito } from '../../context/CarritoContext';
import { useAuth } from '../../context/AuthContext';

export function NavbarApp() {
  const [showCarrito, setShowCarrito] = useState(false);
  const [imgError, setImgError] = useState(false);
  const { carrito } = useCarrito();
  const { usuario, logout, esVendedor } = useAuth();
  const navigate = useNavigate();

  const cantidadTotal = carrito.reduce((acc, item) => acc + (item.cantidad || 1), 0);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const getBadgeColor = (rol) => {
    if (rol === 'admin') return 'danger';
    if (rol === 'vendedor') return 'warning';
    return 'info';
  };

  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg" className="shadow-sm sticky-top">
        <Container>
          {/* Logo e Identidad Visual */}
          <Navbar.Brand as={Link} to="/" className="fw-bold d-flex align-items-center gap-2 me-4">
            {!imgError ? (
              <img
                src="/img/logo.jpg"
                alt="Ferretería Los Maestros"
                width="40"
                height="40"
                className="rounded-circle object-fit-cover"
                onError={() => setImgError(true)}
              />
            ) : (
              <span className="fs-4">🛠️</span>
            )}
            <span className="fs-5 text-white">Ferretería Los Maestros</span>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">

            {/* Navegación Principal */}
            <Nav className="me-auto align-items-lg-center">
              <Nav.Link as={Link} to="/">Inicio</Nav.Link>
              <Nav.Link as={Link} to="/catalogo">Productos</Nav.Link>
              <Nav.Link as={Link} to="/nosotros">Nosotros</Nav.Link>
              <Nav.Link as={Link} to="/blogs">Blogs</Nav.Link>
              <Nav.Link as={Link} to="/contacto">Contacto</Nav.Link>
            </Nav>

            {/* Acciones de Usuario y Carrito */}
            <Nav className="d-flex align-items-center gap-2 mt-2 mt-lg-0">
              <Button
                variant="warning"
                size="sm"
                onClick={() => setShowCarrito(true)}
                className="d-flex align-items-center gap-2 fw-bold text-dark px-3"
              >
                🛒 Carrito
                <Badge bg="dark" text="light" pill>
                  {cantidadTotal}
                </Badge>
              </Button>

              {usuario ? (
                <div className="d-flex align-items-center gap-2 ms-2">
                  <div className="text-white small d-none d-md-block text-end me-1">
                    <span className="fw-bold d-block">{usuario.nombre || usuario.correo}</span>
                    <Badge bg={getBadgeColor(usuario.rol)} className="text-capitalize">
                      {usuario.rol || 'cliente'}
                    </Badge>
                  </div>

                  {esVendedor && (
                    <Button as={Link} to="/admin" variant="outline-warning" size="sm" className="fw-bold">
                      ⚙️ Admin
                    </Button>
                  )}

                  <Button variant="outline-danger" size="sm" onClick={handleLogout}>
                    Salir
                  </Button>
                </div>
              ) : (
                <div className="d-flex gap-2 ms-2">
                  <Nav.Link as={Link} to="/login" className="text-white btn btn-sm btn-outline-secondary px-2">
                    Iniciar Sesión
                  </Nav.Link>
                  <Nav.Link as={Link} to="/registro" className="text-white btn btn-sm btn-warning text-dark fw-bold px-2">
                    Registro
                  </Nav.Link>
                </div>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <CarritoModal show={showCarrito} handleClose={() => setShowCarrito(false)} />
    </>
  );
}

export default NavbarApp;