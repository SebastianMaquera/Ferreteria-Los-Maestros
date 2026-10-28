// Desarrollado por: Jonathan Ulloa (src/components/atoms/ButtonSubmit.jsx)

import React from 'react';
import { Button } from 'react-bootstrap';

// Átomo: botón de envío de formularios con estado de carga
export function ButtonSubmit({ text, variant = 'primary', size, loading = false, className = '' }) {
  return (
    <Button
      variant={variant}
      size={size}
      type="submit"
      className={`w-100 py-2 fw-bold ${className}`.trim()}
      disabled={loading}
    >
      {loading ? 'Cargando...' : text}
    </Button>
  );
}

export default ButtonSubmit;
