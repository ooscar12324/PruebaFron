import React from "react"; //se utiliza para importar la biblioteca React en un archivo JavaScript que usará JSX//
import "./Inicio.css"; //sirve para importar un archivo de estilos CSS dentro del componente React//

export default function Inicio() { //sirve para declarar un componente funcional de React llamado inicio//
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

      <article id="bottom-section">
        <h3>
          Nuestro objetivo es encontrarles un hogar lleno de amor y felicidad a
          estos animales que han sido abandonados o maltratados. Queremos que
          vivan en un entorno seguro y acogedor, donde puedan recibir el cuidado
          y la atención que merecen. Tu apoyo es fundamental para lograrlo, y te
          agradecemos de corazón por creer en nuestra causa
        </h3>
        <h2>
          La lucha por los animales no es fácil, pero el reconocimiento nos motiva
          a seguir adelante. Seguiremos trabajando con dedicación para protegerlos.
        </h2>
      </article>
    </div>
  );
}
