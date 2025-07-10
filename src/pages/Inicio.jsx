import React from "react";
import "./Inicio.css";
import NoticiasAnimales from "../components/NoticiasAnimales"; 

export default function Inicio() {
  return (
    <div id="container">
      <img src="/imagenes/_baneer.jpg" alt="Banner de la página" id="banner" />
      
      <article id="top-section">
        <h1 id="movimiento">
          Gracias por visitar Fundación SONM. Cada visita salva un animal.
        </h1>
      </article>

      <section id="content-section">
        <img src="/imagenes/_gata1.jpg" alt="Gatita bebé" className="image-left" />
        <div id="text-content">
          <p>
            A esta pobre gata la iban a abandonar, pero gracias a nuestra
            fundación está sana y a salvo con todas sus vacunas al día.
          </p>
        </div>
        <img src="/imagenes/_gata1.1.jpg" alt="Gatito feliz" className="image-right" />
      </section>

      {/* 🔍 Buscador de noticias */}
      <NoticiasAnimales />

      <article id="bottom-section">
        <h3>
          Nuestro objetivo es encontrarles un hogar lleno de amor y felicidad a
          estos animales que han sido abandonados o maltratados...
        </h3>
        <h2>
          La lucha por los animales no es fácil, pero el reconocimiento nos motiva
          a seguir adelante...
        </h2>
      </article>
    </div>
  );
}
