import 'bootstrap/dist/css/bootstrap.min.css';
import { productos } from './data/productos';

function App() {
  return (
    <div className="container my-5">
      <h1 className="text-center fw-bold text-primary mb-2">Ferretería Los Maestros</h1>
      <p className="text-center text-muted mb-4">Catálogo Oficial de Productos</p>

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
          productos.map((prod, index) => {
            // Captura de propiedades flexibilizada por si variaron los nombres en el JS
            const nombre = prod.nombre || prod.title || 'Producto';
            const precio = prod.precio || prod.price || prod.costo || 0;
            const descripcion = prod.descripcion || prod.detalles || prod.description || 'Sin descripción disponible';
            const categoria = prod.categoria || prod.category || 'General';

            return (
              <div key={prod.id || index} className="col-12 col-md-6 col-lg-4 mb-4">
                <div className="card h-100 shadow-sm border-0 bg-light">
                  <div className="card-body d-flex flex-column">
                    <div className="d-flex justify-content-between align-items-start mb-2">
                      <span className="badge bg-secondary text-uppercase">{categoria}</span>
                    </div>
                    <h5 className="card-title fw-bold text-dark">{nombre}</h5>
                    <p className="card-text text-muted flex-grow-1">{descripcion}</p>
                    <div className="mt-3 pt-3 border-top d-flex justify-content-between align-items-center">
                      <span className="fs-4 fw-bold text-success">${precio.toLocaleString()}</span>
                      <button className="btn btn-outline-primary btn-sm">Ver Detalle</button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <p className="text-center">No hay productos disponibles.</p>
        )}
      </div>
    </div>
  );
}

export default App;