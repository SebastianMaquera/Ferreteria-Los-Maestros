import { describe, it, expect, beforeEach } from 'vitest';
import { obtenerUsuarios, autenticarUsuario, registrarUsuario } from './userService';

describe('Pruebas Unitarias - Servicio de Usuarios y Autenticación', () => {
    beforeEach(() => {
        localStorage.clear();
    });

    it('6. Debe retornar los usuarios iniciales si localStorage está vacío', () => {
        const usuarios = obtenerUsuarios();
        expect(usuarios.length).toBeGreaterThanOrEqual(3);
    });

    it('7. Debe autenticar correctamente al Administrador con credenciales válidas', () => {
        const res = autenticarUsuario('admin@duoc.cl', 'admin123');
        expect(res.exito).toBe(true);
        expect(res.usuario.rol).toBe('admin');
    });

    it('8. Debe fallar la autenticación si la contraseña es incorrecta', () => {
        const res = autenticarUsuario('admin@duoc.cl', 'claveErrada');
        expect(res.exito).toBe(false);
        expect(res.mensaje).toBe('Correo o contraseña incorrectos. Por favor, verifica tus datos.');
    });

    it('9. Debe impedir el registro si el correo ya existe en el sistema', () => {
        const res = registrarUsuario({
            run: '111111111',
            nombre: 'Prueba',
            correo: 'admin@duoc.cl',
            password: 'admin123'
        });
        expect(res.exito).toBe(false);
        expect(res.mensaje).toBe('El correo ya se encuentra registrado.');
    });

    it('10. Debe registrar un nuevo cliente correctamente', () => {
        const nuevo = {
            run: '188888888',
            nombre: 'Nuevo Usuario',
            correo: 'nuevocliente@duoc.cl',
            password: 'cliente123',
            region: 'Región de Coquimbo',
            comuna: 'La Serena'
        };
        const res = registrarUsuario(nuevo);
        expect(res.exito).toBe(true);
        expect(res.usuario.correo).toBe('nuevocliente@duoc.cl');
    });
});