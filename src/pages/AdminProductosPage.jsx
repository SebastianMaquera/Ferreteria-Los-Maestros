// Desarrollado por: Sebastián Maquera (src/pages/AdminProductosPage.jsx)

import React, { useState } from 'react';
import { Table, Button, Card, Badge, Modal, Form, Alert } from 'react-bootstrap';
import AdminLayout from '../components/templates/AdminLayout';
import { FormFieldGroup } from '../components/molecules/FormFieldGroup';
import { useProductos } from '../context/ProductosContext';
import { CATEGORIAS } from '../data/productos';

const CATEGORIAS_PRODUCTO = CATEGORIAS.filter((cat) => cat !== 'Todas');

const FORM_VACIO = {
    nombre: '',
    categoria: 'Herramientas',
    marca: '',
    precio: '',
    stock: ''
};

export function AdminProductosPage() {
    const { productos, agregarProducto, editarProducto, quitarProducto, restaurarProductos } = useProductos();

    const [showModal, setShowModal] = useState(false);
    const [idEditando, setIdEditando] = useState(null);
    const [form, setForm] = useState(FORM_VACIO);
    const [errorModal, setErrorModal] = useState('');
    const [alerta, setAlerta] = useState('');
    const [productoAEliminar, setProductoAEliminar] = useState(null);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const abrirCrear = () => {
        setIdEditando(null);
        setForm(FORM_VACIO);
        setErrorModal('');
        setShowModal(true);
    };

    const abrirEditar = (producto) => {
        setIdEditando(producto.id);
        setForm({
            nombre: producto.nombre,
            categoria: producto.categoria,
            marca: producto.marca || '',
            precio: String(producto.precio),
            stock: String(producto.stock)
        });
        setErrorModal('');
        setShowModal(true);
    };

    const handleGuardar = (e) => {
        e.preventDefault();
        setErrorModal('');

        const resultado = idEditando ? editarProducto(idEditando, form) : agregarProducto(form);

        if (!resultado.exito) {
            setErrorModal(resultado.mensaje);
            return;
        }

        setShowModal(false);
        setAlerta(idEditando ? 'Producto actualizado con éxito.' : 'Producto creado con éxito.');
    };

    const handleConfirmarEliminar = () => {
        quitarProducto(productoAEliminar.id);
        setAlerta(`Producto "${productoAEliminar.nombre}" eliminado correctamente.`);
        setProductoAEliminar(null);
    };

    const handleRestaurar = () => {
        restaurarProductos();
        setAlerta('Catálogo restaurado a los datos originales.');
    };

    return (
        <AdminLayout>
            <div className="d-flex justify-content-between align-items-center flex-wrap gap-2 mb-4">
                <div>
                    <h2 className="fw-bold text-dark mb-0">📦 Mantenedor de Productos</h2>
                    <p className="text-muted mb-0">Administración de inventario y precios</p>
                </div>
                <div className="d-flex gap-2">
                    <Button variant="outline-secondary" onClick={handleRestaurar}>
                        ↺ Restaurar catálogo
                    </Button>
                    <Button variant="success" className="fw-bold" onClick={abrirCrear}>
                        + Nuevo Producto
                    </Button>
                </div>
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
                            {productos.length === 0 ? (
                                <tr>
                                    <td colSpan="6" className="text-center py-3 text-muted">
                                        No hay productos registrados.
                                    </td>
                                </tr>
                            ) : (
                                productos.map((prod) => (
                                    <tr key={prod.id}>
                                        <td><strong>#{prod.id}</strong></td>
                                        <td>{prod.nombre}</td>
                                        <td><Badge bg="secondary">{prod.categoria}</Badge></td>
                                        <td>${prod.precio?.toLocaleString('es-CL')}</td>
                                        <td>
                                            <Badge bg={prod.stock <= (prod.stockMinimo || 5) ? 'danger' : 'success'}>
                                                {prod.stock} un.
                                            </Badge>
                                        </td>
                                        <td className="text-end px-4">
                                            <div className="d-flex justify-content-end gap-2">
                                                <Button
                                                    variant="outline-primary"
                                                    size="sm"
                                                    onClick={() => abrirEditar(prod)}
                                                >
                                                    Editar
                                                </Button>
                                                <Button
                                                    variant="outline-danger"
                                                    size="sm"
                                                    onClick={() => setProductoAEliminar(prod)}
                                                >
                                                    Eliminar
                                                </Button>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </Table>
                </Card.Body>
            </Card>

            {/* Modal para Crear / Editar Producto */}
            <Modal show={showModal} onHide={() => setShowModal(false)} centered>
                <Modal.Header closeButton>
                    <Modal.Title className="fw-bold">
                        {idEditando ? 'Editar Producto' : 'Nuevo Producto'}
                    </Modal.Title>
                </Modal.Header>
                <Form onSubmit={handleGuardar} noValidate>
                    <Modal.Body>
                        {errorModal && <Alert variant="danger">{errorModal}</Alert>}

                        <FormFieldGroup
                            controlId="producto-nombre"
                            label="Nombre del Producto"
                            name="nombre"
                            value={form.nombre}
                            onChange={handleChange}
                        />
                        <FormFieldGroup
                            controlId="producto-marca"
                            label="Marca"
                            name="marca"
                            value={form.marca}
                            onChange={handleChange}
                        />
                        <Form.Group className="mb-3" controlId="producto-categoria">
                            <Form.Label className="fw-bold text-dark">Categoría</Form.Label>
                            <Form.Select name="categoria" value={form.categoria} onChange={handleChange}>
                                {CATEGORIAS_PRODUCTO.map((cat) => (
                                    <option key={cat} value={cat}>{cat}</option>
                                ))}
                            </Form.Select>
                        </Form.Group>
                        <FormFieldGroup
                            controlId="producto-precio"
                            label="Precio ($)"
                            type="number"
                            name="precio"
                            value={form.precio}
                            onChange={handleChange}
                        />
                        <FormFieldGroup
                            controlId="producto-stock"
                            label={idEditando ? 'Stock' : 'Stock Inicial'}
                            type="number"
                            name="stock"
                            value={form.stock}
                            onChange={handleChange}
                        />
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

            {/* Confirmación de eliminación mediante un modal propio */}
            <Modal show={productoAEliminar !== null} onHide={() => setProductoAEliminar(null)} centered>
                <Modal.Header closeButton>
                    <Modal.Title className="fw-bold">Eliminar producto</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    ¿Seguro que quieres eliminar <strong>{productoAEliminar?.nombre}</strong>?
                    Esta acción no se puede deshacer (salvo restaurando el catálogo).
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setProductoAEliminar(null)}>
                        Cancelar
                    </Button>
                    <Button variant="danger" onClick={handleConfirmarEliminar}>
                        Eliminar
                    </Button>
                </Modal.Footer>
            </Modal>
        </AdminLayout>
    );
}

export default AdminProductosPage;
