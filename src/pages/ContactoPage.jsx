// Desarrollado por: Sebastián Maquera (src/pages/ContactoPage.jsx)

import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Alert } from 'react-bootstrap';
import { FormFieldGroup } from '../components/molecules/FormFieldGroup';
import { ButtonSubmit } from '../components/atoms/ButtonSubmit';
import { validarCorreoDuoc, validarNombre } from '../utils/validaciones';

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

        // Validación de nombre sin números
        if (!validarNombre(formData.nombre)) {
            setError('El nombre solo debe contener letras (mínimo 3 caracteres) y no puede incluir números.');
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
        <div className="bg-light pb-5 min-vh-100">
            <Container className="py-5">
                <Row className="justify-content-center">
                    <Col md={8} lg={6}>
                        <Card className="shadow-sm border-0 overflow-hidden">
                            <Card.Header className="bg-dark text-white text-center py-3 border-bottom border-warning border-3">
                                <h4 className="fw-bold text-warning mb-0">✉️ Contáctanos</h4>
                            </Card.Header>
                            <Card.Body className="p-4 bg-white">
                                {error && <Alert variant="danger">{error}</Alert>}
                                {exito && (
                                    <Alert variant="warning" className="fw-bold text-dark">
                                        ¡Mensaje enviado con éxito! Nos pondremos en contacto contigo a la brevedad.
                                    </Alert>
                                )}

                                <Form onSubmit={handleSubmit} noValidate>
                                    <FormFieldGroup
                                        controlId="contacto-nombre"
                                        label="Nombre Completo"
                                        name="nombre"
                                        placeholder="Tu nombre y apellido"
                                        value={formData.nombre}
                                        onChange={handleChange}
                                    />

                                    <FormFieldGroup
                                        controlId="contacto-correo"
                                        label="Correo Electrónico"
                                        type="email"
                                        name="correo"
                                        placeholder="ejemplo@duoc.cl"
                                        value={formData.correo}
                                        onChange={handleChange}
                                    />

                                    <FormFieldGroup
                                        controlId="contacto-mensaje"
                                        label="Comentario o Mensaje"
                                        as="textarea"
                                        rows={4}
                                        name="mensaje"
                                        placeholder="Escribe tu consulta aquí..."
                                        value={formData.mensaje}
                                        onChange={handleChange}
                                        helpText={`Máximo 500 caracteres. (${formData.mensaje.length}/500)`}
                                    />

                                    <div className="mt-4">
                                        <ButtonSubmit text="Enviar Mensaje" variant="warning" size="lg" />
                                    </div>
                                </Form>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default ContactoPage;
