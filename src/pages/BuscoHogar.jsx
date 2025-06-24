import React from "react";
import "./BuscoHogar.css";

export default function BuscoHogar() {
  return (
    <div id="centrar">
      <article>
        <h1>Gracias por visitar nuestra página Fundaciones SONM</h1>
        <h3>
          Buscamos hogares amorosos para estos animales que esperan una segunda
          oportunidad. Con amor y dedicación, trabajamos para darles la vida que
          merecen
        </h3>
        <h2>
          Nuestro trabajo ha sido reconocido por brindar amor y protección a
          aquellos que no tienen voz.
        </h2>
      </article>

      <h2 className="section-title">Animales que buscan un hogar</h2>
      <div className="animal-container">
        <div className="animal-card" tabIndex={0}>
          <img src="/imagenes/_rascate1.jpg" alt="Firulais" className="animal-img" />
          <table className="animal-table" aria-label="Datos de Firulais">
            <tbody>
              <tr>
                <th>Nombre</th>
                <td>Mia Pascal</td>
              </tr>
              <tr>
                <th>Edad</th>
                <td>5 meses</td>
              </tr>
              <tr>
                <th>Comportamiento</th>
                <td>Curiosa y Juguetóna</td>
              </tr>
              <tr>
                <th>Vacunas al día</th>
                <td>Sí</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="animal-card" tabIndex={0}>
          <img src="/imagenes/_rescate2.jpg" alt="Michi" className="animal-img" />
          <table className="animal-table" aria-label="Datos de Michi">
            <tbody>
              <tr>
                <th>Nombre</th>
                <td>Oddy Andres</td>
              </tr>
              <tr>
                <th>Edad</th>
                <td>3 año</td>
              </tr>
              <tr>
                <th>Comportamiento</th>
                <td>Juguetón y extrovertido</td>
              </tr>
              <tr>
                <th>Vacunas al día</th>
                <td>Sí</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="animal-card" tabIndex={0}>
          <img src="/imagenes/_rescate3.jpg" alt="Toby" className="animal-img" />
          <table className="animal-table" aria-label="Datos de Toby">
            <tbody>
              <tr>
                <th>Nombre</th>
                <td>Niky Miky</td>
              </tr>
              <tr>
                <th>Edad</th>
                <td>1 años</td>
              </tr>
              <tr>
                <th>Comportamiento</th>
                <td>tranquilo y leal</td>
              </tr>
              <tr>
                <th>Vacunas al día</th>
                <td>Si</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="animal-card" tabIndex={0}>
          <img src="/imagenes/_rescate4.jpg" alt="Scamp" className="animal-img" />
          <table className="animal-table" aria-label="Datos de Scamp">
            <tbody>
              <tr>
                <th>Nombre</th>
                <td>Scamp</td>
              </tr>
              <tr>
                <th>Edad</th>
                <td>3 años</td>
              </tr>
              <tr>
                <th>Comportamiento</th>
                <td>leal y protector</td>
              </tr>
              <tr>
                <th>Vacunas al día</th>
                <td>Si</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
