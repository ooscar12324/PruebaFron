import { render, screen } from '@testing-library/react';
import App from './App';

test('muestra el mensaje principal de bienvenida', () => {
  render(<App />);
  const mensaje = screen.getByText(/gracias por visitar fundación sonm/i);
  expect(mensaje).toBeInTheDocument();
});
