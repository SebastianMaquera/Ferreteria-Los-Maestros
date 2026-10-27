// Desarrollado por: Sebastián Maquera (src/pages/NosotrosPage.jsx)

import React from 'react';
import { Container, Row, Col, Card, Badge } from 'react-bootstrap';

export function NosotrosPage() {
    const desarrolladores = [
        {
            iniciales: 'JU',
            nombre: 'Jonathan Ulloa',
            rol: 'Coordinador General & Lead Layout'
        },
        {
            iniciales: 'CA',
            nombre: 'Camilo Alarcón',
            rol: 'Desarrollador FullStack & Datos'
        },
        {
            iniciales: 'SM',
            nombre: 'Sebastián Maquera',
            rol: 'Desarrollador Frontend UI/UX'
        }
    ];

    return (
        <div className="bg-light pb-5 min-vh-100">
            {/* Encabezado Industrial Oscuro Unificado (Sin imagen) */}
            <div className="bg-dark text-white py-5 mb-5 border-bottom border-warning border-3">
                <Container className="text-center py-2">
                    <Badge bg="warning" text="dark" className="fw-bold mb-3 px-3 py-2 text-uppercase">
                        22 Años en La Serena & Coquimbo
                    </Badge>
                    <h1 className="display-4 fw-black text-white mb-2">
                        🏢 Sobre Ferretería Los Maestros
                    </h1>
                    <p className="lead text-gray-300 mb-0 max-w-600 mx-auto">
                        Somos un negocio familiar con más de 22 años de trayectoria, sirviendo a contratistas,
                        maestros de obra y familias de la región.
                    </p>
                </Container>
            </div>

            <Container>
                {/* Sección 1: Historia y Cobertura */}
                <Row className="gy-4 mb-5">
                    <Col md={6}>
                        <Card className="h-100 shadow-sm border-0 bg-white border-start border-warning border-4 hover-scale">
                            <Card.Body className="p-4">
                                <h4 className="fw-bold text-dark mb-3">🛠️ Nuestra Historia y Equipo de Tienda</h4>
                                <p className="text-muted mb-3">
                                    Atendida con dedicación por su dueño, su hijo y dos empleados de planta, Ferretería Los Maestros
                                    ha construido su reputación sobre la confianza, la rapidez de atención en mesón y un catálogo con más de
                                    800 referencias esenciales para la construcción y el hogar.
                                </p>
                                <p className="text-muted mb-0">
                                    Desde herramientas manuales y eléctricas hasta materiales pesados de obra gruesa, gasfitería,
                                    electricidad y pinturas, acompañamos cada etapa de tus proyectos con atención personalizada.
                                </p>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col md={6}>
                        <Card className="h-100 shadow-sm border-0 bg-white border-start border-warning border-4 hover-scale">
                            <Card.Body className="p-4">
                                <h4 className="fw-bold text-dark mb-3">📍 Cobertura y Servicio</h4>
                                <ul className="list-unstyled text-muted d-flex flex-column gap-3 mb-0">
                                    <li>📌 <strong>Ubicación:</strong> La Serena, Región de Coquimbo.</li>
                                    <li>👥 <strong>Atención:</strong> Clientes particulares y Contratistas con Cuenta Corriente.</li>
                                    <li>📦 <strong>Catálogo:</strong> Más de 800 productos con control de stock en tiempo real.</li>
                                    <li>⚡ <strong>Compromiso:</strong> Evitar esperas telefónicas y asegurar la disponibilidad directa de materiales para tus obras.</li>
                                </ul>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

                <hr className="my-5 border-secondary" />

                {/* Sección 2: Equipo de Desarrollo */}
                <Row className="justify-content-center text-center mb-4">
                    <Col lg={8}>
                        <h3 className="fw-bold text-dark mb-2">🧑‍💻 Equipo de Desarrollo</h3>
                        <p className="text-muted">
                            Estudiantes a cargo del diseño, estructuración e integración digital del sistema de gestión y tienda online.
                        </p>
                    </Col>
                </Row>

                <Row className="gy-4 justify-content-center">
                    {desarrolladores.map((dev, idx) => (
                        <Col key={idx} xs={12} sm={6} md={4}>
                            <Card className="h-100 shadow-sm border-0 text-center bg-white p-3 hover-scale">
                                <Card.Body className="p-3 d-flex flex-column align-items-center justify-content-center">
                                    <Badge bg="warning" text="dark" className="fs-4 px-3 py-2 mb-3 fw-bold">
                                        {dev.iniciales}
                                    </Badge>
                                    <h5 className="fw-bold text-dark mb-1">{dev.nombre}</h5>
                                    <small className="text-muted">{dev.rol}</small>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
}

export default NosotrosPage;