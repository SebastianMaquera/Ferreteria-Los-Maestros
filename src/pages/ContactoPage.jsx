import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button, Alert } from 'react-bootstrap';
import { validarCorreoDuoc } from '../utils/validaciones';


export function ContactoPage() {
    const [formData, setFormData] = useState({
        nombre: '',
        correo: '',
        mensaje: ''
    });


    const [error, setError] = useState('');
    const [exito, setExito] = useState(false);


    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');
        setExito(false);


        // Validación de campos requeridos
        if (!formData.nombre.trim() || !formData.correo.trim() || !formData.mensaje.trim()) {
            setError('Por favor, completa todos los campos del formulario.');
            return;
        }


        if (formData.nombre.trim().length > 100) {
            setError('El nombre no debe superar los 100 caracteres.');
            return;
        }


        if (!validarCorreoDuoc(formData.correo)) {
            setError('Solo se permiten correos @duoc.cl, @profesor.duoc.cl o @gmail.com.');
            return;
        }


        if (formData.mensaje.trim().length > 500) {
            setError('El mensaje no puede exceder los 500 caracteres.');
            return;
        }


        // Mensaje de éxito renderizado en el DOM
        setExito(true);
        setFormData({ nombre: '', correo: '', mensaje: '' });


        setTimeout(() => {
            setExito(false);
        }, 5000);
    };


    return (
        <Container className="py-5">
            <Row className="justify-content-center">
                <Col md={8} lg={6}>
                    <Card className="shadow-sm border-0">
                        <Card.Header className="bg-primary text-white text-center py-3">
                            <h4 className="fw-bold mb-0">✉️ Contáctanos</h4>
                        </Card.Header>
                        <Card.Body className="p-4">
                            {error && <Alert variant="danger">{error}</Alert>}
                            {exito && (
                                <Alert variant="success">
                                    ¡Mensaje enviado con éxito! Nos pondremos en contacto contigo a la brevedad.
                                </Alert>
                            )}


                            {/* noValidate previene el globo blanco del navegador */}
                            <Form onSubmit={handleSubmit} noValidate>
                                <Form.Group className="mb-3">
                                    <Form.Label className="fw-bold">Nombre Completo</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="nombre"
                                        placeholder="Tu nombre y apellido"
                                        value={formData.nombre}
                                        onChange={handleChange}
                                    />
                                </Form.Group>


                                <Form.Group className="mb-3">
                                    <Form.Label className="fw-bold">Correo Electrónico</Form.Label>
                                    <Form.Control
                                        type="email"
                                        name="correo"
                                        placeholder="ejemplo@duoc.cl"
                                        value={formData.correo}
                                        onChange={handleChange}
                                    />
                                </Form.Group>


                                <Form.Group className="mb-3">
                                    <Form.Label className="fw-bold">Comentario o Mensaje</Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        rows={4}
                                        name="mensaje"
                                        placeholder="Escribe tu consulta aquí..."
                                        value={formData.mensaje}
                                        onChange={handleChange}
                                    />
                                    <Form.Text className="text-muted">
                                        Máximo 500 caracteres. ({formData.mensaje.length}/500)
                                    </Form.Text>
                                </Form.Group>


                                <div className="d-grid gap-2 mt-4">
                                    <Button variant="primary" type="submit" size="lg" className="fw-bold">
                                        Enviar Mensaje
                                    </Button>
                                </div>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}


export default ContactoPage;
