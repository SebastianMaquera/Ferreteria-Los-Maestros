// Desarrollado por: Jonathan Ulloa (src/pages/LoginPage.jsx)

import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button, Alert } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { autenticarUsuario } from '../services/userService';
import { useAuth } from '../context/AuthContext';

export function LoginPage() {
  const [correo, setCorreo] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (!correo.trim() || !password.trim()) {
      setError('Por favor, ingresa el correo y la contraseña.');
      return;
    }

    const res = autenticarUsuario(correo, password);

    if (res.exito) {
      login(res.usuario);
      if (res.usuario.rol === 'admin' || res.usuario.rol === 'vendedor') {
        navigate('/admin');
      } else {
        navigate('/catalogo');
      }
    } else {
      setError(res.mensaje);
    }
  };

  return (
    <div className="bg-light pb-5 min-vh-100 d-flex align-items-center">
      <Container className="py-4">
        <Row className="justify-content-center">
          <Col md={8} lg={5}>
            <Card className="shadow-sm border-0 overflow-hidden">
              <Card.Header className="bg-dark text-white text-center py-3 border-bottom border-warning border-3">
                <h4 className="fw-bold text-warning mb-1">🛠️ Ferretería Los Maestros</h4>
                <p className="small text-gray-300 mb-0">Inicio de Sesión - Sistema de Gestión</p>
              </Card.Header>

              <Card.Body className="p-4 bg-white">
                {error && (
                  <Alert variant="danger" className="py-2 small text-center">
                    {error}
                  </Alert>
                )}

                <Form onSubmit={handleSubmit} noValidate>
                  <Form.Group className="mb-3">
                    <Form.Label className="fw-bold text-dark small">Correo Electrónico</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="ejemplo@duoc.cl"
                      value={correo}
                      onChange={(e) => setCorreo(e.target.value)}
                      className="border-secondary"
                    />
                  </Form.Group>

                  <Form.Group className="mb-4">
                    <Form.Label className="fw-bold text-dark small">Contraseña</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="••••••••"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="border-secondary"
                    />
                  </Form.Group>

                  <Button variant="warning" type="submit" className="w-100 fw-bold py-2 text-dark">
                    Iniciar Sesión
                  </Button>
                </Form>

                <div className="text-center mt-4 pt-3 border-top">
                  <span className="small text-muted">¿No tienes cuenta? </span>
                  <Link to="/registro" className="small fw-bold text-dark text-decoration-none">
                    Regístrate aquí
                  </Link>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default LoginPage;