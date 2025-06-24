import React from "react"; //se utiliza para importar la biblioteca React en un archivo JavaScript que usará JSX//
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
//sirve para importar las herramientas necesarias para la navegación entre páginas (rutas) en una aplicación React usando la biblioteca react-router-dom.//

// Componentes comunes
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Páginas
import Inicio from "./pages/Inicio";
import Quienes from "./pages/Quienes";
import BuscoHogar from "./pages/BuscoHogar";
import Adoptar from "./pages/Adoptar";
import Donaciones from "./pages/Donaciones";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/Quienes" element={<Quienes />} />
        <Route path="/buscohogar" element={<BuscoHogar />} />
        <Route path="/adoptar" element={<Adoptar />} />
        <Route path="/donaciones" element={<Donaciones />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
