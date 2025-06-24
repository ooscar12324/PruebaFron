import { render, screen } from '@testing-library/react'; 
//sirve para importar dos funciones clave de la librería React Testing Library, que se usa para hacer pruebas automatizadas a componentes React.//
import App from './App';

test('muestra el mensaje principal de bienvenida', () => {
  render(<App />);
  const mensaje = screen.getByText(/gracias por visitar fundación sonm/i);
  expect(mensaje).toBeInTheDocument();
});
//Este código es un test automatizado que verifica que tu componente App muestra correctamente un mensaje de bienvenida en pantalla.//