// Desarrollado por: Jonathan Ulloa, Servicio de productos: CRUD simulado con localStorage (src/services/productoService.js)
// 

import { PRODUCTOS } from '../data/productos';

const CLAVE_PRODUCTOS = 'productos_catalogo';

const copiarIniciales = () => PRODUCTOS.map((producto) => ({ ...producto }));

const guardar = (lista) => {
    localStorage.setItem(CLAVE_PRODUCTOS, JSON.stringify(lista));
    return lista;
};

// Genera un id correlativo para los productos creados desde el panel (PR001, PR002, ...)
const generarId = (lista) => {
    const maximo = lista.reduce((acc, p) => {
        const coincidencia = /^PR(\d+)$/.exec(String(p.id));
        return coincidencia ? Math.max(acc, Number(coincidencia[1])) : acc;
    }, 0);
    return `PR${String(maximo + 1).padStart(3, '0')}`;
};

// Devuelve un mensaje de error o una cadena vacía si los datos son válidos
const validarDatos = ({ nombre, precio, stock }) => {
    if (!nombre || !String(nombre).trim()) {
        return 'El nombre del producto es obligatorio.';
    }
    const precioNumero = Number(precio);
    if (precio === '' || precio === null || precio === undefined || !Number.isFinite(precioNumero) || precioNumero <= 0) {
        return 'El precio debe ser un número mayor a 0.';
    }
    const stockNumero = Number(stock);
    if (stock === '' || stock === null || stock === undefined || !Number.isInteger(stockNumero) || stockNumero < 0) {
        return 'El stock debe ser un número entero igual o mayor a 0.';
    }
    return '';
};

// READ
export const obtenerProductos = () => {
    try {
        const guardado = localStorage.getItem(CLAVE_PRODUCTOS);
        if (!guardado) {
            return guardar(copiarIniciales());
        }
        const lista = JSON.parse(guardado);
        return Array.isArray(lista) ? lista : guardar(copiarIniciales());
    } catch {
        return copiarIniciales();
    }
};

// CREATE
export const crearProducto = (datos) => {
    const error = validarDatos(datos);
    if (error) {
        return { exito: false, mensaje: error };
    }

    const lista = obtenerProductos();
    const nuevo = {
        id: generarId(lista),
        nombre: String(datos.nombre).trim(),
        categoria: datos.categoria,
        marca: (datos.marca || '').trim(),
        unidad: datos.unidad || 'Unidad',
        precio: Number(datos.precio),
        stock: Number(datos.stock),
        stockMinimo: 5,
        destacado: false,
        imagen: ''
    };

    guardar([nuevo, ...lista]);
    return { exito: true, mensaje: 'Producto creado correctamente.', producto: nuevo };
};

// UPDATE
export const actualizarProducto = (id, cambios) => {
    const lista = obtenerProductos();
    const existente = lista.find((p) => String(p.id) === String(id));
    if (!existente) {
        return { exito: false, mensaje: 'El producto no existe.' };
    }

    const combinado = { ...existente, ...cambios };
    const error = validarDatos(combinado);
    if (error) {
        return { exito: false, mensaje: error };
    }

    const actualizado = {
        ...combinado,
        nombre: String(combinado.nombre).trim(),
        marca: (combinado.marca || '').trim(),
        precio: Number(combinado.precio),
        stock: Number(combinado.stock)
    };

    guardar(lista.map((p) => (String(p.id) === String(id) ? actualizado : p)));
    return { exito: true, mensaje: 'Producto actualizado correctamente.', producto: actualizado };
};

// DELETE
export const eliminarProducto = (id) => {
    const lista = obtenerProductos();
    if (!lista.some((p) => String(p.id) === String(id))) {
        return { exito: false, mensaje: 'El producto no existe.' };
    }
    guardar(lista.filter((p) => String(p.id) !== String(id)));
    return { exito: true, mensaje: 'Producto eliminado correctamente.' };
};

// Vuelve al catálogo original (data/productos.js)
export const restablecerProductos = () => guardar(copiarIniciales());
