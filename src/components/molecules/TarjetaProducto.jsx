import { Card, Button } from 'react-bootstrap';
import { Card, Button, Badge } from 'react-bootstrap';
import { EtiquetaCategoria } from '../atoms/EtiquetaCategoria';

export function TarjetaProducto({ producto }) {
  const stockBajo = producto.stock < producto.stockMinimo;

  return (
    <Card className="h-100 shadow-sm border-0">
      <Card.Body className="d-flex flex-column justify-content-between">
        <div>
          <EtiquetaCategoria texto={producto.categoria} />
          <Card.Title className="h6 mt-2">{producto.nombre}</Card.Title>
          <small className="text-muted d-block">{producto.subcategoria}</small>
          <Card.Text className="fw-bold text-primary fs-5 mb-1">
            ${producto.precio.toLocaleString('es-CL')}
          </Card.Text>
          <small className="text-muted d-block mb-2">Stock disponible: {producto.stock} un.</small>
          {stockBajo && (
            <Badge bg="danger" className="mb-3">
              Stock bajo (mínimo {producto.stockMinimo})
            </Badge>
          )}
        </div>
        <Button variant="primary" className="w-100 mt-2">
          Agregar al Carrito
        </Button>
      </Card.Body>
    </Card>
  );
}