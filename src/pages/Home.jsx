// Desarrollado por: Jonathan Ulloa (src/pages/Home.jsx)
import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export function Home() {
    return (
        <Container className="my-5">
            {/* Banner de Bienvenida estilo Cyber / Ofertas */}
            <div className="p-5 mb-5 bg-primary text-white rounded-3 shadow-sm text-center">
                <h1 className="display-4 fw-bold">¡Grandes Ofertas en Ferretería!</h1>
                <p className="lead">
                    Encuentra los mejores materiales de construcción, herramientas y gasfitería al mejor precio.
                </p>
                <Button as={Link} to="/catalogo" variant="warning" size="lg" className="fw-bold mt-2">
                    Ver Catálogo Completo
                </Button>
            </div>

            {/* Categorías Destacadas */}
            <h2 className="fw-bold mb-4 text-center">Categorías Destacadas</h2>
            <Row className="g-4">
                <Col md={4}>
                    <Card className="h-100 shadow-sm text-center p-3 border-0 bg-light">
                        <Card.Body>
                            <Card.Title as="h4" className="text-primary fw-bold">
                                Herramientas
                            </Card.Title>
                            <Card.Text className="text-muted">
                                Taladros, martillos, llaves y más equipo profesional.
                            </Card.Text>
                            <Button as={Link} to="/catalogo" variant="outline-primary" size="sm" className="mt-2">
                                Explorar
                            </Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card className="h-100 shadow-sm text-center p-3 border-0 bg-light">
                        <Card.Body>
                            <Card.Title as="h4" className="text-primary fw-bold">
                                Mat. Construcción
                            </Card.Title>
                            <Card.Text className="text-muted">
                                Cemento, morteros, bloques, yeso y obra gruesa.
                            </Card.Text>
                            <Button as={Link} to="/catalogo" variant="outline-primary" size="sm" className="mt-2">
                                Explorar
                            </Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card className="h-100 shadow-sm text-center p-3 border-0 bg-light">
                        <Card.Body>
                            <Card.Title as="h4" className="text-primary fw-bold">
                                Pinturas
                            </Card.Title>
                            <Card.Text className="text-muted">
                                Látex, esmaltes y barnices para interiores y exteriores.
                            </Card.Text>
                            <Button as={Link} to="/catalogo" variant="outline-primary" size="sm" className="mt-2">
                                Explorar
                            </Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default Home;