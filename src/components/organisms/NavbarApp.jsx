import { Navbar, Container, Nav } from 'react-bootstrap';

export function NavbarApp() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="shadow-sm">
      <Container>
        <Navbar.Brand href="#" className="fw-bold text-warning">
          🛠️ Ferretería Los Maestros
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#catalogo">Catálogo</Nav.Link>
            <Nav.Link href="#login">Ingreso</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}