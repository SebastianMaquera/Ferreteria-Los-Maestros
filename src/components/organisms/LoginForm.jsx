// Desarrollado por: Camilo Alarcón (src/components/organisms/LoginForm.jsx)

import React, { useState } from 'react';
import { Card, Form, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FormFieldGroup } from '../molecules/FormFieldGroup';
import { ButtonSubmit } from '../atoms/ButtonSubmit';
import { validarCorreo } from '../../utils/validaciones';

// Organismo: formulario completo de inicio de sesión.
// onLogin({ correo, password }) debe devolver { exito, mensaje }.
export function LoginForm({ onLogin }) {
  const [correo, setCorreo] = useState('');
  const [password, setPassword] = useState('');
  const [errores, setErrores] = useState({ correo: '', password: '' });
  const [errorGeneral, setErrorGeneral] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorGeneral('');

    const nuevosErrores = {
      correo: validarCorreo(correo),
      password: password.trim() ? '' : 'La contraseña es obligatoria.'
    };
    setErrores(nuevosErrores);

    if (nuevosErrores.correo || nuevosErrores.password) {
      return;
    }

    const resultado = onLogin({ correo, password });
    if (!resultado.exito) {
      setErrorGeneral(resultado.mensaje);
    }
  };

  return (
    <Card className="shadow-sm border-0 overflow-hidden">
      <Card.Header className="bg-dark text-white text-center py-3 border-bottom border-warning border-3">
        <h4 className="fw-bold text-warning mb-1">🛠️ Ferretería Los Maestros</h4>
        <p className="small text-gray-300 mb-0">Inicio de Sesión - Sistema de Gestión</p>
      </Card.Header>

      <Card.Body className="p-4 bg-white">
        {errorGeneral && (
          <Alert variant="danger" className="py-2 small text-center">
            {errorGeneral}
          </Alert>
        )}

        {/* noValidate: los mensajes de error los entrega React, no el navegador */}
        <Form onSubmit={handleSubmit} noValidate>
          <FormFieldGroup
            controlId="login-correo"
            label="Correo Electrónico"
            type="email"
            placeholder="ejemplo@duoc.cl"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
            errorText={errores.correo}
          />

          <FormFieldGroup
            controlId="login-password"
            label="Contraseña"
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            errorText={errores.password}
          />

          <div className="mt-4">
            <ButtonSubmit text="Iniciar Sesión" variant="warning" />
          </div>
        </Form>

        <div className="text-center mt-4 pt-3 border-top">
          <span className="small text-muted">¿No tienes cuenta? </span>
          <Link to="/registro" className="small fw-bold text-dark text-decoration-none">
            Regístrate aquí
          </Link>
        </div>
      </Card.Body>
    </Card>
  );
}

export default LoginForm;
