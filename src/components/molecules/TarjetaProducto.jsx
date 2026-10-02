import { Card, Button } from 'react-bootstrap';
import { EtiquetaCategoria } from '../atoms/EtiquetaCategoria';

export function TarjetaProducto({ producto }) {
  return (
    <Card className="h-100 shadow-sm border-0">
      <Card.Body className="d-flex flex-column justify-content-between">
        <div>
          <EtiquetaCategoria texto={producto.categoria} />
          <Card.Title className="h6 mt-2">{producto.nombre}</Card.Title>
          <Card.Text className="fw-bold text-primary fs-5 mb-1">
            ${producto.precio.toLocaleString('es-CL')}
          </Card.Text>
          <small className="text-muted d-block mb-3">Stock disponible: {producto.stock} un.</small>
        </div>
        <Button variant="primary" className="w-100">
          Agregar al Carrito
        </Button>
      </Card.Body>
    </Card>
  );
}
