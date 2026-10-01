// ==========================================
// DATOS SIMULADOS PARA ADMINISTRACIÓN
// ==========================================

// Catálogo general de productos
const adminCatalog = [
    { id: 'MC001', cat: 'Mat. Construcción', name: 'Cemento Polpaico gris 25 kg', brand: 'Polpaico', price: 5990, stock: 80, minStock: 20 },
    { id: 'PT001', cat: 'Pinturas', name: 'Pintura látex interior 1 galón blanco', brand: 'Sipa', price: 9990, stock: 40, minStock: 10 },
    { id: 'HM001', cat: 'Herramientas', name: 'Martillo carpintero 500g', brand: 'Stanley', price: 7990, stock: 20, minStock: 5 },
    { id: 'HE001', cat: 'Herramientas', name: 'Taladro percutor 650W 13mm', brand: 'Makita', price: 79990, stock: 8, minStock: 2 },
    { id: 'GS001', cat: 'Gasfitería', name: 'Cañería PVC 1/2" x 6m', brand: 'Tigre', price: 5490, stock: 30, minStock: 10 },
    { id: 'EL011', cat: 'Electricidad', name: 'Ampolleta LED 9W E27 luz fría', brand: 'Philips', price: 3990, stock: 60, minStock: 20 }
];

// Usuarios simulados
const adminUsers = [
    { run: '19876543-2', name: ' Juan Pérez', email: 'juan.perez@gmail.com', role: 'Cliente', region: 'Coquimbo' },
    { run: '12345678-5', name: ' Admin Principal', email: 'admin@duoc.cl', role: 'Administrador', region: 'Santiago' }
];

// ==========================================
// RENDERIZADO DE TABLAS EN ADMIN
// ==========================================

// Cargar tabla de administración de productos
function renderAdminProducts() {
    const container = document.getElementById('adminProductTableContainer');
    if (!container) return;

    let html = `
        <table class="cart-table">
            <thead>
                <tr>
                    <th>Código</th>
                    <th>Categoría</th>
                    <th>Producto</th>
                    <th>Marca</th>
                    <th>Precio Venta</th>
                    <th>Stock</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
    `;

    adminCatalog.forEach(p => {
        const isLowStock = p.stock <= p.minStock;
        html += `
            <tr>
                <td><strong>${p.id}</strong></td>
                <td>${p.cat}</td>
                <td>${p.name}</td>
                <td>${p.brand || 'N/A'}</td>
                <td>$${p.price.toLocaleString('es-CL')}</td>
                <td style="${isLowStock ? 'color: red; font-weight: bold;' : ''}">${p.stock} unid.</td>
                <td>
                    <button onclick="editProduct('${p.id}')" class="btn-secondary" style="padding: 0.2rem 0.5rem;">Editar</button>
                    <button onclick="deleteProduct('${p.id}')" class="btn-danger" style="padding: 0.2rem 0.5rem;">Eliminar</button>
                </td>
            </tr>
        `;
    });

    html += '</tbody></table>';
    container.innerHTML = html;
}

// Cargar tabla de administración de usuarios
function renderAdminUsers() {
    const container = document.getElementById('adminUserTableContainer');
    if (!container) return;

    let html = `
        <table class="cart-table">
            <thead>
                <tr>
                    <th>RUN</th>
                    <th>Nombre</th>
                    <th>Correo Electrónico</th>
                    <th>Rol</th>
                    <th>Región</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
    `;

    adminUsers.forEach(u => {
        html += `
            <tr>
                <td><strong>${u.run}</strong></td>
                <td>${u.name}</td>
                <td>${u.email}</td>
                <td>${u.role}</td>
                <td>${u.region}</td>
                <td>
                    <button onclick="deleteUser('${u.run}')" class="btn-danger" style="padding: 0.2rem 0.5rem;">Eliminar</button>
                </td>
            </tr>
        `;
    });

    html += '</tbody></table>';
    container.innerHTML = html;
}

// ==========================================
// ACCIONES DE PRODUCTOS Y USUARIOS
// ==========================================

function deleteProduct(id) {
    if (confirm(`¿Está seguro de eliminar el producto con código ${id}?`)) {
        const index = adminCatalog.findIndex(p => p.id === id);
        if (index > -1) {
            adminCatalog.splice(index, 1);
            renderAdminProducts();
            alert('Producto eliminado correctamente.');
        }
    }
}

function deleteUser(run) {
    if (confirm(`¿Está seguro de eliminar al usuario con RUN ${run}?`)) {
        const index = adminUsers.findIndex(u => u.run === run);
        if (index > -1) {
            adminUsers.splice(index, 1);
            renderAdminUsers();
            alert('Usuario eliminado correctamente.');
        }
    }
}

function editProduct(id) {
    alert(`Redirigiendo a edición del producto ${id}...`);
}

// ==========================================
// INICIALIZACIÓN Y VALIDACIÓN DE FORMULARIOS
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    renderAdminProducts();
    renderAdminUsers();

    // Formulario de Agregar Nuevo Producto
    const newProductForm = document.getElementById('newProductForm');
    if (newProductForm) {
        newProductForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const code = document.getElementById('prodCode').value.trim();
            const name = document.getElementById('prodName').value.trim();
            const category = document.getElementById('prodCategory').value;
            const price = parseFloat(document.getElementById('prodPrice').value);
            const stock = parseInt(document.getElementById('prodStock').value);

            if (!code || !name || !category || isNaN(price) || isNaN(stock)) {
                alert('Por favor complete todos los campos obligatorios correctamente.');
                return;
            }

            alert(`¡Producto "${name}" (${code}) guardado con éxito!`);
            window.location.href = 'admin-productos.html';
        });
    }
});