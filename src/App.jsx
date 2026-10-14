import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import CatalogoPage from './pages/CatalogoPage';
import { LoginPage } from './pages/LoginPage';
import DetalleProductoPage from './pages/DetalleProductoPage';

function App() {
  return (
    <BrowserRouter>
      {/* Navegación global simple */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary mb-4 shadow-sm">
        <div className="container">
          <Link className="navbar-brand fw-bold" to="/">
            Ferretería Los Maestros
          </Link>
          <div className="navbar-nav">
            <Link className="nav-link text-white me-3" to="/">
              Inicio
            </Link>
            <Link className="nav-link text-white me-3" to="/catalogo">
              Catálogo
            </Link>
            <Link className="nav-link text-white" to="/login">
              Iniciar Sesión
            </Link>
          </div>
        </div>
      </nav>

      {/* Mapa de Rutas */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalogo" element={<CatalogoPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/producto/:id" element={<DetalleProductoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;