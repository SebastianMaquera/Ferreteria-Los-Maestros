import React from 'react';
import { InputGroup, Form, Button } from 'react-bootstrap';


export function BuscadorProductos({ valor, onChange, onBuscar }) {
  return (
    <InputGroup className="mb-3">
      <Form.Control
        type="text"
        placeholder="Buscar productos..."
        value={valor}
        onChange={onChange}
      />
      <Button variant="primary" onClick={onBuscar}>
        Buscar
      </Button>
    </InputGroup>
  );
}


export default BuscadorProductos;
