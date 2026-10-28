// Desarrollado por: Sebastián Maquera (src/components/atoms/Input.jsx)

import React from 'react';
import { Form } from 'react-bootstrap';

// Átomo: campo de formulario. Acepta cualquier prop de Form.Control
// (name, placeholder, value, onChange, maxLength, as, rows, ...).
export function Input({ type = 'text', className = '', ...props }) {
  // Un textarea (as="textarea") no usa el atributo type
  const tipo = props.as ? undefined : type;
  return <Form.Control type={tipo} className={`border-secondary ${className}`.trim()} {...props} />;
}

export default Input;
