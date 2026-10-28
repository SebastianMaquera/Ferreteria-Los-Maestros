// Desarrollado por: Camilo Alarcón (src/context/AuthContext.jsx)

import React, { createContext, useContext, useState, useEffect } from 'react';
import {
    obtenerUsuarioActivo,
    guardarUsuarioActivo,
    borrarUsuarioActivo
} from '../services/authService';
import { autenticarUsuario } from '../services/userService';

const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [usuario, setUsuario] = useState(obtenerUsuarioActivo);

    useEffect(() => {
        if (usuario) {
            guardarUsuarioActivo(usuario);
        } else {
            borrarUsuarioActivo();
        }
    }, [usuario]);

    // Valida las credenciales con el servicio y, si son correctas, abre la sesión.
    // Devuelve { exito, mensaje?, usuario? } para que la interfaz muestre el resultado.
    const iniciarSesion = (correo, clave) => {
        const resultado = autenticarUsuario(correo, clave);
        if (resultado.exito) {
            setUsuario(resultado.usuario);
        }
        return resultado;
    };

    const logout = () => {
        setUsuario(null);
    };

    return (
        <AuthContext.Provider
            value={{
                usuario,
                iniciarSesion,
                logout,
                esAdmin: usuario?.rol === 'admin',
                esVendedor: usuario?.rol === 'vendedor' || usuario?.rol === 'admin'
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
