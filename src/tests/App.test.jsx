import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../App';

test('muestra el nombre completo en el encabezado', () => {
  render(<App />);
  expect(screen.getByText(/Jerson Daniel Lozada/i)).toBeInTheDocument();
});
