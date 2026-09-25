import { Container, Row, Col } from 'react-bootstrap';
import { LoginForm } from '../components/organisms/LoginForm';

export function LoginPage() {
  const handleLoginSubmit = (datos) => {
    console.log('Datos procesados:', datos);
  };

  return (
    <div className="bg-light min-vh-100 d-flex flex-column justify-content-between">
      {/* Criterio 1: Etiqueta semántica <header> */}
      <header className="bg-dark text-white py-3 px-4 shadow-sm">
        <Container>
          <h1 className="h4 m-0 fw-bold">Ferretería Los Maestros</h1>
        </Container>
      </header>

      {/* Criterio 1: Etiqueta semántica <main> */}
      <main className="py-5">
        <Container>
          <Row className="justify-content-center">
            <Col xs={12} md={8} lg={6}>
              <LoginForm onLogin={handleLoginSubmit} />
            </Col>
          </Row>
        </Container>
      </main>

      {/* Criterio 1: Etiqueta semántica <footer> */}
      <footer className="bg-secondary text-white text-center py-3 mt-auto">
        <Container>
          <small>© 2026 Ferretería Los Maestros - La Serena, Chile</small>
        </Container>
      </footer>
    </div>
  );
}