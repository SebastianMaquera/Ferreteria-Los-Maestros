import React from 'react';

const BuscadorProductos = () => {
  return (
    <div className="input-group">
      <input
        type="text"
        className="form-control"
        placeholder="Buscar productos..."
      />
      <button className="btn btn-primary" type="button">
        Buscar
      </button>
    </div>
  );
};

export default BuscadorProductos;
