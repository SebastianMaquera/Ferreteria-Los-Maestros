import { useState } from 'react';
import { Card, Form, Alert } from 'react-bootstrap';
import { FormFieldGroup } from '../molecules/FormFieldGroup';
import { ButtonSubmit } from '../atoms/ButtonSubmit';

export function LoginForm({ onLogin }) {
  const [nombre, setNombre] = useState('');
  const [rut, setRut] = useState('');
  const [correo, setCorreo] = useState('');
  const [rol, setRol] = useState('Contratista');
  const [clave, setClave] = useState('');

  const [validated, setValidated] = useState(false);
  const [error, setError] = useState('');
  const [exito, setExito] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;

    // Criterio 6: Marcar campos obligatorios vacíos si el formulario no es válido
    if (form.checkValidity() === false) {
      e.stopPropagation();
      setValidated(true);
      setError('Por favor completa todos los campos obligatorios.');
      return;
    }

    setValidated(true);
    setError('');
    setExito('');

    // Criterio 7: Validar formato y dominio de correo
    const dominiosPermitidos = ['@duoc.cl', '@profesor.duoc.cl', '@gmail.com'];
    const correoValido = dominiosPermitidos.some(d => correo.toLowerCase().endsWith(d));

    if (!correoValido) {
      setError('El correo debe terminar en @duoc.cl, @profesor.duoc.cl o @gmail.com');
      return;
    }

    if (clave.length < 4 || clave.length > 10) {
      setError('La contraseña debe tener entre 4 y 10 caracteres.');
      return;
    }

    // Criterio 8: Mostrar mensaje de confirmación cuando es válido
    setExito(`¡Registro exitoso! Bienvenido ${nombre} (${rol}).`);
    onLogin({ nombre, rut, correo, rol, clave });
  };

  return (
    <Card className="shadow-lg border-0 p-4 rounded-3">
      <Card.Body>
        <div className="text-center mb-4">
          <h2 className="fw-bold text-primary">Ferretería Los Maestros</h2>
          <p className="text-muted">Ingreso de Usuarios - Sistema de Gestión</p>
        </div>

        {exito && (
          <Alert variant="success" onClose={() => setExito('')} dismissible>
            {exito}
          </Alert>
        )}

        {error && <Alert variant="danger">{error}</Alert>}

        {/* Formulario con los 5 campos requeridos */}
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          
          {/* Campo 1: Nombre Completo */}
          <FormFieldGroup
            label="Nombre Completo"
            type="text"
            placeholder="Ej: Jonathan Ulloa"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />

          {/* Campo 2: RUT / Identificación */}
          <FormFieldGroup
            label="RUT o Identificación"
            type="text"
            placeholder="Ej: 12.345.678-9"
            value={rut}
            onChange={(e) => setRut(e.target.value)}
          />

          {/* Campo 3: Correo Electrónico */}
          <FormFieldGroup
            label="Correo Electrónico"
            type="email"
            placeholder="ejemplo@duoc.cl"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
          />

          {/* Campo 4: Perfil / Rol */}
          <Form.Group className="mb-3">
            <Form.Label className="fw-semibold">Perfil de Usuario</Form.Label>
            <Form.Select value={rol} onChange={(e) => setRol(e.target.value)}>
              <option value="Contratista">Contratista / Cliente Frecuente</option>
              <option value="Vendedor">Vendedor de Mostrador</option>
              <option value="Administrador">Administrador (Dueño)</option>
            </Form.Select>
          </Form.Group>

          {/* Campo 5: Contraseña */}
          <FormFieldGroup
            label="Contraseña"
            type="password"
            placeholder="Ingresa tu contraseña"
            value={clave}
            onChange={(e) => setClave(e.target.value)}
          />

          <div className="mt-4">
            <ButtonSubmit text="Iniciar Sesión / Registrar" variant="primary" />
          </div>
        </Form>
      </Card.Body>
    </Card>
  );
}