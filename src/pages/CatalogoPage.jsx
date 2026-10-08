import { Container, Row, Col } from 'react-bootstrap';
import { productosIniciales } from '../data/productos';
import { TarjetaProducto } from '../components/molecules/TarjetaProducto';
import { NavbarApp } from '../components/organisms/NavbarApp';

export function CatalogoPage() {
  return (
    <div className="bg-light min-vh-100">
      <NavbarApp />
      <Container className="py-5">
        <h2 className="fw-bold mb-4">Catálogo de Productos</h2>
        <Row xs={1} md={2} lg={4} className="g-4">
          {productosIniciales.map((prod) => (
            <Col key={prod.id}>
              <TarjetaProducto producto={prod} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}