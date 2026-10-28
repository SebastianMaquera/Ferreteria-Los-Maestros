// Desarrollado por: Jonathan Ulloa (src/pages/LoginPage.jsx)

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { LoginForm } from '../components/organisms/LoginForm';
import { useAuth } from '../context/AuthContext';

export function LoginPage() {
  const navigate = useNavigate();
  const { iniciarSesion } = useAuth();

  const handleLogin = ({ correo, password }) => {
    const resultado = iniciarSesion(correo, password);

    if (resultado.exito) {
      const rol = resultado.usuario.rol;
      navigate(rol === 'admin' || rol === 'vendedor' ? '/admin' : '/catalogo');
    }

    return resultado;
  };

  return (
    <div className="bg-light pb-5 min-vh-100 d-flex align-items-center">
      <Container className="py-4">
        <Row className="justify-content-center">
          <Col md={8} lg={5}>
            <LoginForm onLogin={handleLogin} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default LoginPage;
