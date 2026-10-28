// Desarrollado por: Jonathan Ulloa (src/components/templates/MainLayout.jsx)

import React from 'react';
import { Outlet } from 'react-router-dom';
import { NavbarApp } from '../organisms/NavbarApp';
import { FooterApp } from '../organisms/FooterApp';

// Plantilla de las páginas públicas: Navbar + contenido de la ruta + Footer
export function MainLayout() {
    return (
        <div className="d-flex flex-column min-vh-100 bg-light">
            <NavbarApp />
            <main className="flex-grow-1">
                <Outlet />
            </main>
            <FooterApp />
        </div>
    );
}

export default MainLayout;
