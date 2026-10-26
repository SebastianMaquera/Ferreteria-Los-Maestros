import React, { useState } from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import { TarjetaProducto } from '../components/molecules/TarjetaProducto';
import { BuscadorProductos } from '../components/molecules/BuscadorProductos';
import { PRODUCTOS, CATEGORIAS } from '../data/productos';


export function CatalogoPage() {
  const [busqueda, setBusqueda] = useState('');
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('Todas');


  // Filtrado dinámico por término de búsqueda y categoría
  const productosFiltrados = PRODUCTOS.filter((prod) => {
    const coincideTexto = prod.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
      prod.categoria.toLowerCase().includes(busqueda.toLowerCase());
    const coincideCategoria = categoriaSeleccionada === 'Todas' || prod.categoria === categoriaSeleccionada;


    return coincideTexto && coincideCategoria;
  });


  return (
    <Container className="my-4">
      <h2 className="text-center fw-bold text-primary mb-2">Catálogo Oficial</h2>
      <p className="text-center text-muted mb-4">Encuentra los mejores productos y herramientas</p>


      {/* Buscador y Filtro por Categorías */}
      <Row className="justify-content-center mb-4 g-3">
        <Col md={7}>
          <BuscadorProductos
            valor={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
            onBuscar={() => { }}
          />
        </Col>
        <Col md={3}>
          <Form.Select
            value={categoriaSeleccionada}
            onChange={(e) => setCategoriaSeleccionada(e.target.value)}
            aria-label="Filtrar por categoría"
          >
            {CATEGORIAS.map((cat, idx) => (
              <option key={idx} value={cat}>
                {cat}
              </option>
            ))}
          </Form.Select>
        </Col>
      </Row>


      {/* Grilla de Productos */}
      <Row>
        {productosFiltrados.length > 0 ? (
          productosFiltrados.map((prod) => (
            <Col key={prod.id} xs={12} md={6} lg={4} className="mb-4">
              <TarjetaProducto producto={prod} />
            </Col>
          ))
        ) : (
          <Col xs={12}>
            <p className="text-center text-muted fs-5 my-5">
              No se encontraron productos que coincidan con la búsqueda.
            </p>
          </Col>
        )}
      </Row>
    </Container>
  );
}


export default CatalogoPage;
