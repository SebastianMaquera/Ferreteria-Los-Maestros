// Desarrollado por: Camilo Alarcón (src/App.jsx)

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { CarritoProvider } from './context/CarritoContext';
import { ProductosProvider } from './context/ProductosContext';
import { MainLayout } from './components/templates/MainLayout';
import { ProtectedRoute } from './components/organisms/ProtectedRoute';

import Home from './pages/Home';
import CatalogoPage from './pages/CatalogoPage';
import DetalleProductoPage from './pages/DetalleProductoPage';
import LoginPage from './pages/LoginPage';
import RegistroPage from './pages/RegistroPage';
import ContactoPage from './pages/ContactoPage';
import NosotrosPage from './pages/NosotrosPage';
import BlogsPage from './pages/BlogsPage';
import AdminDashboardPage from './pages/AdminDashboardPage';
import AdminProductosPage from './pages/AdminProductosPage';
import AdminUsuariosPage from './pages/AdminUsuariosPage';

function App() {
  return (
    <AuthProvider>
      <CarritoProvider>
        <ProductosProvider>
          <Router>
            <Routes>
              {/* Rutas Públicas: comparten la plantilla MainLayout (Navbar + Footer) */}
              <Route element={<MainLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/catalogo" element={<CatalogoPage />} />
                <Route path="/producto/:id" element={<DetalleProductoPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/registro" element={<RegistroPage />} />
                <Route path="/contacto" element={<ContactoPage />} />
                <Route path="/nosotros" element={<NosotrosPage />} />
                <Route path="/blogs" element={<BlogsPage />} />
              </Route>

              {/* Rutas Privadas del Panel Administrador */}
              <Route
                path="/admin"
                element={
                  <ProtectedRoute rolesPermitidos={['admin', 'vendedor']}>
                    <AdminDashboardPage />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/admin/productos"
                element={
                  <ProtectedRoute rolesPermitidos={['admin', 'vendedor']}>
                    <AdminProductosPage />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/admin/usuarios"
                element={
                  <ProtectedRoute rolesPermitidos={['admin']}>
                    <AdminUsuariosPage />
                  </ProtectedRoute>
                }
              />

              {/* Cualquier otra dirección vuelve al inicio */}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </Router>
        </ProductosProvider>
      </CarritoProvider>
    </AuthProvider>
  );
}

export default App;
