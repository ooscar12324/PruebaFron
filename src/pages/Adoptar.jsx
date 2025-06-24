import React from "react";
import "./Adoptar.css";

export default function Adoptar() {
  return (
    <form id="guardar">
      <h2>¿Quieres adoptar?</h2>
      <p>Ingresa tus datos personales y preferencias de adopción</p>

      <label htmlFor="fname">Nombre:</label>
      <input type="text" id="fname" name="fname" required />

      <label htmlFor="lname">Apellido:</label>
      <input type="text" id="lname" name="lname" required />

      <label htmlFor="fecha">Fecha de nacimiento:</label>
      <input type="date" id="fecha" name="fecha" required />

      <label htmlFor="telefono">Teléfono:</label>
      <input type="number" id="telefono" name="telefono" required />

      <label htmlFor="animal">¿Qué animal prefieres?</label>
      <select id="animal" name="animal" required defaultValue="">
        <option value="" disabled>
          Seleccione una opción
        </option>
        <option value="perro">Perro</option>
        <option value="gato">Gato</option>
      </select>

      <label htmlFor="opcion">¿Ha tenido mascota?</label>
      <select id="opcion" name="opciones" required defaultValue="">
        <option value="" disabled>
          Seleccione una opción
        </option>
        <option value="SI">Sí</option>
        <option value="NO">No</option>
      </select>

      <label htmlFor="email">Correo electrónico:</label>
      <input type="email" id="email" name="email" required />

      <label className="checkbox-label">
        <input
          type="checkbox"
          id="responsabilidad"
          name="responsabilidad"
          required
        />
        Acepto ser responsable del cuidado del animal adoptado
      </label>

      <input type="submit" value="Enviar" />
    </form>
  );
}
