// Desarrollado por: Sebastián Maquera (src/pages/DetalleProductoPage.jsx)

import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Container, Card, Row, Col, Button, Form, Alert, Breadcrumb } from 'react-bootstrap';
import { EtiquetaCategoria } from '../components/atoms/EtiquetaCategoria';
import { TarjetaProducto } from '../components/molecules/TarjetaProducto';
import { useProductos } from '../context/ProductosContext';
import { useCarrito } from '../context/CarritoContext';

export function DetalleProductoPage() {
  const { id } = useParams();
  const { productos } = useProductos();
  const producto = productos.find((p) => String(p.id) === String(id));
  const { carrito, agregarAlCarrito } = useCarrito();

  const [cantidad, setCantidad] = useState(1);
  const [mensaje, setMensaje] = useState({ tipo: '', texto: '' });

  // Calcular la cantidad que el usuario YA tiene agregada en su carrito de este producto
  const itemEnCarrito = carrito?.find((item) => String(item.id) === String(producto?.id));
  const cantidadEnCarrito = itemEnCarrito ? (itemEnCarrito.cantidad || 1) : 0;

  // Stock remanente real disponible para agregar
  const stockTotal = producto ? (producto.stock || 0) : 0;
  const stockDisponible = Math.max(0, stockTotal - cantidadEnCarrito);

  // Reajustar la cantidad inicial si el stock disponible cambia o es menor que 1
  useEffect(() => {
    if (stockDisponible <= 0) {
      setCantidad(0);
    } else if (cantidad > stockDisponible) {
      setCantidad(stockDisponible);
    } else if (cantidad < 1 && stockDisponible > 0) {
      setCantidad(1);
    }
  }, [stockDisponible]);

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

  // Filtrar productos relacionados de la misma categoría
  const productosRelacionados = productos.filter(
    (p) => p.categoria === producto.categoria && String(p.id) !== String(producto.id)
  ).slice(0, 4);

  const handleCantidadChange = (e) => {
    const valorInput = parseInt(e.target.value, 10);
    if (isNaN(valorInput) || valorInput < 1) {
      setCantidad(1);
    } else if (valorInput > stockDisponible) {
      setCantidad(stockDisponible);
      setMensaje({
        tipo: 'warning',
        texto: `Solo puedes agregar hasta ${stockDisponible} unidad(es) adicionales debido al stock disponible.`
      });
      setTimeout(() => setMensaje({ tipo: '', texto: '' }), 3000);
    } else {
      setCantidad(valorInput);
    }
  };

  const handleAgregar = () => {
    if (stockDisponible <= 0) {
      setMensaje({
        tipo: 'danger',
        texto: '❌ Has alcanzado el límite máximo de stock disponible para este producto en tu carrito.'
      });
      setTimeout(() => setMensaje({ tipo: '', texto: '' }), 3500);
      return;
    }

    if (cantidad < 1 || cantidad > stockDisponible) {
      setMensaje({
        tipo: 'danger',
        texto: `❌ La cantidad debe estar entre 1 y ${stockDisponible} unidades.`
      });
      setTimeout(() => setMensaje({ tipo: '', texto: '' }), 3500);
      return;
    }

    for (let i = 0; i < cantidad; i++) {
      agregarAlCarrito(producto);
    }

    setMensaje({
      tipo: 'success',
      texto: `🎉 ¡Agregado(s) ${cantidad} unidad(es) de "${producto.nombre}" al carrito!`
    });

    setTimeout(() => setMensaje({ tipo: '', texto: '' }), 3000);
  };

  return (
    <Container className="my-5">
      {/* Breadcrumb */}
      <Breadcrumb className="mb-4">
        <Breadcrumb.Item linkAs={Link} linkProps={{ to: '/' }}>Inicio</Breadcrumb.Item>
        <Breadcrumb.Item linkAs={Link} linkProps={{ to: '/catalogo' }}>Catálogo</Breadcrumb.Item>
        <Breadcrumb.Item active>{producto.categoria}</Breadcrumb.Item>
        <Breadcrumb.Item active>{producto.nombre}</Breadcrumb.Item>
      </Breadcrumb>

      <Card className="shadow-sm p-4 border-0 bg-white mb-5">
        <Card.Body>
          <Row className="g-4 align-items-center">
            {/* Imagen del Producto (Cero atributos style en linea) */}
            <Col md={5} className="text-center">
              <img
                src={producto.imagen || '/img/shopping.webp'}
                alt={producto.nombre}
                width="350"
                height="350"
                className="img-fluid rounded border p-2 mw-100 object-fit-contain"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = '/img/shopping.webp';
                }}
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

              <div className="mb-3">
                <p className="fs-6 mb-1">
                  <strong>Stock Total en Bodega:</strong>{' '}
                  <span className={stockTotal <= (producto.stockMinimo || 5) ? 'text-danger fw-bold' : 'text-dark'}>
                    {stockTotal} unidades
                  </span>
                </p>

                {cantidadEnCarrito > 0 && (
                  <p className="small text-muted mb-1">
                    🛒 Ya tienes <strong>{cantidadEnCarrito}</strong> unidad(es) en tu carrito.
                  </p>
                )}

                <p className="fs-6 mb-0">
                  <strong>Disponibles para agregar:</strong>{' '}
                  <span className={stockDisponible === 0 ? 'text-danger fw-bold' : 'text-success fw-bold'}>
                    {stockDisponible} unidades
                  </span>
                </p>
              </div>

              {/* Selector de Cantidad con Control Estricto de Stock */}
              <div className="d-flex align-items-center gap-2 mb-4">
                <strong className="me-2">Cantidad:</strong>
                <Button
                  variant="outline-secondary"
                  size="sm"
                  onClick={() => setCantidad((c) => Math.max(1, c - 1))}
                  disabled={cantidad <= 1 || stockDisponible === 0}
                >
                  -
                </Button>
                <Form.Control
                  type="number"
                  size="sm"
                  min={stockDisponible > 0 ? 1 : 0}
                  max={stockDisponible}
                  value={cantidad}
                  onChange={handleCantidadChange}
                  disabled={stockDisponible === 0}
                  className="text-center fw-bold w-25"
                />
                <Button
                  variant="outline-secondary"
                  size="sm"
                  onClick={() => setCantidad((c) => Math.min(stockDisponible, c + 1))}
                  disabled={cantidad >= stockDisponible || stockDisponible === 0}
                >
                  +
                </Button>
              </div>

              <div className="d-flex gap-2 flex-wrap">
                <Button
                  variant="primary"
                  size="lg"
                  className="px-4 fw-bold"
                  onClick={handleAgregar}
                  disabled={stockDisponible === 0}
                >
                  🛒 Agregar al Carrito
                </Button>
                <Button as={Link} to="/catalogo" variant="outline-secondary" size="lg">
                  Volver al Catálogo
                </Button>
              </div>

              {mensaje.texto && (
                <Alert variant={mensaje.tipo} className="mt-3 py-2 text-center fw-bold mb-0 text-dark">
                  {mensaje.texto}
                </Alert>
              )}
            </Col>
          </Row>
        </Card.Body>
      </Card>

      {/* Productos Relacionados */}
      {productosRelacionados.length > 0 && (
        <div className="pt-3">
          <h4 className="fw-bold text-dark mb-4">Productos Relacionados</h4>
          <Row className="g-3">
            {productosRelacionados.map((rel) => (
              <Col key={rel.id} xs={12} sm={6} md={3}>
                <TarjetaProducto producto={rel} />
              </Col>
            ))}
          </Row>
        </div>
      )}
    </Container>
  );
}

export default DetalleProductoPage;