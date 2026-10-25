// Desarrollado por: Jonathan Ulloa (src/App.jsx)
import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { NavbarApp } from './components/organisms/NavbarApp';
import { Home } from './pages/Home';
import { CatalogoPage } from './pages/CatalogoPage';
import { LoginPage } from './pages/LoginPage';
import { DetalleProductoPage } from './pages/DetalleProductoPage';

export function App() {
  return (
    <BrowserRouter>
      <div className="d-flex flex-column min-vh-100 bg-light">
        <NavbarApp />
        <main className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/catalogo" element={<CatalogoPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/producto/:id" element={<DetalleProductoPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <footer className="bg-dark text-white text-center py-3 mt-auto">
          <small>© 2026 Ferretería Los Maestros - Sistema de Gestión</small>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;