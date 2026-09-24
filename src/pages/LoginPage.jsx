import { Container, Row, Col } from 'react-bootstrap';
import { LoginForm } from '../components/organisms/LoginForm';

export function LoginPage() {
  const handleLoginSubmit = (datos) => {
    console.log('Intento de Login:', datos);
    alert(`Inicio de sesión exitoso con: ${datos.correo}`);
  };

  return (
    <div className="bg-light min-vh-100 d-flex align-items-center py-5">
      <Container>
        <Row className="justify-content-center">
          {/* Layout Responsivo: 
              - Móvil (xs): 12 columnas (375px)
              - Tablet (md): 8 columnas (768px)
              - Escritorio (lg): 5 columnas (1280px) */}
          <Col xs={12} md={8} lg={5}>
            <LoginForm onLogin={handleLoginSubmit} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}