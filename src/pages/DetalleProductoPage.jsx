import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Container, Card, Row, Col, Button, Form, Alert, Breadcrumb } from 'react-bootstrap';
import { EtiquetaCategoria } from '../components/atoms/EtiquetaCategoria';
import { PRODUCTOS } from '../data/productos';
import { useCarrito } from '../context/CarritoContext';


export function DetalleProductoPage() {
  const { id } = useParams();
  const producto = PRODUCTOS.find((p) => String(p.id) === String(id));
  const { agregarAlCarrito } = useCarrito();


  const [cantidad, setCantidad] = useState(1);
  const [mensaje, setMensaje] = useState('');


  if (!producto) {
    return (
      <Container className="my-5 text-center py-5">
        <h2 className="fw-bold text-danger">Producto no encontrado</h2>
        <p className="text-muted">El código del producto no existe en nuestro catálogo.</p>
        <Button as={Link} to="/catalogo" variant="primary" className="mt-3">
          Volver al Catálogo
        </Button>
      </Container>
    );
  }


  // Filtrar productos relacionados de la misma categoría (Fig. 9)
  const productosRelacionados = PRODUCTOS.filter(
    (p) => p.categoria === producto.categoria && String(p.id) !== String(producto.id)
  ).slice(0, 4);


  const handleAgregar = () => {
    if (cantidad < 1) return;
    for (let i = 0; i < cantidad; i++) {
      agregarAlCarrito(producto);
    }
    setMensaje(`¡Agregado(s) ${cantidad} unidad(es) de "${producto.nombre}" al carrito!`);
    setTimeout(() => setMensaje(''), 3000);
  };


  return (
    <Container className="my-5">
      {/* Breadcrumb segun Fig. 9 */}
      <Breadcrumb className="mb-4">
        <Breadcrumb.Item linkAs={Link} linkProps={{ to: '/' }}>Inicio</Breadcrumb.Item>
        <Breadcrumb.Item linkAs={Link} linkProps={{ to: '/catalogo' }}>Catálogo</Breadcrumb.Item>
        <Breadcrumb.Item active>{producto.categoria}</Breadcrumb.Item>
        <Breadcrumb.Item active>{producto.nombre}</Breadcrumb.Item>
      </Breadcrumb>


      <Card className="shadow-sm p-4 border-0 bg-white mb-5">
        <Card.Body>
          <Row className="g-4 align-items-center">
            {/* Imagen del Producto segun Fig. 9 */}
            <Col md={5} className="text-center">
              <img
                src={producto.imagen || 'https://placehold.co/500x350?text=Ferreteria+Los+Maestros'}
                alt={producto.nombre}
                className="img-fluid rounded border p-2 mw-100"
              />
            </Col>


            <Col md={7} className="ps-md-4">
              <div className="mb-3">
                <EtiquetaCategoria texto={producto.categoria || 'General'} bg="primary" />
                {producto.subcategoria && (
                  <span className="ms-2 text-muted fw-semibold">/ {producto.subcategoria}</span>
                )}
              </div>


              <h2 className="fw-bold text-dark mb-3">{producto.nombre}</h2>
              <p className="text-secondary mb-1">
                <strong>Marca:</strong> {producto.marca || 'N/A'}
              </p>
              <p className="text-secondary mb-3">
                <strong>Unidad de medida:</strong> {producto.unidad || 'Unidad'}
              </p>


              <h3 className="text-success fw-bold mb-3 display-6">
                ${producto.precio ? producto.precio.toLocaleString('es-CL') : 0}
              </h3>


              <p className="fs-6 mb-3">
                <strong>Stock disponible:</strong>{' '}
                <span className={producto.stock <= (producto.stockMinimo || 5) ? 'text-danger fw-bold' : 'text-dark'}>
                  {producto.stock} unidades
                </span>
              </p>


              {/* Selector de Cantidad segun Fig. 9 */}
              <div className="d-flex align-items-center gap-2 mb-4">
                <strong className="me-2">Cantidad:</strong>
                <Button
                  variant="outline-secondary"
                  size="sm"
                  onClick={() => setCantidad((c) => Math.max(1, c - 1))}
                >
                  -
                </Button>
                <Form.Control
                  type="number"
                  size="sm"
                  value={cantidad}
                  onChange={(e) => setCantidad(Math.max(1, parseInt(e.target.value) || 1))}
                  className="text-center fw-bold w-25"
                />
                <Button
                  variant="outline-secondary"
                  size="sm"
                  onClick={() => setCantidad((c) => c + 1)}
                >
                  +
                </Button>
              </div>


              <div className="d-flex gap-2">
                <Button
                  variant="primary"
                  size="lg"
                  className="px-4 fw-bold"
                  onClick={handleAgregar}
                >
                  🛒 Agregar al Carrito
                </Button>
                <Button as={Link} to="/catalogo" variant="outline-secondary" size="lg">
                  Volver al Catálogo
                </Button>
              </div>


              {mensaje && (
                <Alert variant="success" className="mt-3 py-2 text-center fw-bold mb-0">
                  {mensaje}
                </Alert>
              )}
            </Col>
          </Row>
        </Card.Body>
      </Card>


      {/* Productos Relacionados segun Fig. 9 */}
      {productosRelacionados.length > 0 && (
        <div className="pt-3">
          <h4 className="fw-bold text-dark mb-4">Productos Relacionados</h4>
          <Row className="g-3">
            {productosRelacionados.map((rel) => (
              <Col key={rel.id} xs={12} sm={6} md={3}>
                <Card className="h-100 border-0 shadow-sm">
                  <Card.Img
                    variant="top"
                    src={rel.imagen || 'https://placehold.co/300x200?text=Producto'}
                    alt={rel.nombre}
                  />
                  <Card.Body className="d-flex flex-column justify-content-between p-3">
                    <div>
                      <Card.Title className="h6 fw-bold mb-2">{rel.nombre}</Card.Title>
                      <p className="fw-bold text-primary mb-2">
                        ${rel.precio?.toLocaleString('es-CL')}
                      </p>
                    </div>
                    <Button
                      as={Link}
                      to={`/producto/${rel.id}`}
                      variant="outline-primary"
                      size="sm"
                      className="w-100 mt-2"
                    >
                      Ver Detalle
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      )}
    </Container>
  );
}


export default DetalleProductoPage;
