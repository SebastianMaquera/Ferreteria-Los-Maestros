const DOMINIOS_PERMITIDOS = ['@duoc.cl', '@profesor.duoc.cl', '@gmail.com'];

export function validarCorreo(correo) {
  if (!correo || correo.trim() === '') return 'El correo electrónico es obligatorio.';
  const valido = DOMINIOS_PERMITIDOS.some((d) => correo.toLowerCase().endsWith(d));
  if (!valido) return 'Solo se permiten correos @duoc.cl, @profesor.duoc.cl o @gmail.com';
  return '';
}

export function validarClave(clave) {
  if (!clave) return 'La contraseña es obligatoria.';
  if (clave.length < 4 || clave.length > 10) return 'La contraseña debe tener entre 4 y 10 caracteres.';
  return '';
}