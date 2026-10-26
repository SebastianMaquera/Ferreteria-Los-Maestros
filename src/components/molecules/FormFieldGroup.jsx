// Desarrollado por: Camilo Alarcón (src/components/molecules/FormFieldGroup.jsx)

import React from 'react';
import { Form } from 'react-bootstrap';
import { Input } from '../atoms/Input';

export function FormFieldGroup({ label, type, placeholder, value, onChange, errorText, required = false }) {
  return (
    <Form.Group className="mb-3">
      {label && <Form.Label className="fw-semibold">{label}</Form.Label>}
      <Input type={type} placeholder={placeholder} value={value} onChange={onChange} required={required} />
      {errorText && <Form.Text className="text-danger">{errorText}</Form.Text>}
    </Form.Group>
  );
}


export default FormFieldGroup;
