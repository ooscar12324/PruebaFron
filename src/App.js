import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

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
