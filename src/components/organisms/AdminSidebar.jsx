// Desarrollado por: Sebastián Maquera (src/components/organisms/AdminSidebar.jsx)

import React from 'react';
import { Nav, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

export function AdminSidebar() {
    const { usuario, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    return (
        <div className="bg-dark text-white p-3 min-vh-100 d-flex flex-column justify-content-between">
            <div>
                <h5 className="fw-bold text-warning mb-4 px-2">⚙️ Panel Admin</h5>
                <div className="small text-muted mb-3 px-2">
                    Hola, <strong>{usuario?.correo || 'Usuario'}</strong>
                    <br />
                    <span className="badge bg-primary text-uppercase mt-1">{usuario?.rol || 'admin'}</span>
                </div>
                <Nav className="flex-column gap-2">
                    <Nav.Link as={Link} to="/admin" className="text-white hover-bg-secondary rounded px-2">
                        📊 Dashboard
                    </Nav.Link>
                    <Nav.Link as={Link} to="/admin/productos" className="text-white hover-bg-secondary rounded px-2">
                        📦 Mantenedor Productos
                    </Nav.Link>
                    {usuario?.rol === 'admin' && (
                        <Nav.Link as={Link} to="/admin/usuarios" className="text-white hover-bg-secondary rounded px-2">
                            👥 Mantenedor Usuarios
                        </Nav.Link>
                    )}
                    <Nav.Link as={Link} to="/" className="text-white-50 hover-bg-secondary rounded px-2 mt-3">
                        ⬅️ Volver a la Tienda
                    </Nav.Link>
                </Nav>
            </div>
            <div>
                <Button variant="outline-danger" size="sm" className="w-100" onClick={handleLogout}>
                    Cerrar Sesión
                </Button>
            </div>
        </div>
    );
}

export default AdminSidebar;