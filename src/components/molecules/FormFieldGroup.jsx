// Desarrollado por: Camilo Alarcón (src/components/molecules/FormFieldGroup.jsx)

import React from 'react';
import { Form } from 'react-bootstrap';
import { Input } from '../atoms/Input';

// Molécula: etiqueta + campo (átomo Input) + texto de ayuda o de error.
// Las props restantes (type, name, value, onChange, maxLength, ...) se pasan al Input.
export function FormFieldGroup({ controlId, label, helpText, errorText, ...inputProps }) {
  return (
    <Form.Group className="mb-3" controlId={controlId}>
      {label && <Form.Label className="fw-bold text-dark">{label}</Form.Label>}
      <Input {...inputProps} />
      {helpText && <Form.Text className="text-muted d-block">{helpText}</Form.Text>}
      {errorText && <Form.Text className="text-danger d-block fw-semibold">{errorText}</Form.Text>}
    </Form.Group>
  );
}

export default FormFieldGroup;
