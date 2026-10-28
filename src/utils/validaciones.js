// Desarrollado por: Camilo Alarcón (src/utils/validaciones.js)

const DOMINIOS_PERMITIDOS = ['@duoc.cl', '@profesor.duoc.cl', '@gmail.com'];

// 1. Validaciones para el LoginForm (devuelven mensajes de error)
export function validarCorreo(correo) {
  if (!correo || correo.trim() === '') {
    return 'El correo electrónico es obligatorio.';
  }
  const valido = DOMINIOS_PERMITIDOS.some((dominio) => correo.toLowerCase().endsWith(dominio));
  if (!valido) {
    return 'Solo se permiten correos @duoc.cl, @profesor.duoc.cl o @gmail.com';
  }
  return '';
}

export function validarClave(clave) {
  if (!clave) {
    return 'La contraseña es obligatoria.';
  }
  if (clave.length < 4 || clave.length > 10) {
    return 'La contraseña debe tener entre 4 y 10 caracteres.';
  }
  return '';
}

// 2. Validaciones para Registro y Contacto (devuelven true/false)
export function validarCorreoDuoc(correo) {
  if (!correo) return false;
  return DOMINIOS_PERMITIDOS.some((dominio) => correo.toLowerCase().endsWith(dominio));
}

export function validarRun(run) {
  if (!run) return false;
  // Verifica que sean 7 a 8 números seguidos de un número o letra K (ej: 19011022K)
  const runRegex = /^[0-9]{7,8}[0-9Kk]$/;
  return runRegex.test(run.trim());
}

export function validarNombre(nombre) {
  if (!nombre || typeof nombre !== 'string') return false;
  // Solo permite letras (con acentos y ñ) y espacios (mínimo 3, máximo 50 caracteres)
  const nombreRegex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]{3,50}$/;
  return nombreRegex.test(nombre.trim());
}
