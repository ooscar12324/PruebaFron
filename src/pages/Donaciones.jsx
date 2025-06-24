import React from "react"; //se utiliza para importar la biblioteca React en un archivo JavaScript que usará JSX//
import "./Donaciones.css"; //sirve para importar un archivo de estilos CSS dentro del componente React//

export default function Donaciones() { //sirve para declarar un componente funcional de React llamado Donaciones//
  return (
    <>
      <div id="centrar">
        <article>
          <h3>
            Si deseas donarnos, aquí están las cuentas oficiales de la fundación.
            Si quieres donar materiales, por favor menciona qué es.
          </h3>
          <table>
            <thead>
              <tr>
                <th>Banco</th>
                <th>Tipo de Cuenta</th>
                <th>Nº de Cuenta</th>
                <th>Correo de Contacto</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td data-label="Banco">Banco Estado</td>
                <td data-label="Tipo de Cuenta">Cuenta Corriente</td>
                <td data-label="Nº de Cuenta">1234-5678-9012-3456</td>
                <td data-label="Correo de Contacto">contacto@fundacionsonm.com</td>
              </tr>
              <tr>
                <td data-label="Banco">Banco Falabella</td>
                <td data-label="Tipo de Cuenta">Cuenta Vista</td>
                <td data-label="Nº de Cuenta">9876-5432-1098-7654</td>
                <td data-label="Correo de Contacto">contacto@fundacionsonm.com</td>
              </tr>
              <tr>
                <td data-label="Banco">Banco BCI</td>
                <td data-label="Tipo de Cuenta">Cuenta de Ahorro</td>
                <td data-label="Nº de Cuenta">1122-3344-5566-7788</td>
                <td data-label="Correo de Contacto">contacto@fundacionsonm.com</td>
              </tr>
            </tbody>
          </table>
        </article>
      </div>
    </>
  );
}
