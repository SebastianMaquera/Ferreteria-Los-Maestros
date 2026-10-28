// Desarrollado por: Camilo Alarcón (src/components/molecules/TarjetaProducto.jsx)

import React from 'react';
import { Link } from 'react-router-dom';
import { useCarrito } from '../../context/CarritoContext';

export const TarjetaProducto = ({ producto }) => {
  const { carrito, agregarAlCarrito } = useCarrito();

  // Cargar la imagen del producto o la imagen por defecto
  const imagenSrc = producto.imagen || `/img/${producto.id}.jpg`;

  // Stock disponible = stock total - unidades que ya están en el carrito
  const itemEnCarrito = carrito.find((item) => String(item.id) === String(producto.id));
  const cantidadEnCarrito = itemEnCarrito ? (itemEnCarrito.cantidad || 1) : 0;
  const stockDisponible = Math.max(0, (producto.stock || 0) - cantidadEnCarrito);

  const handleAgregar = () => {
    if (stockDisponible > 0) {
      agregarAlCarrito(producto);
    }
  };

  return (
    <div className="card h-100 shadow-sm border-0 position-relative overflow-hidden hover-scale">
      <div className="position-relative bg-white rounded-top d-flex align-items-center justify-content-center p-3 product-card-img-container">
        <span className="badge bg-dark position-absolute top-0 end-0 m-2 shadow-sm">
          {producto.categoria}
        </span>

        <img
          src={imagenSrc}
          className="product-card-img"
          alt={producto.nombre}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = '/img/shopping.webp';
          }}
        />
      </div>

      <div className="card-body d-flex flex-column justify-content-between p-3">
        <div>
          <h5 className="card-title h6 fw-bold text-dark text-truncate" title={producto.nombre}>
            {producto.nombre}
          </h5>
          <p className="card-text text-dark fw-bold fs-5 mt-2 mb-1">
            ${producto.precio?.toLocaleString('es-CL')}
          </p>
          <p className="extra-small mb-3">
            <strong>Stock:</strong>{' '}
            <span className={stockDisponible === 0 ? 'text-danger fw-bold' : 'text-secondary'}>
              {stockDisponible === 0 ? 'Sin stock disponible' : `${stockDisponible} un. disponibles`}
            </span>
          </p>
        </div>

        <div className="mt-auto d-grid gap-2">
          <Link to={`/producto/${producto.id}`} className="btn btn-outline-secondary btn-sm">
            Ver Detalle
          </Link>
          <button
            onClick={handleAgregar}
            disabled={stockDisponible <= 0}
            className={
              stockDisponible <= 0
                ? 'btn btn-secondary btn-sm fw-bold'
                : 'btn btn-warning btn-sm fw-bold text-dark'
            }
          >
            {stockDisponible <= 0 ? 'Sin Stock' : '🛒 Agregar al Carrito'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default TarjetaProducto;
