import { Card, Button, Badge } from 'react-bootstrap';

function TarjetaProducto({ producto }) {
  if (!producto) return null;

  const nombre = producto.nombre || producto.title || 'Producto';
  const precio = producto.precio || producto.price || producto.costo || 0;
  const descripcion = producto.descripcion || producto.detalles || producto.description || 'Sin descripción disponible';
  const categoria = producto.categoria || producto.category || 'General';

  return (
    <Card className="h-100 shadow-sm border-0 bg-light">
      <Card.Body className="d-flex flex-column">
        <div className="d-flex justify-content-between align-items-start mb-2">
          <Badge bg="secondary" className="text-uppercase">
            {categoria}
          </Badge>
        </div>
        <Card.Title className="fw-bold text-dark">{nombre}</Card.Title>
        <Card.Text className="text-muted flex-grow-1">{descripcion}</Card.Text>
        <div className="mt-3 pt-3 border-top d-flex justify-content-between align-items-center">
          <span className="fs-4 fw-bold text-success">
            ${typeof precio === 'number' ? precio.toLocaleString('es-CL') : precio}
          </span>
          <Button variant="outline-primary" size="sm">
            Ver Detalle
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default TarjetaProducto;
