// Desarrollado por: Jonathan Ulloa (src/pages/AdminDashboardPage.jsx)

import React from 'react';
import { Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AdminLayout from '../components/templates/AdminLayout';
import { useProductos } from '../context/ProductosContext';
import { useAuth } from '../context/AuthContext';

export function AdminDashboardPage() {
    const { usuario, esAdmin } = useAuth();
    const { productos } = useProductos();
    const totalProductos = productos.length;
    const stockCritico = productos.filter((p) => p.stock <= (p.stockMinimo || 5)).length;

    return (
        <AdminLayout>
            <div className="mb-4">
                <h2 className="fw-bold text-dark">¡Hola, {usuario?.nombre || 'Administrador'}! 👋</h2>
                <p className="text-muted">Bienvenido al panel de control de Ferretería Los Maestros.</p>
            </div>

            <Row className="g-4 mb-4">
                <Col md={4}>
                    <Card className="border-0 shadow-sm bg-primary text-white p-3">
                        <Card.Body>
                            <Card.Title className="fs-6 text-uppercase fw-semibold">Total Productos</Card.Title>
                            <h3 className="display-5 fw-bold my-2">{totalProductos}</h3>
                            <Card.Text className="small">Registrados en catálogo</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

                <Col md={4}>
                    <Card className="border-0 shadow-sm bg-warning text-dark p-3">
                        <Card.Body>
                            <Card.Title className="fs-6 text-uppercase fw-semibold">Stock Crítico</Card.Title>
                            <h3 className="display-5 fw-bold my-2">{stockCritico}</h3>
                            <Card.Text className="small">Productos por reponer</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

                <Col md={4}>
                    <Card className="border-0 shadow-sm bg-success text-white p-3">
                        <Card.Body>
                            <Card.Title className="fs-6 text-uppercase fw-semibold">Sistema RBAC</Card.Title>
                            <h3 className="display-6 fw-bold my-2 text-capitalize">{usuario?.rol || 'Admin'}</h3>
                            <Card.Text className="small">Rol de sesión activo</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Card className="border-0 shadow-sm p-4">
                <h5 className="fw-bold mb-3">Acciones Rápidas</h5>
                <div className="d-flex gap-3 flex-wrap">
                    <Button as={Link} to="/admin/productos" variant="primary">
                        📦 Gestionar Productos
                    </Button>
                    {esAdmin && (
                        <Button as={Link} to="/admin/usuarios" variant="dark">
                            👥 Gestionar Usuarios
                        </Button>
                    )}
                    <Button as={Link} to="/catalogo" variant="outline-secondary">
                        🛒 Ir a la Tienda
                    </Button>
                </div>
            </Card>
        </AdminLayout>
    );
}

export default AdminDashboardPage;