import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../App';

test('muestra el nombre completo en el encabezado', () => {
  render(<App />);
  expect(screen.getByText(/Jerson Daniel Lozada/i)).toBeInTheDocument();
});
test('renderiza sección Sobre mí', () => {
  render(<App />);
  expect(screen.getByText(/Sobre mí/i)).toBeInTheDocument();
});
test('renderiza sección Habilidades principales', () => {
  render(<App />);
  expect(screen.getByText(/Habilidades principales/i)).toBeInTheDocument();
});
test('enlace a GitHub es correcto', () => {
  render(<App />);
  const link = screen.getByText(/DanielLozadaLo/i);
  expect(link).toHaveAttribute('href', expect.stringContaining('github.com/DanielLozadaLo'));
});
test('el correo de contacto está presente', () => {
  render(<App />);
  expect(screen.getByText(/llozadadaniel2006@gmail.com/i)).toBeInTheDocument();
});
