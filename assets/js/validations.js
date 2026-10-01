// ==========================================
// FUNCIONES DE AYUDA Y VALIDACIONES NATIVAS
// ==========================================

// Algoritmo Módulo 11 para validación de RUN Chileno
function validateRun(run) {
    // Validar formato básico (7 a 8 números + dígito verificador K o número)
    if (!/^[0-9]{7,8}[0-9kK]{1}$/.test(run)) return false;
    
    const body = run.slice(0, -1);
    let dv = run.slice(-1).toUpperCase();
    
    let suma = 0;
    let multiplicador = 2;
    for (let i = body.length - 1; i >= 0; i--) {
        suma += parseInt(body.charAt(i)) * multiplicador;
        multiplicador = multiplicador === 7 ? 2 : multiplicador + 1;
    }
    
    let dvEsperado = 11 - (suma % 11);
    if (dvEsperado === 11) dvEsperado = '0';
    else if (dvEsperado === 10) dvEsperado = 'K';
    else dvEsperado = dvEsperado.toString();

    return dv === dvEsperado;
}

// Comunas por Región (para selects dinámicos)
const comunasPorRegion = {
    coquimbo: ['La Serena', 'Coquimbo', 'Ovalle', 'Vicuña'],
    santiago: ['Santiago', 'Maipú', 'Providencia', 'San Bernardo', 'Las Condes']
};


// ==========================================
// INICIALIZACIÓN DE EVENTOS AL CARGAR EL DOM
// ==========================================
document.addEventListener('DOMContentLoaded', () => {

    // --------------------------------------
    // A) VALIDACIÓN FORMULARIO LOGIN
    // --------------------------------------
    const loginForm = document.getElementById('loginForm');

    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            let isValid = true;

            const emailInput = document.getElementById('email');
            const passwordInput = document.getElementById('password');
            const emailError = document.getElementById('emailError');
            const passwordError = document.getElementById('passwordError');

            // Limpiar errores previos
            emailError.textContent = '';
            passwordError.textContent = '';

            // Validar Correo
            const emailValue = emailInput.value.trim();
            const allowedDomains = ['@duoc.cl', '@profesor.duoc.cl', '@gmail.com'];
            const hasValidDomain = allowedDomains.some(domain => emailValue.endsWith(domain));

            if (!emailValue) {
                emailError.textContent = 'El correo electrónico es requerido.';
                isValid = false;
            } else if (emailValue.length > 100) {
                emailError.textContent = 'El correo no puede superar los 100 caracteres.';
                isValid = false;
            } else if (!hasValidDomain) {
                emailError.textContent = 'Solo se permiten correos @duoc.cl, @profesor.duoc.cl y @gmail.com.';
                isValid = false;
            }

            // Validar Contraseña
            const passValue = passwordInput.value.trim();
            if (!passValue) {
                passwordError.textContent = 'La contraseña es requerida.';
                isValid = false;
            } else if (passValue.length < 4 || passValue.length > 10) {
                passwordError.textContent = 'La contraseña debe tener entre 4 y 10 caracteres.';
                isValid = false;
            }

            if (isValid) {
                alert('¡Inicio de sesión exitoso!');
                window.location.href = 'index.html';
            }
        });
    }

    // --------------------------------------
    // B) CARGA DINÁMICA DE COMUNAS
    // --------------------------------------
    const regionSelect = document.getElementById('region');
    const comunaSelect = document.getElementById('comuna');

    if (regionSelect && comunaSelect) {
        regionSelect.addEventListener('change', (e) => {
            const regionSelected = e.target.value;
            comunaSelect.innerHTML = '<option value="">Seleccione Comuna</option>';

            if (regionSelected && comunasPorRegion[regionSelected]) {
                comunasPorRegion[regionSelected].forEach(comuna => {
                    const option = document.createElement('option');
                    option.value = comuna.toLowerCase().replace(/\s+/g, '-');
                    option.textContent = comuna;
                    comunaSelect.appendChild(option);
                });
                comunaSelect.disabled = false;
            } else {
                comunaSelect.disabled = true;
            }
        });
    }

    // --------------------------------------
    // C) VALIDACIÓN FORMULARIO REGISTRO
    // --------------------------------------
    const registerForm = document.getElementById('registerForm');

    if (registerForm) {
        registerForm.addEventListener('submit', (e) => {
            e.preventDefault();
            let isValid = true;

            const runInput = document.getElementById('run');
            const runError = document.getElementById('runError');
            const nombreInput = document.getElementById('nombre');
            const nombreError = document.getElementById('nombreError');

            // Limpiar errores
            if (runError) runError.textContent = '';
            if (nombreError) nombreError.textContent = '';

            // Validar RUN
            const runValue = runInput.value.trim();
            if (!runValue) {
                runError.textContent = 'El RUN es obligatorio.';
                isValid = false;
            } else if (!validateRun(runValue)) {
                runError.textContent = 'RUN inválido. Ingrese un RUN válido sin puntos ni guion.';
                isValid = false;
            }

            // Validar Nombre
            if (!nombreInput.value.trim()) {
                nombreError.textContent = 'El nombre es obligatorio.';
                isValid = false;
            }

            if (isValid) {
                alert('¡Registro de usuario realizado con éxito!');
                window.location.href = 'login.html';
            }
        });
    }
});