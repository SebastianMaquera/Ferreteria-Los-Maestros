import { useState } from 'react';
import { Card, Form } from 'react-bootstrap';
import { FormFieldGroup } from '../molecules/FormFieldGroup';
import { ButtonSubmit } from '../atoms/ButtonSubmit';

export function LoginForm({ onLogin }) {
  const [correo, setCorreo] = useState('');
  const [clave, setClave] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validar correo según restricciones del caso
    const dominiosPermitidos = ['@duoc.cl', '@profesor.duoc.cl', '@gmail.com'];
    const correoValido = dominiosPermitidos.some(d => correo.toLowerCase().endsWith(d));

    if (!correoValido) {
      setError('Solo se permiten correos @duoc.cl, @profesor.duoc.cl o @gmail.com');
      return;
    }

    if (clave.length < 4 || clave.length > 10) {
      setError('La contraseña debe tener entre 4 y 10 caracteres.');
      return;
    }

    setError('');
    onLogin({ correo, clave });
  };

  return (
    <Card className="shadow-lg border-0 p-4 rounded-3">
      <Card.Body>
        <div className="text-center mb-4">
          <h2 className="fw-bold text-primary">Ferretería Los Maestros</h2>
          <p className="text-muted">Inicio de Sesión - Sistema de Gestión</p>
        </div>

        <Form onSubmit={handleSubmit}>
          <FormFieldGroup
            label="Correo Electrónico"
            type="email"
            placeholder="ejemplo@duoc.cl"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
          />

          <FormFieldGroup
            label="Contraseña"
            type="password"
            placeholder="Ingresa tu contraseña"
            value={clave}
            onChange={(e) => setClave(e.target.value)}
            errorText={error}
          />

          <div className="mt-4">
            <ButtonSubmit text="Iniciar Sesión" variant="primary" />
          </div>
        </Form>
      </Card.Body>
    </Card>
  );
}