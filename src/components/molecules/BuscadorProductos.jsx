// Desarrollado por: Sebastián Maquera (src/components/molecules/BuscadorProductos.jsx)

import React from 'react';
import { Form, Button, InputGroup } from 'react-bootstrap';

export function BuscadorProductos({ valor, onChange, onBuscar }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (onBuscar) onBuscar();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <InputGroup>
        <Form.Control
          type="text"
          placeholder="Buscar productos por nombre, marca o categoría..."
          value={valor}
          onChange={onChange}
          className="border-secondary"
        />
        {valor && (
          <Button variant="outline-secondary" onClick={() => onChange({ target: { value: '' } })}>
            ✕
          </Button>
        )}
        <Button variant="warning" type="submit" className="fw-bold text-dark px-4">
          🔍 Buscar
        </Button>
      </InputGroup>
    </Form>
  );
}

export default BuscadorProductos;