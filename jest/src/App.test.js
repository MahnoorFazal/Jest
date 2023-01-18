import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('render 2 list items', () => {
  render(<App />);
  const listitems = screen.getAllByRole("listitem");
  expect(listitems).toHaveLength(3);
});


