// Desarrollado por: Jonathan Ulloa, Servicio de carrito de compras (src/services/carritoService.js)

const CLAVE_CARRITO = 'carrito';

export const obtenerCarrito = () => {
    try {
        const guardado = localStorage.getItem(CLAVE_CARRITO);
        const carrito = guardado ? JSON.parse(guardado) : [];
        return Array.isArray(carrito) ? carrito : [];
    } catch {
        return [];
    }
};

export const guardarCarrito = (carrito) => {
    localStorage.setItem(CLAVE_CARRITO, JSON.stringify(carrito));
};
