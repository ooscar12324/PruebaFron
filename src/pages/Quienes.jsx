import React from "react"; //se utiliza para importar la biblioteca React en un archivo JavaScript que usará JSX//
import "./Quienes.css"; //sirve para importar un archivo de estilos CSS dentro del componente React//

export default function Quienes() { //sirve para declarar un componente funcional de React llamado Quienes//
  return (
    <div id="centrar">
      <article>
        <h1>
          Somos una fundación para adopción de animales. Nos especializamos en
          perros y gatos.
        </h1>
        <h2>Los fundadores son:</h2>
        <p>
          Personas comprometidas con el bienestar animal. Esta fundación nace del
          amor y respeto por los animales más indefensos.
        </p>

        <div className="miembros">
          <div className="miembro">
            <img src="/imagenes/_fundador1.jpg" alt="Fundador 1" />
            <h3>Niky</h3>
            <ul>
              <li>fundador</li>
              <li>serio, honesto, leal</li>
            </ul>
          </div>
          <div className="miembro">
            <img src="/imagenes/_fundador2.jpg" alt="Fundador 2" />
            <h3>Mia</h3>
            <ul>
              <li>fundadora</li>
              <li>divertida, alegre, curiosa</li>
            </ul>
          </div>
          <div className="miembro">
            <img src="/imagenes/_fundadores.jpg" alt="Fundadores Scamp y Oddy" />
            <h3>Scamp - Oddy</h3>
            <ul>
              <li>los creadores</li>
              <li>leales, fieles, divertidos</li>
            </ul>
          </div>
        </div>
      </article>
    </div>
  );
}
