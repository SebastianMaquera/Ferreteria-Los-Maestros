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
        <Container className="py-5">
            {/* Sección 1: Historia y Negocio (Ferretería Los Maestros) */}
            <Row className="justify-content-center mb-5 text-center">
                <Col lg={10}>
                    <h2 className="fw-bold text-dark mb-3">🏬 Sobre Ferretería Los Maestros</h2>
                    <p className="lead text-muted mb-4">
                        Somos un negocio familiar con más de 22 años de trayectoria, sirviendo a contratistas,
                        maestros de obra y familias de La Serena y la Región de Coquimbo.
                    </p>
                </Col>
            </Row>


            <Row className="gy-4 mb-5">
                <Col md={6}>
                    <Card className="h-100 shadow-sm border-0 bg-light">
                        <Card.Body className="p-4">
                            <h4 className="fw-bold text-primary mb-3">🛠️ Nuestra Historia y Equipo de Tienda</h4>
                            <p className="text-muted">
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
                    <Card className="h-100 shadow-sm border-0 bg-light">
                        <Card.Body className="p-4">
                            <h4 className="fw-bold text-primary mb-3">📍 Cobertura y Servicio</h4>
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


            {/* Sección 2: Equipo de Desarrollo (Plataforma Digital) */}
            <Row className="justify-content-center text-center mb-4">
                <Col lg={8}>
                    <h3 className="fw-bold text-dark mb-2">🧑‍💻Equipo de Desarrollo</h3>
                    <p className="text-muted">
                        Estudiantes a cargo del diseño, estructuración e integración digital del sistema de gestión y tienda online.
                    </p>
                </Col>
            </Row>


            <Row className="gy-4 justify-content-center">
                {desarrolladores.map((dev, idx) => (
                    <Col key={idx} xs={12} sm={6} md={4}>
                        <Card className="h-100 shadow-sm border-0 text-center">
                            <Card.Body className="p-4 d-flex flex-column align-items-center justify-content-center">
                                <Badge pill bg="primary" className="fs-4 px-3 py-2 mb-3">
                                    {dev.iniciales}
                                </Badge>
                                <h5 className="fw-bold mb-1">{dev.nombre}</h5>
                                <small className="text-muted">{dev.rol}</small>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}


export default NosotrosPage;
