// Desarrollado por: Jonathan Ulloa (src/pages/Home.jsx)

import React from 'react';
import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useCarrito } from '../context/CarritoContext';
import { PRODUCTOS } from '../data/productos';

export function Home() {
    const { agregarAlCarrito } = useCarrito();

    const productosDestacados = PRODUCTOS.filter((p) => p.destacado);

    return (
        <div className="bg-light pb-5">
            {/* Hero Principal Oscuro */}
            <section className="bg-dark text-white py-5 mb-4 border-bottom border-warning border-3 hero-banner-dark">
                <Container>
                    <Row className="align-items-center gy-4 py-3">
                        <Col lg={7}>
                            <Badge bg="warning" text="dark" className="fw-bold mb-3 px-3 py-2 text-uppercase">
                                La Serena & Coquimbo
                            </Badge>
                            <h1 className="display-4 fw-black text-white mb-3">
                                Todo lo que necesitas, en un solo lugar.
                            </h1>
                            <p className="lead text-gray-300 mb-4 hero-lead-text">
                                Materiales de construcción, herramientas y todo para tus proyectos con calidad, rapidez y confianza garantizada.
                            </p>
                            <div className="d-flex gap-3">
                                <Button as={Link} to="/catalogo" variant="warning" size="lg" className="fw-bold px-4 shadow text-dark">
                                    Ver Ofertas
                                </Button>
                                <Button as={Link} to="/contacto" variant="outline-light" size="lg" className="px-4">
                                    Cotizar Empresa
                                </Button>
                            </div>
                        </Col>

                        <Col lg={5}>
                            <Card className="bg-secondary bg-opacity-20 border-secondary text-white p-4 shadow-lg rounded-3">
                                <Card.Body className="d-flex align-items-center justify-content-between gap-3">
                                    <div>
                                        <h5 className="fw-bold text-warning mb-1">🚚 Envíos Rápidos</h5>
                                        <p className="small mb-0 text-gray-300">Entregas el mismo día para compras realizadas antes de las 14:00 hrs.</p>
                                    </div>
                                    <span className="display-4">🪖</span>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* Barra de Beneficios */}
            <Container className="mb-5">
                <Row className="g-3 text-center">
                    <Col xs={6} md={3}>
                        <div className="bg-white p-3 rounded shadow-sm border h-100 d-flex align-items-center justify-content-center gap-2">
                            <span className="fs-3">🛡️</span>
                            <div className="text-start">
                                <strong className="d-block text-dark small">Calidad Garantizada</strong>
                                <span className="text-muted extra-small">Productos de alto rendimiento</span>
                            </div>
                        </div>
                    </Col>
                    <Col xs={6} md={3}>
                        <div className="bg-white p-3 rounded shadow-sm border h-100 d-flex align-items-center justify-content-center gap-2">
                            <span className="fs-3">🏷️</span>
                            <div className="text-start">
                                <strong className="d-block text-dark small">Precios Justos</strong>
                                <span className="text-muted extra-small">Ofertas reales todos los días</span>
                            </div>
                        </div>
                    </Col>
                    <Col xs={6} md={3}>
                        <div className="bg-white p-3 rounded shadow-sm border h-100 d-flex align-items-center justify-content-center gap-2">
                            <span className="fs-3">🚚</span>
                            <div className="text-start">
                                <strong className="d-block text-dark small">Despacho Rápido</strong>
                                <span className="text-muted extra-small">Entregas directas en faena</span>
                            </div>
                        </div>
                    </Col>
                    <Col xs={6} md={3}>
                        <div className="bg-white p-3 rounded shadow-sm border h-100 d-flex align-items-center justify-content-center gap-2">
                            <span className="fs-3">🎧</span>
                            <div className="text-start">
                                <strong className="d-block text-dark small">Atención Experta</strong>
                                <span className="text-muted extra-small">Asesoría para tu proyecto</span>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>

            {/* Banner de Ofertas */}
            <Container className="mb-5">
                <div className="bg-warning rounded-3 p-4 shadow-sm d-flex flex-column flex-md-row align-items-center justify-content-between gap-3">
                    <div className="d-flex align-items-center gap-3">
                        <span className="fs-1">🏷️</span>
                        <div>
                            <h3 className="fw-black text-dark mb-0">OFERTAS DE LA SEMANA</h3>
                            <p className="mb-0 text-dark opacity-75">Descuentos exclusivos en productos seleccionados. ¡Aprovecha hoy!</p>
                        </div>
                    </div>
                    <Button as={Link} to="/catalogo" variant="dark" className="fw-bold px-4 py-2">
                        Ver Ofertas
                    </Button>
                </div>
            </Container>

            {/* Productos Destacados */}
            <Container className="mb-5">
                <div className="text-center mb-4">
                    <h2 className="fw-bold text-dark">Productos Destacados</h2>
                    <p className="text-muted">Los materiales y herramientas más solicitados de la región.</p>
                </div>

                <Row className="gy-4">
                    {productosDestacados.map((prod) => {
                        const precioOferta = prod.precio;
                        const precioOriginal = Math.round(precioOferta * 1.15);
                        const porcentajeDcto = Math.round(((precioOriginal - precioOferta) / precioOriginal) * 100);

                        return (
                            <Col key={prod.id} xs={12} sm={6} md={3}>
                                <Card className="h-100 border-0 shadow-sm position-relative overflow-hidden">
                                    <Badge bg="warning" text="dark" className="position-absolute top-0 start-0 m-2 fw-bold shadow-sm z-1">
                                        -{porcentajeDcto}%
                                    </Badge>

                                    <div className="position-relative bg-white rounded-top d-flex align-items-center justify-content-center p-3 product-card-img-container">
                                        <Card.Img
                                            variant="top"
                                            src={prod.imagen || '/img/shopping.webp'}
                                            alt={prod.nombre}
                                            className="product-card-img"
                                            onError={(e) => {
                                                e.target.onerror = null;
                                                e.target.src = '/img/shopping.webp';
                                            }}
                                        />
                                    </div>

                                    <Card.Body className="d-flex flex-column justify-content-between p-3">
                                        <div>
                                            <span className="text-muted extra-small d-block mb-1">{prod.categoria}</span>
                                            <Card.Title className="h6 fw-bold mb-2 text-dark text-truncate" title={prod.nombre}>
                                                {prod.nombre}
                                            </Card.Title>

                                            <div className="d-flex align-items-baseline gap-2 mb-3">
                                                <span className="fw-bold text-dark fs-5">
                                                    ${precioOferta.toLocaleString('es-CL')}
                                                </span>
                                                <span className="text-muted text-decoration-line-through small">
                                                    ${precioOriginal.toLocaleString('es-CL')}
                                                </span>
                                            </div>
                                        </div>

                                        <div className="d-grid gap-2">
                                            <Button
                                                variant="warning"
                                                size="sm"
                                                className="fw-bold text-dark d-flex align-items-center justify-content-center gap-1"
                                                onClick={() => agregarAlCarrito(prod)}
                                            >
                                                🛒 Agregar al carrito
                                            </Button>
                                            <Button
                                                as={Link}
                                                to={`/producto/${prod.id}`}
                                                variant="outline-secondary"
                                                size="sm"
                                            >
                                                Ver Detalle
                                            </Button>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                        );
                    })}
                </Row>
            </Container>

            {/* Bloques de Contacto y Empresa B2B */}
            <Container>
                <Row className="g-3">
                    <Col md={4}>
                        <div className="bg-dark text-white p-4 rounded-3 h-100 d-flex flex-column justify-content-between border-top border-warning border-3">
                            <div>
                                <h5 className="fw-bold text-warning mb-2">🏭 ¿Eres Constructor o Empresa?</h5>
                                <p className="small text-gray-300">Accede a precios preferenciales y atención especializada en ventas por volumen.</p>
                            </div>
                            <Button as={Link} to="/contacto" variant="outline-light" size="sm" className="w-100 fw-bold mt-3">
                                Cotiza Ahora
                            </Button>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className="bg-dark text-white p-4 rounded-3 h-100 d-flex flex-column justify-content-between border-top border-warning border-3">
                            <div>
                                <h5 className="fw-bold text-warning mb-2">💬 ¿Dudas? Escríbenos</h5>
                                <p className="small text-gray-300">Te ayudamos a encontrar exactamente lo que necesitas para tu obra.</p>
                            </div>
                            <Button href="https://wa.me/56912345678" target="_blank" rel="noopener noreferrer" variant="warning" size="sm" className="w-100 fw-bold text-dark mt-3">
                                Chatear Ahora
                            </Button>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className="bg-dark text-white p-4 rounded-3 h-100 d-flex flex-column justify-content-between border-top border-warning border-3">
                            <div>
                                <h5 className="fw-bold text-warning mb-2">🏬 Visítanos en Tienda</h5>
                                <p className="small text-gray-300">Estamos ubicados en La Serena. ¡Te esperamos con el mejor stock!</p>
                            </div>
                            {/* Enlace directo a Google Maps con la ubicación de La Serena */}
                            <Button
                                href="https://maps.google.com/?q=Av.+Francisco+de+Aguirre+123,+La+Serena,+Coquimbo"
                                target="_blank"
                                rel="noopener noreferrer"
                                variant="outline-light"
                                size="sm"
                                className="w-100 fw-bold mt-3"
                            >
                                Ver Ubicación
                            </Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Home;