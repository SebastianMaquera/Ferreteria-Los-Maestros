import { describe, it, expect } from 'vitest';
import { validarRun, validarCorreoDuoc } from './validaciones';

describe('Pruebas Unitarias - Validaciones de Formulario', () => {
    it('1. Debe validar un RUN chileno correcto sin puntos ni guión', () => {
        expect(validarRun('19011022K')).toBe(true);
    });

    it('2. Debe rechazar un RUN con caracteres inválidos o longitud incorrecta', () => {
        expect(validarRun('123')).toBe(false);
    });

    it('3. Debe aceptar un correo institucional @duoc.cl', () => {
        expect(validarCorreoDuoc('alumno@duoc.cl')).toBe(true);
    });

    it('4. Debe aceptar un correo de docente @profesor.duoc.cl o @gmail.com', () => {
        expect(validarCorreoDuoc('profe@profesor.duoc.cl')).toBe(true);
        expect(validarCorreoDuoc('usuario@gmail.com')).toBe(true);
    });

    it('5. Debe rechazar un correo con dominio no autorizado', () => {
        expect(validarCorreoDuoc('usuario@hotmail.com')).toBe(false);
    });
});