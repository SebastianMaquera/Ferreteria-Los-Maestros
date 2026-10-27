// Desarrollado por: Sebastián Maquera (src/pages/BlogsPage.jsx)

import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Modal, Badge } from 'react-bootstrap';

export function BlogsPage() {
    const [blogSeleccionado, setBlogSeleccionado] = useState(null);

    const blogs = [
        {
            id: 1,
            titulo: '¿Cómo evitar grietas y fisuras en el mortero durante días secos?',
            resumen: 'Técnicas recomendadas para aplicar morteros y hormigones en zonas costeras o semiáridas sin perder fraguado.',
            contenidoCompleto: 'En climas como el de La Serena, la combinación de viento costero y baja humedad acelera la evaporación del agua en las mezclas de cemento antes de que completen su hidratación. Para evitar que la mezcla se agriete, es clave humedecer los ladrillos o bloques antes de pegar, usar aditivos retenedores de agua y realizar un curado continuo con agua durante las primeras 48 horas tras la aplicación.',
            fecha: '20 Octubre, 2026',
            categoria: 'Construcción',
            imagen: 'https://placehold.co/600x350/27272a/f59e0b?text=Morteros+y+Mezclas'
        },
        {
            id: 2,
            titulo: 'Cuidado de herramientas eléctricas frente a la salinidad y la humedad',
            resumen: 'Guía práctica de mantenimiento para prolongar la vida útil de tus taladros, esmeriles y sierras.',
            contenidoCompleto: 'La brisa marina de la Región de Coquimbo acelera el desgaste de los rodamientos y componentes internos de las herramientas. Soplar los motores con aire comprimido al terminar la jornada, aplicar spray dieléctrico anticorrosivo y guardar los equipos en maletines cerrados con bolsas de gel de sílice ayuda a duplicar la vida útil de tus motores y carbones.',
            fecha: '15 Octubre, 2026',
            categoria: 'Herramientas',
            imagen: 'https://placehold.co/600x350/27272a/f59e0b?text=Cuidado+de+Herramientas'
        }
    ];

    return (
        <div className="bg-light pb-5 min-vh-100">
            {/* Header Oscuro Industrial */}
            <div className="bg-dark text-white py-4 mb-4 border-bottom border-warning border-3">
                <Container className="text-center">
                    <h1 className="fw-black mb-2 text-white">📰 Guías Técnicas y Consejos para la Obra</h1>
                    <p className="text-gray-300 mb-0">
                        Recomendaciones prácticas para proteger tus herramientas y obtener los mejores resultados en tus proyectos.
                    </p>
                </Container>
            </div>

            <Container>
                {/* Listado de Tarjetas */}
                <Row className="gy-4">
                    {blogs.map((blog) => (
                        <Col key={blog.id} xs={12} lg={6}>
                            <Card className="h-100 shadow-sm border-0 overflow-hidden bg-white">
                                <Card.Img variant="top" src={blog.imagen} alt={blog.titulo} />
                                <Card.Body className="p-4 d-flex flex-column justify-content-between">
                                    <div>
                                        <div className="d-flex justify-content-between align-items-center mb-2">
                                            <Badge bg="warning" text="dark" className="fw-bold">{blog.categoria}</Badge>
                                            <small className="text-muted">{blog.fecha}</small>
                                        </div>
                                        <Card.Title className="fw-bold h5 text-dark mb-3">{blog.titulo}</Card.Title>
                                        <Card.Text className="text-muted small mb-4">{blog.resumen}</Card.Text>
                                    </div>
                                    <div>
                                        <Button
                                            variant="outline-dark"
                                            className="fw-bold w-100"
                                            onClick={() => setBlogSeleccionado(blog)}
                                        >
                                            Leer Artículo Completo
                                        </Button>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>

                {/* Modal Lector de Detalle */}
                <Modal
                    show={blogSeleccionado !== null}
                    onHide={() => setBlogSeleccionado(null)}
                    size="lg"
                    centered
                >
                    {blogSeleccionado && (
                        <>
                            <Modal.Header closeButton className="bg-dark text-white border-bottom border-warning border-3">
                                <Modal.Title className="h5 fw-bold text-warning">{blogSeleccionado.titulo}</Modal.Title>
                            </Modal.Header>
                            <Modal.Body className="p-4">
                                <div className="mb-3 d-flex gap-2 align-items-center">
                                    <Badge bg="warning" text="dark" className="fw-bold">{blogSeleccionado.categoria}</Badge>
                                    <small className="text-muted">Publicado el {blogSeleccionado.fecha}</small>
                                </div>
                                <img
                                    src={blogSeleccionado.imagen}
                                    alt={blogSeleccionado.titulo}
                                    className="img-fluid rounded mb-4 w-100"
                                />
                                <p className="text-dark lh-base fs-6">{blogSeleccionado.contenidoCompleto}</p>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={() => setBlogSeleccionado(null)}>
                                    Cerrar
                                </Button>
                            </Modal.Footer>
                        </>
                    )}
                </Modal>
            </Container>
        </div>
    );
}

export default BlogsPage;