// Desarrollado por: Camilo Alarcón (src/pages/RegistroPage.jsx)

import React, { useState } from 'react';
import { Container, Card, Form, Row, Col, Alert } from 'react-bootstrap';
import { useNavigate, Link } from 'react-router-dom';
import { FormFieldGroup } from '../components/molecules/FormFieldGroup';
import { ButtonSubmit } from '../components/atoms/ButtonSubmit';
import { REGIONES_Y_COMUNAS } from '../data/regiones';
import { registrarUsuario } from '../services/userService';
import { validarRun, validarCorreoDuoc, validarNombre, validarClave } from '../utils/validaciones';

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
        setExito(false);

        // 1. Validar RUN
        if (!formData.run.trim()) {
            setError('Debe ingresar su RUN.');
            return;
        }
        if (!validarRun(formData.run)) {
            setError('RUN inválido. Debe tener entre 8 y 9 caracteres sin puntos ni guión (ej: 19011022K).');
            return;
        }

        // 2. Validar Nombre (solo letras, sin números)
        if (!formData.nombre.trim()) {
            setError('Debe ingresar su nombre.');
            return;
        }
        if (!validarNombre(formData.nombre)) {
            setError('El nombre solo debe contener letras (mínimo 3 caracteres) y no puede incluir números.');
            return;
        }

        // 3. Validar Apellidos (solo letras, sin números)
        if (!formData.apellidos.trim()) {
            setError('Debe ingresar sus apellidos.');
            return;
        }
        if (!validarNombre(formData.apellidos)) {
            setError('Los apellidos solo deben contener letras (mínimo 3 caracteres) y no pueden incluir números.');
            return;
        }

        // 4. Validar Correo
        if (!formData.correo.trim()) {
            setError('Debe ingresar su correo electrónico.');
            return;
        }
        if (!validarCorreoDuoc(formData.correo)) {
            setError('Solo se permiten correos @duoc.cl, @profesor.duoc.cl o @gmail.com.');
            return;
        }

        // 5. Validar Contraseña y Confirmación
        const errorClave = validarClave(formData.password);
        if (errorClave) {
            setError(errorClave);
            return;
        }
        if (!formData.confirmPassword) {
            setError('Debe confirmar su contraseña.');
            return;
        }
        if (formData.password !== formData.confirmPassword) {
            setError('Las contraseñas ingresadas no coinciden.');
            return;
        }

        // 6. Validar Ubicación
        if (!formData.region || !formData.comuna) {
            setError('Debe seleccionar su región y comuna.');
            return;
        }

        // 7. Registro mediante el servicio centralizado (userService.js).
        // El rol lo asigna el servicio: todo registro público es "cliente".
        const res = registrarUsuario({
            run: formData.run.trim().toUpperCase(),
            nombre: `${formData.nombre.trim()} ${formData.apellidos.trim()}`,
            correo: formData.correo.trim().toLowerCase(),
            password: formData.password,
            region: formData.region,
            comuna: formData.comuna,
            direccion: formData.direccion.trim()
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
        <div className="bg-light pb-5 min-vh-100 d-flex align-items-center">
            <Container className="py-4">
                <Row className="justify-content-center">
                    <Col md={10} lg={7}>
                        <Card className="shadow-sm border-0 overflow-hidden">
                            <Card.Header className="bg-dark text-white text-center py-3 border-bottom border-warning border-3">
                                <h4 className="fw-bold text-warning mb-0">📝 Registro de Usuario</h4>
                            </Card.Header>
                            <Card.Body className="p-4 bg-white">
                                {error && <Alert variant="danger" className="fw-bold">{error}</Alert>}
                                {exito && (
                                    <Alert variant="warning" className="fw-bold text-dark">
                                        ¡Registro exitoso! Redirigiendo al inicio de sesión...
                                    </Alert>
                                )}

                                {/* noValidate evita los avisos nativos del navegador */}
                                <Form onSubmit={handleSubmit} noValidate>
                                    <FormFieldGroup
                                        controlId="registro-run"
                                        label="RUN (sin puntos ni guion)"
                                        name="run"
                                        placeholder="Ej: 19011022K"
                                        value={formData.run}
                                        onChange={handleChange}
                                        maxLength={9}
                                    />

                                    <Row>
                                        <Col md={6}>
                                            <FormFieldGroup
                                                controlId="registro-nombre"
                                                label="Nombre"
                                                name="nombre"
                                                placeholder="Tu nombre"
                                                value={formData.nombre}
                                                onChange={handleChange}
                                                maxLength={50}
                                            />
                                        </Col>
                                        <Col md={6}>
                                            <FormFieldGroup
                                                controlId="registro-apellidos"
                                                label="Apellidos"
                                                name="apellidos"
                                                placeholder="Tus apellidos"
                                                value={formData.apellidos}
                                                onChange={handleChange}
                                                maxLength={50}
                                            />
                                        </Col>
                                    </Row>

                                    <FormFieldGroup
                                        controlId="registro-correo"
                                        label="Correo Electrónico"
                                        type="email"
                                        name="correo"
                                        placeholder="ejemplo@duoc.cl"
                                        value={formData.correo}
                                        onChange={handleChange}
                                        maxLength={80}
                                    />

                                    <Row>
                                        <Col md={6}>
                                            <FormFieldGroup
                                                controlId="registro-password"
                                                label="Contraseña"
                                                type="password"
                                                name="password"
                                                placeholder="4 a 10 caracteres"
                                                value={formData.password}
                                                onChange={handleChange}
                                                maxLength={10}
                                            />
                                        </Col>
                                        <Col md={6}>
                                            <FormFieldGroup
                                                controlId="registro-confirmar"
                                                label="Confirmar Contraseña"
                                                type="password"
                                                name="confirmPassword"
                                                placeholder="Repite la contraseña"
                                                value={formData.confirmPassword}
                                                onChange={handleChange}
                                                maxLength={10}
                                            />
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col md={6}>
                                            <Form.Group className="mb-3" controlId="registro-region">
                                                <Form.Label className="fw-bold text-dark">Región</Form.Label>
                                                <Form.Select
                                                    name="region"
                                                    value={formData.region}
                                                    onChange={handleChange}
                                                    className="border-secondary fw-bold"
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
                                            <Form.Group className="mb-3" controlId="registro-comuna">
                                                <Form.Label className="fw-bold text-dark">Comuna</Form.Label>
                                                <Form.Select
                                                    name="comuna"
                                                    value={formData.comuna}
                                                    onChange={handleChange}
                                                    disabled={!formData.region}
                                                    className="border-secondary fw-bold"
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

                                    <div className="mt-4">
                                        <ButtonSubmit text="Registrarse" variant="warning" size="lg" />
                                    </div>
                                </Form>

                                <div className="text-center mt-3 pt-2 border-top">
                                    <small className="text-muted">
                                        ¿Ya tienes cuenta?{' '}
                                        <Link to="/login" className="fw-bold text-dark text-decoration-none">
                                            Inicia Sesión aquí
                                        </Link>
                                    </small>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default RegistroPage;
