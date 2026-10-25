// Desarrollado por: Jonathan Ulloa (src/components/organisms/FooterApp.jsx)

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export function FooterApp() {
    return (
        <footer className="bg-dark text-white pt-4 pb-3 mt-auto">
            <Container>
                <Row className="gy-3">
                    <Col md={4}>
                        <h5 className="fw-bold text-warning">🛠️ Ferretería Los Maestros</h5>
                        <p className="small text-muted mb-0">
                            Soluciones integrales en materiales de construcción, herramientas, gasfitería y pinturas.
                        </p>
                    </Col>
                    <Col md={4} className="text-md-center">
                        <h6 className="fw-bold text-light">Navegación Rápida</h6>
                        <ul className="list-unstyled mb-0 small">
                            <li><Link to="/" className="text-white-50 text-decoration-none">Inicio</Link></li>
                            <li><Link to="/catalogo" className="text-white-50 text-decoration-none">Catálogo Oficial</Link></li>
                            <li><Link to="/login" className="text-white-50 text-decoration-none">Acceso Personal</Link></li>
                        </ul>
                    </Col>
                    <Col md={4} className="text-md-end">
                        <h6 className="fw-bold text-light">Atención al Cliente</h6>
                        <p className="small text-white-50 mb-1">📍 Av. Las Condes 1234, Santiago, Chile</p>
                        <p className="small text-white-50 mb-0">✉️ contacto@losmaestros.cl</p>
                    </Col>
                </Row>
                <hr className="border-secondary my-3" />
                <Row>
                    <Col className="text-center">
                        <small className="text-white-50">
                            © 2026 Ferretería Los Maestros - Todos los derechos reservados.
                        </small>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default FooterApp;