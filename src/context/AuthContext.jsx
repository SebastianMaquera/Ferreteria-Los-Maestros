// Desarrollado por: Camilo Alarcón (src/context/AuthContext.jsx)

import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [usuario, setUsuario] = useState(() => {
        try {
            const guardado = localStorage.getItem('usuarioActivo');
            return guardado ? JSON.parse(guardado) : null;
        } catch (error) {
            return null;
        }
    });

    useEffect(() => {
        if (usuario) {
            localStorage.setItem('usuarioActivo', JSON.stringify(usuario));
        } else {
            localStorage.removeItem('usuarioActivo');
        }
    }, [usuario]);

    const login = (datosUsuario) => {
        // Respeta el rol original asignado (admin, vendedor o cliente)
        const usuarioConRol = {
            ...datosUsuario,
            rol: datosUsuario.rol || (datosUsuario.correo?.includes('admin') ? 'admin' : 'cliente')
        };
        setUsuario(usuarioConRol);
        return usuarioConRol;
    };

    const logout = () => {
        setUsuario(null);
        localStorage.removeItem('usuarioActivo');
    };

    return (
        <AuthContext.Provider
            value={{
                usuario,
                login,
                logout,
                esAdmin: usuario?.rol === 'admin',
                esVendedor: usuario?.rol === 'vendedor' || usuario?.rol === 'admin',
                estaAutenticado: !!usuario
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth debe usarse dentro de un AuthProvider');
    }
    return context;
}

export default AuthContext;