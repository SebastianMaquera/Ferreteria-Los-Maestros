// ==========================================
// CATÁLOGO DE PRODUCTOS OFICIAL (FORMA E)
// ==========================================
const products = [
    // Herramientas
    { id: 'HM001', name: 'Martillo carpintero 500g Stanley', price: 7990, stock: 20, img: 'assets/img/MartilloCarpintero.jpg' },
    { id: 'HM006', name: 'Juego llaves hexagonales métrico x9 Stanley', price: 5490, stock: 15, img: 'assets/img/JuegoLlaves.jpg' },
    { id: 'HE001', name: 'Taladro percutor 650W 13mm Makita', price: 79900, stock: 8, img: 'assets/img/TaladroMakita.jpg' },
    // Materiales de Construcción
    { id: 'MC001', name: 'Cemento Polpaico gris 25 kg', price: 5990, stock: 80, img: 'assets/img/PolpaicoCemento.jpg' },
    { id: 'MD003', name: 'Terciado estructural 18mm 1.22x2.44m Arauco', price: 34990, stock: 20, img: 'assets/img/Terciado.jpg' },
    // Pinturas
    { id: 'PT001', name: 'Pintura látex interior 1 galón blanco Sipa', price: 9990, stock: 40, img: 'assets/img/PinturaLatex.jpg' },
    // Electricidad
    { id: 'EL011', name: 'Ampolleta LED 9W E27 luz fría Philips', price: 3990, stock: 60, img: 'assets/img/AmpolletaLED.jpg' },
    // Gasfitería
    { id: 'GS009', name: 'Grifería lavamanos monocomando cromo Corona', price: 22990, stock: 10, img: 'assets/img/Griferia.jpg' }
];

// ==========================================
// FUNCIONES DE MANEJO DE LOCALSTORAGE
// ==========================================

function getCart() {
    return JSON.parse(localStorage.getItem('cart')) || [];
}

function saveCart(cart) {
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    renderCart();
}

function updateCartCount() {
    const cart = getCart();
    const countSpan = document.getElementById('cart-count');
    if (countSpan) {
        const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
        countSpan.textContent = totalItems;
    }
}

function addToCart(productId) {
    const cart = getCart();
    const product = products.find(p => p.id === productId);
    
    if (!product) {
        console.error('Producto no encontrado:', productId);
        return;
    }

    const existingIndex = cart.findIndex(item => item.id === productId);

    if (existingIndex > -1) {
        cart[existingIndex].quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    saveCart(cart);
    alert(`${product.name} ha sido agregado al carrito.`);
}

function updateQuantity(productId, change) {
    let cart = getCart();
    const index = cart.findIndex(item => item.id === productId);

    if (index > -1) {
        cart[index].quantity += change;
        if (cart[index].quantity <= 0) {
            cart.splice(index, 1);
        }
        saveCart(cart);
    }
}

function removeFromCart(productId) {
    let cart = getCart();
    cart = cart.filter(item => item.id !== productId);
    saveCart(cart);
}

function clearCart() {
    if (confirm('¿Estás seguro de que deseas vaciar el carrito?')) {
        localStorage.removeItem('cart');
        updateCartCount();
        renderCart();
    }
}

// ==========================================
// RENDERIZADO DE VISTAS (HTML DINÁMICO)
// ==========================================

function renderProducts() {
    const grid = document.getElementById('productGrid');
    if (!grid) return;

    grid.innerHTML = products.map(product => `
        <div class="product-card">
            <img src="${product.img}" alt="${product.name}" onerror="this.onerror=null;this.src='assets/img/Logo.jpg';">
            <h3>${product.name}</h3>
            <p class="price">$${product.price.toLocaleString('es-CL')}</p>
            <p class="stock">Stock disponible: ${product.stock}</p>
            <button onclick="addToCart('${product.id}')" class="btn-primary">Agregar al Carrito</button>
        </div>
    `).join('');
}

function renderCart() {
    const container = document.getElementById('cartContainer');
    const summaryDiv = document.getElementById('cartSummary');
    const cartTotalSpan = document.getElementById('cartTotal');

    if (!container) return;

    const cart = getCart();

    if (cart.length === 0) {
        container.innerHTML = '<p class="empty-cart-msg">Tu carrito está vacío. <a href="productos.html">Ver catálogo</a></p>';
        if (summaryDiv) summaryDiv.classList.add('hidden');
        return;
    }

    let total = 0;
    let tableHtml = `
        <table class="cart-table">
            <thead>
                <tr>
                    <th>Producto</th>
                    <th>Precio</th>
                    <th>Cantidad</th>
                    <th>Subtotal</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
    `;

    cart.forEach(item => {
        const subtotal = item.price * item.quantity;
        total += subtotal;

        tableHtml += `
            <tr>
                <td>
                    <div class="cart-item-info">
                        <img src="${item.img}" alt="${item.name}" class="cart-thumb">
                        <span>${item.name}</span>
                    </div>
                </td>
                <td>$${item.price.toLocaleString('es-CL')}</td>
                <td>
                    <div class="quantity-controls">
                        <button onclick="updateQuantity('${item.id}', -1)">-</button>
                        <span>${item.quantity}</span>
                        <button onclick="updateQuantity('${item.id}', 1)">+</button>
                    </div>
                </td>
                <td>$${subtotal.toLocaleString('es-CL')}</td>
                <td>
                    <button onclick="removeFromCart('${item.id}')" class="btn-danger">Eliminar</button>
                </td>
            </tr>
        `;
    });

    tableHtml += '</tbody></table>';
    container.innerHTML = tableHtml;

    if (summaryDiv && cartTotalSpan) {
        cartTotalSpan.textContent = `$${total.toLocaleString('es-CL')}`;
        summaryDiv.classList.remove('hidden');
    }
}

// ==========================================
// INICIALIZACIÓN DE EVENTOS
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    updateCartCount(); // Se ejecuta siempre para reflejar el número del carrito en el navbar
    renderProducts();  // Solo se renderiza si existe 'productGrid'
    renderCart();      // Solo se renderiza si existe 'cartContainer'

    const btnClear = document.getElementById('btnClearCart');
    if (btnClear) btnClear.addEventListener('click', clearCart);

    const btnCheckout = document.getElementById('btnCheckout');
    if (btnCheckout) {
        btnCheckout.addEventListener('click', () => {
            alert('¡Gracias por tu compra! Tu pedido en Ferretería Los Maestros ha sido procesado.');
            localStorage.removeItem('cart');
            window.location.href = 'index.html';
        });
    }
});