// Desarrollado por: Sebastián Maquera (src/pages/AdminProductosPage.jsx)

import React, { useState } from 'react';
import { Table, Button, Card, Badge, Modal, Form, Alert } from 'react-bootstrap';
import AdminLayout from '../components/templates/AdminLayout';
import { PRODUCTOS } from '../data/productos';

export function AdminProductosPage() {
    const [listaProductos, setListaProductos] = useState(PRODUCTOS);
    const [showModal, setShowModal] = useState(false);
    const [alerta, setAlerta] = useState('');
    const [errorModal, setErrorModal] = useState('');
    const [nuevoProd, setNuevoProd] = useState({
        nombre: '',
        precio: '',
        categoria: 'Herramientas',
        stock: ''
    });

    const handleEliminar = (id) => {
        setListaProductos((prev) => prev.filter((p) => p.id !== id));
        setAlerta('Producto eliminado correctamente.');
    };

    const handleGuardar = (e) => {
        e.preventDefault();
        setErrorModal('');

        if (!nuevoProd.nombre.trim() || !nuevoProd.precio || !nuevoProd.stock) {
            setErrorModal('Por favor, completa todos los campos del producto.');
            return;
        }

        const nuevo = {
            id: Date.now(),
            nombre: nuevoProd.nombre.trim(),
            precio: Number(nuevoProd.precio),
            categoria: nuevoProd.categoria,
            stock: Number(nuevoProd.stock),
            stockMinimo: 5
        };

        setListaProductos([nuevo, ...listaProductos]);
        setShowModal(false);
        setNuevoProd({ nombre: '', precio: '', categoria: 'Herramientas', stock: '' });
        setAlerta('Producto creado con éxito.');
    };

    return (
        <AdminLayout>
            <div className="d-flex justify-content-between align-items-center mb-4">
                <div>
                    <h2 className="fw-bold text-dark mb-0">📦 Mantenedor de Productos</h2>
                    <p className="text-muted mb-0">Administración de inventario y precios</p>
                </div>
                <Button variant="success" className="fw-bold" onClick={() => { setErrorModal(''); setShowModal(true); }}>
                    + Nuevo Producto
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
                                <th>Categoría</th>
                                <th>Precio</th>
                                <th>Stock</th>
                                <th className="text-end px-4">Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {listaProductos.map((prod) => (
                                <tr key={prod.id}>
                                    <td><strong>#{prod.id}</strong></td>
                                    <td>{prod.nombre}</td>
                                    <td><Badge bg="secondary">{prod.categoria}</Badge></td>
                                    <td>${prod.precio?.toLocaleString('es-CL')}</td>
                                    <td>
                                        <Badge bg={prod.stock <= 5 ? 'danger' : 'success'}>
                                            {prod.stock} un.
                                        </Badge>
                                    </td>
                                    <td className="text-end px-4">
                                        <Button
                                            variant="outline-danger"
                                            size="sm"
                                            onClick={() => handleEliminar(prod.id)}
                                        >
                                            Eliminar
                                        </Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Card.Body>
            </Card>

            {/* Modal para Crear Producto */}
            <Modal show={showModal} onHide={() => setShowModal(false)} centered>
                <Modal.Header closeButton>
                    <Modal.Title className="fw-bold">Nuevo Producto</Modal.Title>
                </Modal.Header>
                <Form onSubmit={handleGuardar} noValidate>
                    <Modal.Body>
                        {errorModal && <Alert variant="danger">{errorModal}</Alert>}

                        <Form.Group className="mb-3">
                            <Form.Label className="fw-bold">Nombre del Producto</Form.Label>
                            <Form.Control
                                type="text"
                                value={nuevoProd.nombre}
                                onChange={(e) => setNuevoProd({ ...nuevoProd, nombre: e.target.value })}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label className="fw-bold">Categoría</Form.Label>
                            <Form.Select
                                value={nuevoProd.categoria}
                                onChange={(e) => setNuevoProd({ ...nuevoProd, categoria: e.target.value })}
                            >
                                <option value="Herramientas">Herramientas</option>
                                <option value="Mat. Construcción">Mat. Construcción</option>
                                <option value="Pinturas">Pinturas</option>
                                <option value="Gasfitería">Gasfitería</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label className="fw-bold">Precio ($)</Form.Label>
                            <Form.Control
                                type="number"
                                value={nuevoProd.precio}
                                onChange={(e) => setNuevoProd({ ...nuevoProd, precio: e.target.value })}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label className="fw-bold">Stock Inicial</Form.Label>
                            <Form.Control
                                type="number"
                                value={nuevoProd.stock}
                                onChange={(e) => setNuevoProd({ ...nuevoProd, stock: e.target.value })}
                            />
                        </Form.Group>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => setShowModal(false)}>
                            Cancelar
                        </Button>
                        <Button variant="success" type="submit">
                            Guardar
                        </Button>
                    </Modal.Footer>
                </Form>
            </Modal>
        </AdminLayout>
    );
}

export default AdminProductosPage;