import React from 'react';
import TarjetaProducto from '../components/molecules/TarjetaProducto';
import { productos } from '../data/productos';

function CatalogoPage() {
  return (
    <div className="container my-4">
      <h2 className="text-center fw-bold text-primary mb-2">Catálogo Oficial</h2>
      <p className="text-center text-muted mb-4">Encuentra los mejores productos y herramientas</p>

      {/* Buscador de Productos */}
      <div className="row justify-content-center mb-5">
        <div className="col-md-8">
          <div className="input-group shadow-sm">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Buscar producto por nombre o categoría..."
            />
            <button className="btn btn-primary px-4" type="button">
              Buscar
            </button>
          </div>
        </div>
      </div>

      {/* Grilla de Productos */}
      <div className="row">
        {productos && productos.length > 0 ? (
          productos.map((prod, index) => (
            <div key={prod.id || index} className="col-12 col-md-6 col-lg-4 mb-4">
              <TarjetaProducto producto={prod} />
            </div>
          ))
        ) : (
          <p className="text-center">No hay productos disponibles.</p>
        )}
      </div>
    </div>
  );
}

export default CatalogoPage;
