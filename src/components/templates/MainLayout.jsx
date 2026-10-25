// Desarrollado por: Jonathan Ulloa (src/components/templates/MainLayout.jsx)

import React from 'react';
import { NavbarApp } from '../organisms/NavbarApp';
import { FooterApp } from '../organisms/FooterApp';

export function MainLayout({ children }) {
    return (
        <div className="d-flex flex-column min-vh-100 bg-light">
            <NavbarApp />
            <main className="flex-grow-1">
                {children}
            </main>
            <FooterApp />
        </div>
    );
}

export default MainLayout;