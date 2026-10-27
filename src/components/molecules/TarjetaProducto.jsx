// Desarrollado por: Camilo Alarcón (src/components/molecules/TarjetaProducto.jsx)

import React from 'react';
import { Link } from 'react-router-dom';
import { useCarrito } from '../../context/CarritoContext';

export const TarjetaProducto = ({ producto }) => {
  const { agregarAlCarrito } = useCarrito();

  // Cargar la imagen del producto o la imagen por defecto
  const imagenSrc = producto.imagen || `/img/${producto.id}.jpg`;

  return (
    <div className="card h-100 shadow-sm border-0 position-relative overflow-hidden hover-scale">
      {/* Contenedor adaptativo mediante clase CSS sin style={{ height: '200px' }} */}
      <div className="position-relative bg-white rounded-top d-flex align-items-center justify-content-center p-3 product-card-img-container">
        <span className="badge bg-dark position-absolute top-0 end-0 m-2 shadow-sm">
          {producto.categoria}
        </span>

        <img
          src={imagenSrc}
          className="card-img-top product-card-img"
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
          <p className="card-text text-dark fw-bold fs-5 my-2">
            ${producto.precio?.toLocaleString('es-CL')}
          </p>
        </div>

        <div className="mt-auto d-grid gap-2">
          <Link to={`/producto/${producto.id}`} className="btn btn-outline-secondary btn-sm">
            Ver Detalle
          </Link>
          <button
            onClick={() => agregarAlCarrito && agregarAlCarrito(producto)}
            className="btn btn-warning btn-sm fw-bold text-dark"
          >
            🛒 Agregar al Carrito
          </button>
        </div>
      </div>
    </div>
  );
};