import { render, screen } from '@testing-library/react';
import App from './App';

test('renders toggle view button', () => {
  render(<App />);
  const buttonElement = screen.getByRole('button', { name: /toggle view/i });
  expect(buttonElement).toBeInTheDocument();
});
