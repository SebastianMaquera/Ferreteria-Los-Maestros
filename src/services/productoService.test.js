import { describe, it, expect, beforeEach } from 'vitest';
import {
    obtenerProductos,
    crearProducto,
    actualizarProducto,
    eliminarProducto,
    restablecerProductos
} from './productoService';

describe('Pruebas Unitarias - Servicio de Productos (CRUD con localStorage)', () => {
    beforeEach(() => {
        localStorage.clear();
    });

    it('11. Debe cargar el catálogo inicial si localStorage está vacío', () => {
        const productos = obtenerProductos();
        expect(productos.length).toBeGreaterThanOrEqual(85);
    });

    it('12. Debe crear un producto válido y persistirlo', () => {
        const antes = obtenerProductos().length;
        const res = crearProducto({ nombre: 'Martillo de prueba', categoria: 'Herramientas', precio: '5990', stock: '10' });
        expect(res.exito).toBe(true);
        expect(res.producto.precio).toBe(5990);
        expect(obtenerProductos().length).toBe(antes + 1);
    });

    it('13. Debe rechazar un producto con precio inválido', () => {
        const res = crearProducto({ nombre: 'Producto sin precio', categoria: 'Pinturas', precio: '0', stock: '5' });
        expect(res.exito).toBe(false);
        expect(res.mensaje).toBe('El precio debe ser un número mayor a 0.');
    });

    it('14. Debe actualizar el precio y el stock de un producto existente', () => {
        const res = actualizarProducto('MC001', { precio: '6500', stock: '12' });
        expect(res.exito).toBe(true);
        const actualizado = obtenerProductos().find((p) => p.id === 'MC001');
        expect(actualizado.precio).toBe(6500);
        expect(actualizado.stock).toBe(12);
    });

    it('15. Debe eliminar un producto y poder restaurar el catálogo original', () => {
        const total = obtenerProductos().length;
        const res = eliminarProducto('MC001');
        expect(res.exito).toBe(true);
        expect(obtenerProductos().length).toBe(total - 1);
        restablecerProductos();
        expect(obtenerProductos().length).toBe(total);
    });
});
