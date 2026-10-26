// Desarrollado por: Camilo Alarcón (src/components/molecules/TarjetaProducto.jsx)

import React from 'react';
import { Card, Button, Badge } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useCarrito } from '../../context/CarritoContext';


// Sistema de fallback mejorado: cubre todas las categorías del Excel
const obtenerImagenFallback = (categoria) => {
  const cat = categoria ? categoria.toLowerCase() : '';


  if (cat.includes('construcción') || cat.includes('mat.')) return 'https://images.unsplash.com/photo-1504307651254-35680f356f12?w=500&q=80';
  if (cat.includes('pintura')) return 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=500&q=80';
  if (cat.includes('herramienta')) return 'https://images.unsplash.com/photo-1581147036324-c1f7ccbfec22?w=500&q=80';
  if (cat.includes('gasfitería') || cat.includes('plomería')) return 'https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=500&q=80';
  if (cat.includes('electricidad')) return 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=500&q=80';
  if (cat.includes('tornillería')) return 'https://images.unsplash.com/photo-1597423244036-ef5020e83f3c?w=500&q=80';
  if (cat.includes('madera')) return 'https://images.unsplash.com/photo-1610992336688-66b0fc1c76ba?w=500&q=80';
  if (cat.includes('seguridad')) return 'https://images.unsplash.com/photo-1588610587208-410a56e095eb?w=500&q=80';
  if (cat.includes('jardín')) return 'https://images.unsplash.com/photo-1416879598555-227092adceb4?w=500&q=80';


  // Imagen por defecto genérica de ferretería
  return 'https://images.unsplash.com/photo-1530124566582-a618bc2615dc?w=500&q=80';
};


export function TarjetaProducto({ producto }) {
  const navigate = useNavigate();
  const { agregarAlCarrito } = useCarrito();


  const { id, nombre, precio, categoria, imagen } = producto;


  // Usamos la imagen que viene de la BD, o el fallback basado en la categoría si no existe
  const imagenFinal = imagen || obtenerImagenFallback(categoria);


  return (
    <Card className="h-100 shadow-sm border-0 hover-shadow transition">
      <div className="position-relative bg-light text-center py-3">
        <Card.Img
          variant="top"
          src={imagenFinal}
          alt={`Fotografía de ${nombre}`}
          loading="lazy" // Buena práctica SEO: Carga diferida de imágenes
          className="img-fluid px-3 object-fit-cover img-tarjeta"
          style={{ height: '200px' }} // Mantiene todas las tarjetas de un tamaño uniforme
        />
        <Badge
          bg="secondary"
          className="position-absolute top-0 end-0 m-2 px-2 py-1 shadow-sm"
        >
          {categoria}
        </Badge>
      </div>


      <Card.Body className="d-flex flex-column justify-content-between">
        <div>
          <Card.Title className="fs-6 fw-bold mb-2 text-dark text-truncate" title={nombre}>
            {nombre}
          </Card.Title>
          <Card.Text className="fs-5 fw-bold text-primary mb-3">
            ${precio ? precio.toLocaleString('es-CL') : '0'}
          </Card.Text>
        </div>


        <div className="d-grid gap-2">
          <Button
            variant="outline-primary"
            size="sm"
            onClick={() => navigate(`/producto/${id}`)}
          >
            Ver Detalle
          </Button>
          <Button
            variant="primary"
            size="sm"
            onClick={() => agregarAlCarrito(producto)}
          >
            🛒 Agregar al Carrito
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}


export default TarjetaProducto;