import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Math Magician link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Math Magician/i);
  expect(linkElement).toBeInTheDocument();
});
