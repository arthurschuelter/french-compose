import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the French practice homepage', () => {
  render(<App />);

  expect(screen.getByRole('heading', { name: /make french second nature/i })).toBeInTheDocument();
  expect(screen.getByRole('navigation', { name: /main navigation/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /choose your next move/i })).toBeInTheDocument();
});

test('lists the available minigames with their categories', () => {
  render(<App />);

  expect(screen.getByRole('link', { name: /open the passé composé/i })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /open imparfait or not/i })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /open make it agree/i })).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /all games/i })).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /past tenses/i })).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /verb forms/i })).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /grammar/i })).toBeInTheDocument();
});
