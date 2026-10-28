// Contexto global de productos (src/context/ProductosContext.jsx)

import React, { createContext, useContext, useState } from 'react';
import {
    obtenerProductos,
    crearProducto,
    actualizarProducto,
    eliminarProducto,
    restablecerProductos
} from '../services/productoService';

const ProductosContext = createContext();

export function ProductosProvider({ children }) {
    const [productos, setProductos] = useState(obtenerProductos);

    // Cada operación delega en el servicio (que guarda los datos)
    // y, si salió bien, refresca el estado global.
    const agregarProducto = (datos) => {
        const resultado = crearProducto(datos);
        if (resultado.exito) setProductos(obtenerProductos());
        return resultado;
    };

    const editarProducto = (id, cambios) => {
        const resultado = actualizarProducto(id, cambios);
        if (resultado.exito) setProductos(obtenerProductos());
        return resultado;
    };

    const quitarProducto = (id) => {
        const resultado = eliminarProducto(id);
        if (resultado.exito) setProductos(obtenerProductos());
        return resultado;
    };

    const restaurarProductos = () => {
        setProductos(restablecerProductos());
    };

    return (
        <ProductosContext.Provider
            value={{
                productos,
                agregarProducto,
                editarProducto,
                quitarProducto,
                restaurarProductos
            }}
        >
            {children}
        </ProductosContext.Provider>
    );
}

export function useProductos() {
    const context = useContext(ProductosContext);
    if (!context) {
        throw new Error('useProductos debe usarse dentro de un ProductosProvider');
    }
    return context;
}
