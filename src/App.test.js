import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders hi there', () => {
  render(<App />);
  const linkElement = screen.getByText(/hi there/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders learn react link 3', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

