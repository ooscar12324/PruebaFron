import React from "react"; //se utiliza para importar la biblioteca React en un archivo JavaScript que usará JSX//
import "./Footer.css"; //sirve para importar un archivo de estilos CSS dentro del componente React//

export default function Footer() {
  return (
    <footer>
      <h3>Contactanos en nuestras redes sociales</h3>
      <div className="social-links">
        <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
          <img src="/imagenes/_facebook.svg" alt="Facebook" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noreferrer">
          <img src="/imagenes/_twitter.svg" alt="Twitter" />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
          <img src="/imagenes/_instagram.svg" alt="Instagram" />
        </a>
      </div>
      <p>Copyright © 2025 Fundación SONM. Todos los derechos reservados.</p>
    </footer>
  );
}
