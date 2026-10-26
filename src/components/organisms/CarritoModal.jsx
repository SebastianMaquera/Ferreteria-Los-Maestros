// Desarrollado por: Jonathan Ulloa (src/components/organisms/CarritoModal.jsx)
// Instrucciones para Jonathan (BORRAR estas 3 líneas antes de ejecutar git add):
// git add src/components/organisms/CarritoModal.jsx
// git commit -m "fix(organisms): vincular correctamente eventos + y - con actualizarCantidad en CarritoModal"
// git push origin main

import React, { useState } from 'react';
import { Modal, Table, Button, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useCarrito } from '../../context/CarritoContext';

export function CarritoModal({ show, handleClose, items, onRemoveItem }) {
    const { actualizarCantidad, vaciarCarrito } = useCarrito();
    const [mensaje, setMensaje] = useState(null);
    const [procesando, setProcesando] = useState(false);
    const navigate = useNavigate();

    const listaItems = items || [];

    const total = listaItems.reduce(
        (acc, item) => acc + (item.precio || 0) * (item.cantidad || 1),
        0
    );

    const handleExplorarCatalogo = () => {
        handleClose();
        navigate('/catalogo');
    };

    const handleFinalizarCompra = () => {
        if (listaItems.length === 0) {
            setMensaje({ tipo: 'warning', texto: 'El carrito está vacío. Agrega productos antes de comprar.' });
            setTimeout(() => setMensaje(null), 3000);
            return;
        }

        setProcesando(true);
        setMensaje({
            tipo: 'success',
            texto: '🎉 ¡Compra procesada con éxito! Se ha registrado tu orden de pedido.'
        });

        setTimeout(() => {
            vaciarCarrito();
            setProcesando(false);
            setMensaje(null);
            handleClose();
        }, 2200);
    };

    return (
        <Modal show={show} onHide={handleClose} size="lg" centered>
            <Modal.Header closeButton className="bg-primary text-white">
                <Modal.Title className="h5 fw-bold">🛒 Carrito de Compras</Modal.Title>
            </Modal.Header>
            <Modal.Body className="p-4">
                {mensaje && (
                    <Alert variant={mensaje.tipo} className="mb-3 text-center fw-bold py-2">
                        {mensaje.texto}
                    </Alert>
                )}

                {listaItems.length > 0 ? (
                    <>
                        <Table responsive hover className="align-middle mb-4">
                            <thead className="bg-light">
                                <tr>
                                    <th>Producto</th>
                                    <th className="text-center">Cant.</th>
                                    <th className="text-end">Precio U.</th>
                                    <th className="text-end">Subtotal</th>
                                    <th className="text-center">Acción</th>
                                </tr>
                            </thead>
                            <tbody>
                                {listaItems.map((item) => {
                                    const cantidad = item.cantidad || 1;
                                    const subtotal = (item.precio || 0) * cantidad;
                                    return (
                                        <tr key={item.id}>
                                            <td>
                                                <strong className="d-block">{item.nombre}</strong>
                                                <small className="text-muted">{item.categoria}</small>
                                            </td>
                                            <td className="text-center">
                                                <div className="d-flex align-items-center justify-content-center gap-1">
                                                    <Button
                                                        variant="outline-secondary"
                                                        size="sm"
                                                        className="px-2 py-0 fw-bold"
                                                        onClick={() => actualizarCantidad(item.id, cantidad - 1)}
                                                        disabled={cantidad <= 1 || procesando}
                                                    >
                                                        -
                                                    </Button>
                                                    <span className="fw-bold px-2">{cantidad}</span>
                                                    <Button
                                                        variant="outline-secondary"
                                                        size="sm"
                                                        className="px-2 py-0 fw-bold"
                                                        onClick={() => actualizarCantidad(item.id, cantidad + 1)}
                                                        disabled={procesando}
                                                    >
                                                        +
                                                    </Button>
                                                </div>
                                            </td>
                                            <td className="text-end">${item.precio?.toLocaleString('es-CL')}</td>
                                            <td className="text-end fw-bold">${subtotal.toLocaleString('es-CL')}</td>
                                            <td className="text-center">
                                                <Button
                                                    variant="outline-danger"
                                                    size="sm"
                                                    onClick={() => onRemoveItem(item.id)}
                                                    disabled={procesando}
                                                >
                                                    Eliminar
                                                </Button>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </Table>

                        <div className="d-flex justify-content-between align-items-center pt-2 border-top">
                            <h4 className="fw-bold mb-0">
                                Total: <span className="text-success">${total.toLocaleString('es-CL')}</span>
                            </h4>
                            <div className="d-flex gap-2">
                                <Button variant="outline-secondary" onClick={handleClose} disabled={procesando}>
                                    Seguir Comprando
                                </Button>
                                <Button
                                    variant="success"
                                    className="fw-bold px-4"
                                    onClick={handleFinalizarCompra}
                                    disabled={procesando}
                                >
                                    {procesando ? 'Procesando...' : 'Finalizar Compra'}
                                </Button>
                            </div>
                        </div>
                    </>
                ) : (
                    <div className="text-center py-5">
                        <p className="text-muted fs-5 mb-3">Tu carrito está vacío.</p>
                        <Button variant="primary" className="fw-bold" onClick={handleExplorarCatalogo}>
                            Explorar Catálogo
                        </Button>
                    </div>
                )}
            </Modal.Body>
        </Modal>
    );
}

export default CarritoModal;