// Desarrollado por: Jonathan Ulloa (src/pages/AdminUsuariosPage.jsx)

import React, { useState } from 'react';
import { Table, Button, Card, Badge, Modal, Form, Alert } from 'react-bootstrap';
import AdminLayout from '../components/templates/AdminLayout';
import { FormFieldGroup } from '../components/molecules/FormFieldGroup';
import { obtenerUsuarios, registrarUsuario } from '../services/userService';
import { validarNombre, validarCorreoDuoc, validarRun, validarClave } from '../utils/validaciones';

const FORM_VACIO = {
    nombre: '',
    correo: '',
    run: '',
    password: '',
    rol: 'cliente'
};

export function AdminUsuariosPage() {
    const [usuarios, setUsuarios] = useState(obtenerUsuarios);
    const [showModal, setShowModal] = useState(false);
    const [alerta, setAlerta] = useState('');
    const [errorModal, setErrorModal] = useState('');
    const [form, setForm] = useState(FORM_VACIO);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleGuardar = (e) => {
        e.preventDefault();
        setErrorModal('');

        if (!form.nombre.trim() || !form.correo.trim() || !form.run.trim() || !form.password) {
            setErrorModal('Por favor, completa todos los campos del usuario.');
            return;
        }
        if (!validarNombre(form.nombre)) {
            setErrorModal('El nombre solo debe contener letras (mínimo 3 caracteres).');
            return;
        }
        if (!validarCorreoDuoc(form.correo)) {
            setErrorModal('Solo se permiten correos @duoc.cl, @profesor.duoc.cl o @gmail.com.');
            return;
        }
        if (!validarRun(form.run)) {
            setErrorModal('RUN inválido. Debe tener entre 8 y 9 caracteres sin puntos ni guión (ej: 19011022K).');
            return;
        }
        const errorClave = validarClave(form.password);
        if (errorClave) {
            setErrorModal(errorClave);
            return;
        }

        const res = registrarUsuario({ ...form, run: form.run.trim().toUpperCase() });
        if (res.exito) {
            setUsuarios(obtenerUsuarios());
            setShowModal(false);
            setForm(FORM_VACIO);
            setAlerta('Usuario creado con éxito.');
        } else {
            setErrorModal(res.mensaje || 'Error al guardar el usuario.');
        }
    };

    return (
        <AdminLayout>
            <div className="d-flex justify-content-between align-items-center mb-4">
                <div>
                    <h2 className="fw-bold text-dark mb-0">👥 Mantenedor de Usuarios</h2>
                    <p className="text-muted mb-0">Gestión de clientes, vendedores y administradores</p>
                </div>
                <Button variant="primary" className="fw-bold" onClick={() => { setErrorModal(''); setShowModal(true); }}>
                    + Nuevo Usuario
                </Button>
            </div>

            {alerta && (
                <Alert variant="info" dismissible onClose={() => setAlerta('')}>
                    {alerta}
                </Alert>
            )}

            <Card className="border-0 shadow-sm">
                <Card.Body className="p-0">
                    <Table responsive hover className="align-middle mb-0">
                        <thead className="bg-light">
                            <tr>
                                <th>ID</th>
                                <th>Nombre</th>
                                <th>Correo</th>
                                <th>RUN</th>
                                <th>Rol</th>
                            </tr>
                        </thead>
                        <tbody>
                            {usuarios.length === 0 ? (
                                <tr>
                                    <td colSpan="5" className="text-center py-3 text-muted">
                                        No hay usuarios registrados en el sistema.
                                    </td>
                                </tr>
                            ) : (
                                usuarios.map((u) => (
                                    <tr key={u.id}>
                                        <td><strong>#{u.id}</strong></td>
                                        <td>{u.nombre || 'N/A'}</td>
                                        <td>{u.correo}</td>
                                        <td>{u.run || 'N/A'}</td>
                                        <td>
                                            <Badge bg={u.rol === 'admin' ? 'danger' : u.rol === 'vendedor' ? 'warning' : 'info'}>
                                                {u.rol}
                                            </Badge>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </Table>
                </Card.Body>
            </Card>

            <Modal show={showModal} onHide={() => setShowModal(false)} centered>
                <Modal.Header closeButton>
                    <Modal.Title className="fw-bold">Nuevo Usuario</Modal.Title>
                </Modal.Header>
                <Form onSubmit={handleGuardar} noValidate>
                    <Modal.Body>
                        {errorModal && <Alert variant="danger">{errorModal}</Alert>}

                        <FormFieldGroup
                            controlId="usuario-nombre"
                            label="Nombre Completo"
                            name="nombre"
                            value={form.nombre}
                            onChange={handleChange}
                        />
                        <FormFieldGroup
                            controlId="usuario-correo"
                            label="Correo Electrónico"
                            type="email"
                            name="correo"
                            value={form.correo}
                            onChange={handleChange}
                        />
                        <FormFieldGroup
                            controlId="usuario-run"
                            label="RUN"
                            name="run"
                            maxLength={9}
                            value={form.run}
                            onChange={handleChange}
                        />
                        <FormFieldGroup
                            controlId="usuario-password"
                            label="Contraseña"
                            type="password"
                            name="password"
                            maxLength={10}
                            helpText="Entre 4 y 10 caracteres."
                            value={form.password}
                            onChange={handleChange}
                        />
                        <Form.Group className="mb-3" controlId="usuario-rol">
                            <Form.Label className="fw-bold text-dark">Rol de Usuario</Form.Label>
                            <Form.Select name="rol" value={form.rol} onChange={handleChange}>
                                <option value="cliente">Cliente</option>
                                <option value="vendedor">Vendedor</option>
                                <option value="admin">Administrador</option>
                            </Form.Select>
                        </Form.Group>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => setShowModal(false)}>
                            Cancelar
                        </Button>
                        <Button variant="primary" type="submit">
                            Guardar Usuario
                        </Button>
                    </Modal.Footer>
                </Form>
            </Modal>
        </AdminLayout>
    );
}

export default AdminUsuariosPage;
