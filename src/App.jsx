// Desarrollado por: Jonathan Ulloa (src/App.jsx)

import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { MainLayout } from './components/templates/MainLayout';
import { Home } from './pages/Home';
import { CatalogoPage } from './pages/CatalogoPage';
import { LoginPage } from './pages/LoginPage';
import { DetalleProductoPage } from './pages/DetalleProductoPage';

export function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalogo" element={<CatalogoPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/producto/:id" element={<DetalleProductoPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;