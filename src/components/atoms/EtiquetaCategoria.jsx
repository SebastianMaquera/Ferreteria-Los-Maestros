// Desarrollado por: Camilo Alarcón (src/components/atoms/EtiquetaCategoria.jsx)

import React from 'react';
import { Badge } from 'react-bootstrap';


export function EtiquetaCategoria({ texto, bg = 'secondary' }) {
  return <Badge bg={bg}>{texto}</Badge>;
}


export default EtiquetaCategoria;
