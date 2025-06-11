import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from '../../src/App';

// basic example test

describe('App component', () => {
  it('renders maintenance message', () => {
    render(<App />);
    expect(screen.getByText(/trabajando en el campo/i)).toBeDefined();
  });
});
