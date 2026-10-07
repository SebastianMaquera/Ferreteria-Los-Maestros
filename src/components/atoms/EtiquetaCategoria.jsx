import { Badge } from 'react-bootstrap';

export function EtiquetaCategoria({ texto, bg = 'secondary' }) {
  return <Badge bg={bg}>{texto}</Badge>;
}