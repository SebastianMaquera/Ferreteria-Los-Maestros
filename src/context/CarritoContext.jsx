// Desarrollado por: Camilo Alarcón (src/context/CarritoContext.jsx)

import React, { createContext, useContext, useState, useEffect } from 'react';

const CarritoContext = createContext();

export const useCarrito = () => useContext(CarritoContext);

export function CarritoProvider({ children }) {
    const [carrito, setCarrito] = useState(() => {
        const guardado = localStorage.getItem('carrito');
        return guardado ? JSON.parse(guardado) : [];
    });

    useEffect(() => {
        localStorage.setItem('carrito', JSON.stringify(carrito));
    }, [carrito]);

    const agregarAlCarrito = (producto) => {
        setCarrito((prev) => {
            const existe = prev.find((p) => String(p.id) === String(producto.id));
            if (existe) {
                return prev.map((p) =>
                    String(p.id) === String(producto.id)
                        ? { ...p, cantidad: (p.cantidad || 1) + 1 }
                        : p
                );
            }
            return [...prev, { ...producto, cantidad: 1 }];
        });
    };

    const eliminarDelCarrito = (id) => {
        setCarrito((prev) => prev.filter((p) => String(p.id) !== String(id)));
    };

    // Función requerida para los botones + y -
    const actualizarCantidad = (id, nuevaCantidad) => {
        if (nuevaCantidad < 1) return;
        setCarrito((prev) =>
            prev.map((item) =>
                String(item.id) === String(id)
                    ? { ...item, cantidad: nuevaCantidad }
                    : item
            )
        );
    };

    const vaciarCarrito = () => {
        setCarrito([]);
    };

    return (
        <CarritoContext.Provider
            value={{
                carrito,
                agregarAlCarrito,
                eliminarDelCarrito,
                actualizarCantidad,
                vaciarCarrito
            }}
        >
            {children}
        </CarritoContext.Provider>
    );
}