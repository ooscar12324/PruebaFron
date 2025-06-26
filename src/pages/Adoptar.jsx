import React, { useState, useEffect } from "react"; //sirve para importar React y dos de sus hooks más usados//
import "./Adoptar.css"; //sirve para importar un archivo de estilos CSS dentro del componente React//

export default function Adoptar() {
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
    const datosGuardados = localStorage.getItem("solicitudesAdopcion");
    return datosGuardados ? JSON.parse(datosGuardados) : [];
  });

  const [editIndex, setEditIndex] = useState(null); // Nuevo estado: para saber si se está editando //

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormulario((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let nuevaLista;

    if (editIndex !== null) {
      // Actualizar existente //
      nuevaLista = [...enviados];
      nuevaLista[editIndex] = formulario;
      setEditIndex(null);
    } else {
      // Agregar nuevo //
      nuevaLista = [...enviados, formulario];
    }

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
    localStorage.setItem("solicitudesAdopcion", JSON.stringify(nuevaLista));
  };

  const handleEditar = (index) => {
    setFormulario(enviados[index]);
    setEditIndex(index);
  };

  const handleEliminar = (index) => {
    const nuevaLista = enviados.filter((_, i) => i !== index);
    setEnviados(nuevaLista);
    localStorage.setItem("solicitudesAdopcion", JSON.stringify(nuevaLista));
    if (editIndex === index) {
      setEditIndex(null);
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
    }
  };


  return (
    //onSubmit se usa en formularios en React para detectar cuándo el usuario envía el formulario y ejecutar una función específica cuando eso ocurre //
    //handleChange es una función que se usa para actualizar el estado//
    <>
      <form id="guardar" onSubmit={handleSubmit}> 
        <h2>{editIndex !== null ? "Editar solicitud" : "¿Quieres adoptar?"}</h2>
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
          <option value="" disabled>Seleccione una opción</option>
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
          <option value="" disabled>Seleccione una opción</option>
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

        <input
          type="submit"
          value={editIndex !== null ? "Actualizar" : "Enviar"}
        />
      </form>

      <div className="resumen-container">
        <div className="formulario resumen">
          <h2>Solicitudes enviadas</h2>
          {enviados.length === 0 ? (
            <p>Aún no hay solicitudes.</p>
          ) : (
            <ul>
              {enviados.map((data, i) => (
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
                  <br />
                  <button onClick={() => handleEditar(i)}>Editar</button>{" "}
                  <button onClick={() => handleEliminar(i)}>Eliminar</button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </>
  );
}
