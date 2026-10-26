// Desarrollado por: Camilo Alarcón (src/pages/RegistroPage.jsx)

import React, { useState } from 'react';
import { Container, Card, Form, Button, Row, Col, Alert } from 'react-bootstrap';
import { useNavigate, Link } from 'react-router-dom';
import { REGIONES_Y_COMUNAS } from '../data/regiones';
import { registrarUsuario } from '../services/userService';
import { validarRun, validarCorreoDuoc } from '../utils/validaciones';


export function RegistroPage() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        run: '',
        nombre: '',
        apellidos: '',
        correo: '',
        password: '',
        confirmPassword: '',
        region: 'Región de Coquimbo',
        comuna: 'La Serena',
        direccion: ''
    });


    const [error, setError] = useState('');
    const [exito, setExito] = useState(false);


    // Obtener comunas según la región seleccionada desde regiones.js
    const comunasDisponibles = formData.region
        ? REGIONES_Y_COMUNAS.find((r) => r.region === formData.region)?.comunas || []
        : [];


    const handleChange = (e) => {
        const { name, value } = e.target;


        if (name === 'region') {
            const regObjeto = REGIONES_Y_COMUNAS.find((r) => r.region === value);
            const primeraComuna = regObjeto && regObjeto.comunas.length > 0 ? regObjeto.comunas[0] : '';
            setFormData({
                ...formData,
                region: value,
                comuna: primeraComuna
            });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');


        // 1. Validación de campos vacíos
        if (
            !formData.run.trim() ||
            !formData.nombre.trim() ||
            !formData.apellidos.trim() ||
            !formData.correo.trim() ||
            !formData.password ||
            !formData.confirmPassword ||
            !formData.region ||
            !formData.comuna
        ) {
            setError('Por favor, completa todos los campos requeridos.');
            return;
        }


        // 2. Validaciones técnicas
        if (!validarRun(formData.run)) {
            setError('RUN inválido. Debe tener entre 7 y 9 caracteres sin puntos ni guion (ej: 19011022K).');
            return;
        }


        if (!validarCorreoDuoc(formData.correo)) {
            setError('Solo se permiten correos @duoc.cl, @profesor.duoc.cl o @gmail.com.');
            return;
        }


        if (formData.password.length < 4 || formData.password.length > 10) {
            setError('La contraseña debe tener entre 4 y 10 caracteres.');
            return;
        }


        if (formData.password !== formData.confirmPassword) {
            setError('Las contraseñas no coinciden.');
            return;
        }


        // 3. Registro mediante el servicio centralizado (userService.js)
        const res = registrarUsuario({
            run: formData.run.trim(),
            nombre: `${formData.nombre.trim()} ${formData.apellidos.trim()}`,
            correo: formData.correo.trim().toLowerCase(),
            password: formData.password,
            region: formData.region,
            comuna: formData.comuna,
            direccion: formData.direccion,
            rol: formData.correo.includes('admin') ? 'admin' : 'cliente'
        });


        if (res.exito) {
            setExito(true);
            setTimeout(() => {
                navigate('/login');
            }, 1500);
        } else {
            setError(res.mensaje);
        }
    };


    return (
        <Container className="py-5">
            <Row className="justify-content-center">
                <Col md={8} lg={6}>
                    <Card className="shadow-sm border-0">
                        <Card.Header className="bg-dark text-white text-center py-3">
                            <h4 className="fw-bold mb-0">📝 Registro de Usuario</h4>
                        </Card.Header>
                        <Card.Body className="p-4">
                            {error && <Alert variant="danger">{error}</Alert>}
                            {exito && <Alert variant="success">¡Registro exitoso! Redirigiendo al inicio de sesión...</Alert>}


                            {/* noValidate evita los avisos nativos del navegador */}
                            <Form onSubmit={handleSubmit} noValidate>
                                <Form.Group className="mb-3">
                                    <Form.Label className="fw-bold">RUN (sin puntos ni guion)</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="run"
                                        placeholder="Ej: 19011022K"
                                        value={formData.run}
                                        onChange={handleChange}
                                    />
                                </Form.Group>


                                <Row>
                                    <Col md={6}>
                                        <Form.Group className="mb-3">
                                            <Form.Label className="fw-bold">Nombre</Form.Label>
                                            <Form.Control
                                                type="text"
                                                name="nombre"
                                                value={formData.nombre}
                                                onChange={handleChange}
                                            />
                                        </Form.Group>
                                    </Col>
                                    <Col md={6}>
                                        <Form.Group className="mb-3">
                                            <Form.Label className="fw-bold">Apellidos</Form.Label>
                                            <Form.Control
                                                type="text"
                                                name="apellidos"
                                                value={formData.apellidos}
                                                onChange={handleChange}
                                            />
                                        </Form.Group>
                                    </Col>
                                </Row>


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


                                <Row>
                                    <Col md={6}>
                                        <Form.Group className="mb-3">
                                            <Form.Label className="fw-bold">Contraseña</Form.Label>
                                            <Form.Control
                                                type="password"
                                                name="password"
                                                value={formData.password}
                                                onChange={handleChange}
                                            />
                                        </Form.Group>
                                    </Col>
                                    <Col md={6}>
                                        <Form.Group className="mb-3">
                                            <Form.Label className="fw-bold">Confirmar Contraseña</Form.Label>
                                            <Form.Control
                                                type="password"
                                                name="confirmPassword"
                                                value={formData.confirmPassword}
                                                onChange={handleChange}
                                            />
                                        </Form.Group>
                                    </Col>
                                </Row>


                                <Row>
                                    <Col md={6}>
                                        <Form.Group className="mb-3">
                                            <Form.Label className="fw-bold">Región</Form.Label>
                                            <Form.Select
                                                name="region"
                                                value={formData.region}
                                                onChange={handleChange}
                                            >
                                                <option value="">Seleccione Región...</option>
                                                {REGIONES_Y_COMUNAS.map((reg) => (
                                                    <option key={reg.region} value={reg.region}>
                                                        {reg.region}
                                                    </option>
                                                ))}
                                            </Form.Select>
                                        </Form.Group>
                                    </Col>
                                    <Col md={6}>
                                        <Form.Group className="mb-3">
                                            <Form.Label className="fw-bold">Comuna</Form.Label>
                                            <Form.Select
                                                name="comuna"
                                                value={formData.comuna}
                                                onChange={handleChange}
                                                disabled={!formData.region}
                                            >
                                                <option value="">Seleccione Comuna...</option>
                                                {comunasDisponibles.map((com) => (
                                                    <option key={com} value={com}>
                                                        {com}
                                                    </option>
                                                ))}
                                            </Form.Select>
                                        </Form.Group>
                                    </Col>
                                </Row>


                                <div className="d-grid gap-2 mt-4">
                                    <Button variant="primary" type="submit" size="lg" className="fw-bold">
                                        Registrarse
                                    </Button>
                                </div>
                            </Form>


                            <div className="text-center mt-3 pt-2 border-top">
                                <small className="text-muted">
                                    ¿Ya tienes cuenta? <Link to="/login" className="fw-bold text-decoration-none">Inicia Sesión aquí</Link>
                                </small>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}


export default RegistroPage;