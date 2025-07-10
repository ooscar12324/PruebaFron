import { useState } from "react";
import "./NoticiasAnimales.css";


function NoticiasAnimales() {
  const [query, setQuery] = useState("animales");
  const [noticias, setNoticias] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const buscarNoticias = async () => {
    setLoading(true);
    setError("");

    try {
      const apiKey = "65d3d63434a94beebf3210df580cd19b"; 
      const url = `https://newsapi.org/v2/everything?q=${query}&language=es&apiKey=${apiKey}`;
      const respuesta = await fetch(url);
      const datos = await respuesta.json();

      if (datos.status === "ok") {
        setNoticias(datos.articles);
      } else {
        setError("Error al obtener noticias.");
      }
    } catch (e) {
      setError("Error de conexión o clave inválida.");
    }

    setLoading(false);
  };

return (
  <div id="noticias-container">
    <h2>📰 Noticias sobre animales</h2>

    <div id="busqueda-noticias">
      <input
        type="text"
        placeholder="Ej: gatos, adopción, ley animal..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={buscarNoticias}>Buscar</button>
    </div>

    {loading && <p>Cargando noticias...</p>}
    {error && <p style={{ color: "red" }}>{error}</p>}

    <div>
      {noticias.slice(0, 10).map((n, i) => (
        <div className="noticia" key={i}>
          <h3>{n.title}</h3>
          <p>{n.description}</p>
          <a href={n.url} target="_blank" rel="noopener noreferrer">
            Leer más
          </a>
        </div>
      ))}
    </div>
  </div>
);
}
export default NoticiasAnimales;
