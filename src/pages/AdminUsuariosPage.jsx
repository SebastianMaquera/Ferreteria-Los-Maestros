// Desarrollado por: Jonathan Ulloa (src/pages/AdminUsuariosPage.jsx)

import React, { useState, useEffect } from 'react';
import { Table, Button, Card, Badge, Modal, Form, Alert } from 'react-bootstrap';
import AdminLayout from '../components/templates/AdminLayout';
import { obtenerUsuarios, registrarUsuario } from '../services/userService';

export function AdminUsuariosPage() {
    const [usuarios, setUsuarios] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [alerta, setAlerta] = useState('');
    const [errorModal, setErrorModal] = useState('');
    const [form, setForm] = useState({
        nombre: '',
        correo: '',
        run: '',
        rol: 'cliente'
    });

    useEffect(() => {
        setUsuarios(obtenerUsuarios());
    }, []);

    const handleGuardar = (e) => {
        e.preventDefault();
        setErrorModal('');

        if (!form.nombre.trim() || !form.correo.trim() || !form.run.trim()) {
            setErrorModal('Por favor, completa todos los campos del usuario.');
            return;
        }

        const res = registrarUsuario(form);
        if (res.exito) {
            setUsuarios(obtenerUsuarios());
            setShowModal(false);
            setForm({ nombre: '', correo: '', run: '', rol: 'cliente' });
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

                        <Form.Group className="mb-3">
                            <Form.Label className="fw-bold">Nombre Completo</Form.Label>
                            <Form.Control
                                type="text"
                                value={form.nombre}
                                onChange={(e) => setForm({ ...form, nombre: e.target.value })}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label className="fw-bold">Correo Electrónico</Form.Label>
                            <Form.Control
                                type="email"
                                value={form.correo}
                                onChange={(e) => setForm({ ...form, correo: e.target.value })}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label className="fw-bold">RUN</Form.Label>
                            <Form.Control
                                type="text"
                                value={form.run}
                                onChange={(e) => setForm({ ...form, run: e.target.value })}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label className="fw-bold">Rol de Usuario</Form.Label>
                            <Form.Select
                                value={form.rol}
                                onChange={(e) => setForm({ ...form, rol: e.target.value })}
                            >
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