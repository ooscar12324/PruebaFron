import React from 'react';
//Importa la biblioteca React, necesaria para usar JSX y componentes React.//
import ReactDOM from 'react-dom/client';
//Importa ReactDOM para poder renderizar tu aplicación React dentro del DOM del navegador. La ruta react-dom/client es la forma moderna en React 18+ para crear la raíz de la app.//
import './index.css';
//Importa el archivo CSS global para aplicar estilos básicos a toda la app.//
import App from './App';
//Importa el componente principal App que es el corazón de tu aplicación React.//
import reportWebVitals from './reportWebVitals';
//Importa una función para medir el rendimiento de la app (no obligatorio, pero útil para optimización).//

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
