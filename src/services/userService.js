// Desarrollado por: Camilo Alarcón (src/services/userService.js)

export const USUARIOS_INICIALES = [
    {
        id: 1,
        run: '111111111',
        nombre: 'Sebastián Admin',
        correo: 'admin@duoc.cl',
        password: 'admin123',
        contrasena: 'admin123',
        rol: 'admin',
        region: 'Región de Coquimbo',
        comuna: 'La Serena'
    },
    {
        id: 2,
        run: '222222222',
        nombre: 'Jonathan Vendedor',
        correo: 'vendedor@duoc.cl',
        password: 'vendedor123',
        contrasena: 'vendedor123',
        rol: 'vendedor',
        region: 'Región de Coquimbo',
        comuna: 'Coquimbo'
    },
    {
        id: 3,
        run: '333333333',
        nombre: 'Camilo Cliente',
        correo: 'cliente@duoc.cl',
        password: 'cliente123',
        contrasena: 'cliente123',
        rol: 'cliente',
        region: 'Región de Coquimbo',
        comuna: 'La Serena'
    }
];


export const obtenerUsuarios = () => {
    try {
        const usuarios = localStorage.getItem('usuarios_registrados');
        if (!usuarios) {
            localStorage.setItem('usuarios_registrados', JSON.stringify(USUARIOS_INICIALES));
            return USUARIOS_INICIALES;
        }
        const parseados = JSON.parse(usuarios);
        return Array.isArray(parseados) && parseados.length > 0 ? parseados : USUARIOS_INICIALES;
    } catch (error) {
        return USUARIOS_INICIALES;
    }
};


export const autenticarUsuario = (correo, clave) => {
    const correoLimpio = (correo || '').trim().toLowerCase();
    const claveLimpia = (clave || '').trim();


    const usuarios = obtenerUsuarios();


    const hallado = usuarios.find((u) => {
        const uCorreo = (u.correo || '').trim().toLowerCase();
        const uClave = String(u.password || u.contrasena || u.clave || '').trim();
        return uCorreo === correoLimpio && uClave === claveLimpia;
    });


    if (hallado) {
        const { password: _, contrasena: __, clave: ___, ...usuarioSinClave } = hallado;
        return { exito: true, usuario: usuarioSinClave };
    }


    return { exito: false, mensaje: 'Correo o contraseña incorrectos. Por favor, verifica tus datos.' };
};


export const registrarUsuario = (nuevoUsuario) => {
    const usuarios = obtenerUsuarios();
    const correoLimpio = (nuevoUsuario.correo || '').trim().toLowerCase();


    const existe = usuarios.find(
        (u) => (u.correo || '').trim().toLowerCase() === correoLimpio
    );


    if (existe) {
        return { exito: false, mensaje: 'El correo ya se encuentra registrado.' };
    }


    const claveIngresada = nuevoUsuario.password || nuevoUsuario.contrasena;


    const usuarioConId = {
        ...nuevoUsuario,
        id: Date.now(),
        correo: correoLimpio,
        password: claveIngresada,
        contrasena: claveIngresada,
        rol: nuevoUsuario.rol || (correoLimpio.includes('admin') ? 'admin' : 'cliente')
    };


    const nuevaLista = [...usuarios, usuarioConId];
    localStorage.setItem('usuarios_registrados', JSON.stringify(nuevaLista));


    return { exito: true, mensaje: 'Usuario registrado correctamente.', usuario: usuarioConId };
};


// Inicialización automática al cargar el archivo en la app
obtenerUsuarios();