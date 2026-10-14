import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { productos } from '../data/productos';

function DetalleProductoPage() {
  const { id } = useParams();
  const producto = productos.find((p) => String(p.id) === String(id));

  if (!producto) {
    return (
      <div className="container my-5 text-center">
        <h2>Producto no encontrado</h2>
        <Link to="/catalogo" className="btn btn-primary mt-3">
          Volver al Catálogo
        </Link>
      </div>
    );
  }

  return (
    <div className="container my-5">
      <div className="card shadow-sm p-4 border-0 bg-light">
        <div className="row g-4 align-items-center">
          <div className="col-md-6 text-center">
            <span className="badge bg-secondary mb-3 text-uppercase">
              {producto.categoria || 'General'}
            </span>
            <h2 className="fw-bold text-dark">{producto.nombre}</h2>
            <p className="lead text-muted">{producto.descripcion || 'Sin descripción disponible.'}</p>
          </div>
          <div className="col-md-6 border-start ps-md-5">
            <h3 className="text-success fw-bold mb-4">
              ${producto.precio ? producto.precio.toLocaleString('es-CL') : 0}
            </h3>
            <p><strong>Stock disponible:</strong> {producto.stock || 'Consultar'}</p>
            <div className="d-flex gap-2 mt-4">
              <button className="btn btn-primary btn-lg">Agregar al Carrito</button>
              <Link to="/catalogo" className="btn btn-outline-secondary btn-lg">
                Volver
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetalleProductoPage;
