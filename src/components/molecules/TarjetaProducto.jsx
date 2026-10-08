import React from 'react';
import EtiquetaCategoria from '../atoms/EtiquetaCategoria';

const TarjetaProducto = ({ producto }) => {
  if (!producto) return null;

  return (
    <div className="card h-100 shadow-sm">
      <div className="card-body">
        <span className="badge bg-primary mb-2">
          {producto.categoria || 'General'}
        </span>
        <h5 className="card-title">{producto.nombre}</h5>
        <p className="card-text text-muted">{producto.descripcion}</p>
        <p className="fw-bold text-success">${producto.precio}</p>
      </div>
    </div>
  );
};

export default TarjetaProducto;
