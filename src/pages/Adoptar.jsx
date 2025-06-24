import React, { useState, useEffect } from "react"; //se utiliza en React para importar el núcleo de la biblioteca React y dos de sus hooks más comunes//
import "./Adoptar.css"; //sirve para importar un archivo de estilos CSS dentro del componente React//

export default function Adoptar() { //sirve para definir y exportar un componente funcional de React llamado Adoptar//
  const [formulario, setFormulario] = useState({
    fname: "",
    lname: "",
    fecha: "",
    telefono: "",
    animal: "",
    opcion: "",
    email: "",
    responsabilidad: false,
  });

  const [enviados, setEnviados] = useState(() => {
    // Cargar datos guardados al inicio (si existen)
    const datosGuardados = localStorage.getItem("solicitudesAdopcion");
    return datosGuardados ? JSON.parse(datosGuardados) : [];
  });

  const handleChange = (e) => {
    //sirve para manejar los cambios de un input o campo de formulario//
    const { name, value, type, checked } = e.target;
    setFormulario((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    //generalmente se usa en React para manejar el envío de un formulario//
    e.preventDefault();
    const nuevaLista = [...enviados, formulario];
    setEnviados(nuevaLista);
    setFormulario({
      fname: "",
      lname: "",
      fecha: "",
      telefono: "",
      animal: "",
      opcion: "",
      email: "",
      responsabilidad: false,
    });
    // Guardar en localStorage//
    localStorage.setItem("solicitudesAdopcion", JSON.stringify(nuevaLista));
  };

  return (
    <>
      <form id="guardar" onSubmit={handleSubmit}>
        {}
        <h2>¿Quieres adoptar?</h2>
        <p>Ingresa tus datos personales y preferencias de adopción</p>

        <label htmlFor="fname">Nombre:</label>
        <input
          type="text"
          id="fname"
          name="fname"
          value={formulario.fname}
          onChange={handleChange}
          required
        />

        <label htmlFor="lname">Apellido:</label>
        <input
          type="text"
          id="lname"
          name="lname"
          value={formulario.lname}
          onChange={handleChange}
          required
        />

        <label htmlFor="fecha">Fecha de nacimiento:</label>
        <input
          type="date"
          id="fecha"
          name="fecha"
          value={formulario.fecha}
          onChange={handleChange}
          required
        />

        <label htmlFor="telefono">Teléfono:</label>
        <input
          type="number"
          id="telefono"
          name="telefono"
          value={formulario.telefono}
          onChange={handleChange}
          required
        />

        <label htmlFor="animal">¿Qué animal prefieres?</label>
        <select
          id="animal"
          name="animal"
          value={formulario.animal}
          onChange={handleChange}
          required
        >
          <option value="" disabled>
            Seleccione una opción
          </option>
          <option value="perro">Perro</option>
          <option value="gato">Gato</option>
        </select>

        <label htmlFor="opcion">¿Ha tenido mascota?</label>
        <select
          id="opcion"
          name="opcion"
          value={formulario.opcion}
          onChange={handleChange}
          required
        >
          <option value="" disabled>
            Seleccione una opción
          </option>
          <option value="SI">Sí</option>
          <option value="NO">No</option>
        </select>

        <label htmlFor="email">Correo electrónico:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formulario.email}
          onChange={handleChange}
          required
        />

        <label className="checkbox-label">
          <input
            type="checkbox"
            id="responsabilidad"
            name="responsabilidad"
            checked={formulario.responsabilidad}
            onChange={handleChange}
            required
          />
          Acepto ser responsable del cuidado del animal adoptado
        </label>

        <input type="submit" value="Enviar" />
      </form>

      <div className="resumen-container">
        <div className="formulario resumen">
          <h2>Solicitudes enviadas</h2>
          {enviados.length === 0 ? (
            <p>Aún no hay solicitudes.</p>
          ) : (
            <ul>
              {enviados.map((data, i) => ( //sirve para mostrar una lista de personas que enviaron un formulario en React//
                <li key={i} style={{ marginBottom: "1rem" }}>
                  <strong>
                    {data.fname} {data.lname}
                  </strong>
                  <br />
                  Fecha Nac: {data.fecha} | Tel: {data.telefono}
                  <br />
                  Prefiere: {data.animal} | ¿Tuvo mascota?: {data.opcion}
                  <br />
                  Email: {data.email}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </>
  );
}

