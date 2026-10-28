// Desarrollado por: Sebastián Maquera (src/pages/CatalogoPage.jsx)

import React, { useState } from 'react';
import { Container, Row, Col, Button, Card, Badge } from 'react-bootstrap';
import { TarjetaProducto } from '../components/molecules/TarjetaProducto';
import { BuscadorProductos } from '../components/molecules/BuscadorProductos';
import { CATEGORIAS } from '../data/productos';
import { useProductos } from '../context/ProductosContext';

export function CatalogoPage() {
  const { productos } = useProductos();
  const [busqueda, setBusqueda] = useState('');
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('Todas');

  // Filtrado dinámico por término de búsqueda y categoría
  const productosFiltrados = productos.filter((prod) => {
    const coincideTexto =
      prod.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
      prod.categoria.toLowerCase().includes(busqueda.toLowerCase()) ||
      (prod.marca && prod.marca.toLowerCase().includes(busqueda.toLowerCase()));

    const coincideCategoria =
      categoriaSeleccionada === 'Todas' || prod.categoria === categoriaSeleccionada;

    return coincideTexto && coincideCategoria;
  });

  return (
    <div className="bg-light pb-5 min-vh-100">
      {/* Encabezado Industrial Oscuro Unificado */}
      <div className="bg-dark text-white py-4 mb-4 border-bottom border-warning border-3">
        <Container>
          <div className="text-center">
            <h1 className="fw-black mb-2 text-white">Catálogo Oficial</h1>
            <p className="text-gray-300 mb-0">Encuentra los mejores productos y herramientas para tus proyectos</p>
          </div>
        </Container>
      </div>

      <Container>
        {/* Panel de Búsqueda y Filtros en Píldoras */}
        <Card className="border-0 shadow-sm p-3 mb-4 rounded-3 bg-white">
          <Row className="g-3 align-items-center">
            <Col xs={12}>
              <BuscadorProductos
                valor={busqueda}
                onChange={(e) => setBusqueda(e.target.value)}
              />
            </Col>
          </Row>

          {/* Botones de Selección Rápida por Categoría */}
          <div className="d-flex flex-wrap gap-2 mt-3 pt-3 border-top">
            {CATEGORIAS.map((cat) => (
              <Button
                key={cat}
                variant={categoriaSeleccionada === cat ? 'warning' : 'outline-dark'}
                size="sm"
                className={`fw-bold ${categoriaSeleccionada === cat ? 'text-dark shadow-sm' : ''}`}
                onClick={() => setCategoriaSeleccionada(cat)}
              >
                {cat}
              </Button>
            ))}
          </div>
        </Card>

        {/* Resumen de Filtros */}
        <div className="d-flex justify-content-between align-items-center mb-3">
          <span className="text-muted small">
            Mostrando <strong>{productosFiltrados.length}</strong> productos
            {categoriaSeleccionada !== 'Todas' && (
              <> en <Badge bg="warning" text="dark">{categoriaSeleccionada}</Badge></>
            )}
          </span>
          {(categoriaSeleccionada !== 'Todas' || busqueda) && (
            <Button
              variant="link"
              size="sm"
              className="text-danger p-0 text-decoration-none fw-bold"
              onClick={() => {
                setCategoriaSeleccionada('Todas');
                setBusqueda('');
              }}
            >
              Limpiar Filtros
            </Button>
          )}
        </div>

        {/* Grilla de Productos */}
        <Row className="gy-4">
          {productosFiltrados.length > 0 ? (
            productosFiltrados.map((prod) => (
              <Col key={prod.id} xs={12} sm={6} md={4} lg={3}>
                <TarjetaProducto producto={prod} />
              </Col>
            ))
          ) : (
            <Col xs={12}>
              <div className="text-center py-5 bg-white rounded shadow-sm">
                <span className="display-4 d-block mb-3">🔍</span>
                <h4 className="fw-bold text-dark">No se encontraron productos</h4>
                <p className="text-muted">Intenta buscar con otros términos o selecciona otra categoría.</p>
                <Button
                  variant="warning"
                  className="fw-bold text-dark mt-2"
                  onClick={() => {
                    setCategoriaSeleccionada('Todas');
                    setBusqueda('');
                  }}
                >
                  Ver Todo el Catálogo
                </Button>
              </div>
            </Col>
          )}
        </Row>
      </Container>
    </div>
  );
}

export default CatalogoPage;