import { useState } from 'react';
import { Card, Form } from 'react-bootstrap';
import { FormFieldGroup } from '../molecules/FormFieldGroup';
import { ButtonSubmit } from '../atoms/ButtonSubmit';
import { validarCorreo, validarClave } from '../../utils/validaciones';

export function LoginForm({ onLogin }) {
  const [correo, setCorreo] = useState('');
  const [clave, setClave] = useState('');
  const [errores, setErrores] = useState({ correo: '', clave: '' });

  const handleSubmit = (e) => {
    e.preventDefault();

    const errCorreo = validarCorreo(correo);
    const errClave = validarClave(clave);

    if (errCorreo || errClave) {
      setErrores({ correo: errCorreo, clave: errClave });
      return;
    }

    setErrores({ correo: '', clave: '' });
    onLogin({ correo, clave });
  };

  return (
    <Card className="shadow-lg border-0 p-4 rounded-3">
      <Card.Body>
        <div className="text-center mb-4">
          <h2 className="fw-bold text-primary">Ferretería Los Maestros</h2>
          <p className="text-muted">Inicio de Sesión - Sistema de Gestión</p>
        </div>

        <Form onSubmit={handleSubmit} noValidate>
          <FormFieldGroup
            label="Correo Electrónico"
            type="email"
            placeholder="ejemplo@duoc.cl"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
            errorText={errores.correo}
          />

          <FormFieldGroup
            label="Contraseña"
            type="password"
            placeholder="Ingresa tu contraseña"
            value={clave}
            onChange={(e) => setClave(e.target.value)}
            errorText={errores.clave}
          />

          <div className="mt-4">
            <ButtonSubmit text="Iniciar Sesión" variant="primary" />
          </div>
        </Form>
      </Card.Body>
    </Card>
  );
}