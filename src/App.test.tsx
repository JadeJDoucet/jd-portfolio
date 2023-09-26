import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders footer', () => {
  render(<App />);
  const footerElement = screen.getByText(/JD Development & Design/i);
  expect(footerElement).toBeInTheDocument();
});
