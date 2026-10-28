// Desarrollado por: Jonathan Ulloa, Servicio de sesión activa (src/services/authService.js)

const CLAVE_USUARIO_ACTIVO = 'usuarioActivo';

export const obtenerUsuarioActivo = () => {
    try {
        const guardado = localStorage.getItem(CLAVE_USUARIO_ACTIVO);
        return guardado ? JSON.parse(guardado) : null;
    } catch {
        return null;
    }
};

export const guardarUsuarioActivo = (usuario) => {
    localStorage.setItem(CLAVE_USUARIO_ACTIVO, JSON.stringify(usuario));
};

export const borrarUsuarioActivo = () => {
    localStorage.removeItem(CLAVE_USUARIO_ACTIVO);
};
