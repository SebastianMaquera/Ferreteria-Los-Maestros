// Desarrollado por: Camilo Alarcón (src/components/organisms/LoginForm.jsx)

import React, { useState } from 'react';
import { Card, Form, Button } from 'react-bootstrap';

export function LoginForm({ onLogin }) {
  const [correo, setCorreo] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin({ correo, password });
  };

  return (
    <Card className="shadow-sm border-0">
      <Card.Body className="p-4">
        <div className="text-center mb-4">
          <h3 className="fw-bold text-primary mb-1">Ferretería Los Maestros</h3>
          <p className="text-muted small">Inicio de Sesión - Sistema de Gestión</p>
        </div>

        {/* noValidate desactivado */}
        <Form onSubmit={handleSubmit} noValidate>
          <Form.Group className="mb-3">
            <Form.Label className="fw-bold">Correo Electrónico</Form.Label>
            <Form.Control
              type="email"
              placeholder="tu.correo@duoc.cl"
              value={correo}
              onChange={(e) => setCorreo(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-4">
            <Form.Label className="fw-bold">Contraseña</Form.Label>
            <Form.Control
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <div className="d-grid">
            <Button variant="primary" type="submit" size="lg" className="fw-bold">
              Iniciar Sesión
            </Button>
          </div>
        </Form>
      </Card.Body>
    </Card>
  );
}

export default LoginForm;