// Desarrollado por: Jonathan Ulloa (src/components/organisms/FooterApp.jsx)

import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';

export function FooterApp() {
    const [email, setEmail] = useState('');
    const [mensaje, setMensaje] = useState(null);
    const location = useLocation();

    // Resetea el mensaje y el input automáticamente al cambiar de página
    useEffect(() => {
        setMensaje(null);
        setEmail('');
    }, [location.pathname]);

    // Función auxiliar para borrar las alertas automáticamente tras 3.5 segundos
    const mostrarAlertaTemporal = (tipo, texto) => {
        setMensaje({ tipo, texto });
        setTimeout(() => {
            setMensaje(null);
        }, 3500);
    };

    const handleSubscribe = (e) => {
        e.preventDefault();

        // Validación de campo vacío
        if (email.trim() === '') {
            mostrarAlertaTemporal('warning', 'Por favor, ingresa tu correo electrónico.');
            return;
        }

        // Validación de formato de correo
        if (!email.includes('@') || !email.includes('.')) {
            mostrarAlertaTemporal('warning', 'Por favor, ingresa un correo electrónico válido.');
            return;
        }

        // Suscripción exitosa
        mostrarAlertaTemporal('success', `¡Gracias por suscribirte! Enviaremos nuestras ofertas a: ${email}`);
        setEmail('');
    };

    return (
        <footer className="bg-dark text-white pt-5 pb-3 mt-auto border-top border-warning border-3">
            <Container>
                <Row className="gy-4">
                    <Col md={4}>
                        <h5 className="fw-bold text-warning mb-3">🛠️ Ferretería Los Maestros</h5>
                        <p className="small text-gray-300 mb-3">
                            Soluciones integrales en materiales de construcción, herramientas, gasfitería y pinturas.
                        </p>
                        <p className="small text-gray-300 mb-1">📍 Av. Francisco de Aguirre 123, La Serena, Chile</p>
                        <p className="small text-gray-300 mb-0">✉️ contacto@losmaestros.cl</p>
                    </Col>

                    <Col md={4} className="text-md-center">
                        <h6 className="fw-bold text-light mb-3">Navegación Rápida</h6>
                        <ul className="list-unstyled mb-0 small d-flex flex-column gap-2">
                            <li><Link to="/" className="text-gray-300 text-decoration-none">Inicio</Link></li>
                            <li><Link to="/catalogo" className="text-gray-300 text-decoration-none">Catálogo Oficial</Link></li>
                            <li><Link to="/nosotros" className="text-gray-300 text-decoration-none">Nosotros</Link></li>
                            <li><Link to="/blogs" className="text-gray-300 text-decoration-none">Blogs</Link></li>
                            <li><Link to="/contacto" className="text-gray-300 text-decoration-none">Contacto</Link></li>
                        </ul>
                    </Col>

                    <Col md={4}>
                        <h6 className="fw-bold text-light mb-3 text-md-end">Suscríbete al Newsletter</h6>

                        <Form className="d-flex gap-2" onSubmit={handleSubscribe} noValidate>
                            <Form.Control
                                type="email"
                                placeholder="Tu correo electrónico"
                                size="sm"
                                className="border-0 shadow-none"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <Button type="submit" variant="warning" size="sm" className="fw-bold text-dark px-3">
                                Suscribir
                            </Button>
                        </Form>

                        {mensaje && (
                            <Alert variant={mensaje.tipo} className="mt-3 py-2 px-3 small text-center mb-0 text-dark fw-bold">
                                {mensaje.texto}
                            </Alert>
                        )}

                        <p className="small text-gray-300 mt-2 text-start text-md-end">
                            Recibe ofertas exclusivas y novedades en tu correo.
                        </p>
                    </Col>
                </Row>

                <hr className="border-secondary my-4" />

                <Row>
                    <Col className="text-center">
                        <small className="text-gray-300">
                            © 2026 Ferretería Los Maestros - La Serena, Chile. Todos los derechos reservados.
                        </small>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default FooterApp;