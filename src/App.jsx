// Desarrollado por: Camilo Alarcón (src/App.jsx)

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CarritoProvider } from './context/CarritoContext';
import { AuthProvider } from './context/AuthContext';
import { NavbarApp } from './components/organisms/NavbarApp';
import { FooterApp } from './components/organisms/FooterApp';
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

export function App() {
  return (
    <AuthProvider>
      <CarritoProvider>
        <Router>
          <div className="d-flex flex-column min-vh-100">
            <Routes>
              {/* Rutas Públicas (Con Navbar y Footer) */}
              <Route
                path="/*"
                element={
                  <>
                    <NavbarApp />
                    <main className="flex-grow-1">
                      <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/catalogo" element={<CatalogoPage />} />
                        <Route path="/producto/:id" element={<DetalleProductoPage />} />
                        <Route path="/login" element={<LoginPage />} />
                        <Route path="/registro" element={<RegistroPage />} />
                        <Route path="/contacto" element={<ContactoPage />} />
                        <Route path="/nosotros" element={<NosotrosPage />} />
                        <Route path="/blogs" element={<BlogsPage />} />
                      </Routes>
                    </main>
                    <FooterApp />
                  </>
                }
              />

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
            </Routes>
          </div>
        </Router>
      </CarritoProvider>
    </AuthProvider>
  );
}

export default App;