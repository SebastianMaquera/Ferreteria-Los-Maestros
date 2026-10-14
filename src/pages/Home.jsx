import React from 'react';

function Home() {
    return (
        <div className="container my-5">
            {/* Banner de Bienvenida estilo Cyber / Ofertas */}
            <div className="p-5 mb-4 bg-primary text-white rounded-3 shadow-sm text-center">
                <h1 className="display-4 fw-bold">¡Grandes Ofertas en Ferretería!</h1>
                <p className="lead">
                    Encuentra los mejores materiales de construcción, herramientas y gasfitería al mejor precio.
                </p>
                <a href="/catalogo" className="btn btn-warning btn-lg fw-bold mt-2">
                    Ver Catálogo Completo
                </a>
            </div>

            {/* Categorías Destacadas */}
            <h2 className="fw-bold mb-4 text-center">Categorías Destacadas</h2>
            <div className="row g-4">
                <div className="col-md-4">
                    <div className="card h-100 shadow-sm text-center p-3">
                        <div className="card-body">
                            <h4 className="card-title text-primary">Herramientas</h4>
                            <p className="card-text text-muted">Taladros, martillos, llaves y más equipo profesional.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card h-100 shadow-sm text-center p-3">
                        <div className="card-body">
                            <h4 className="card-title text-primary">Materiales</h4>
                            <p className="card-text text-muted">Cemento, ladrillos, pino radiata y obra gruesa.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card h-100 shadow-sm text-center p-3">
                        <div className="card-body">
                            <h4 className="card-title text-primary">Pinturas</h4>
                            <p className="card-text text-muted">Látex, esmaltes y tineta para interiores y exteriores.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;