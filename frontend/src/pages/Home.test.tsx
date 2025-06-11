import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Home from './Home';

describe('Home page', () => {
  it('renders quote text', () => {
    render(<Home />);
    expect(screen.getByText(/Playing baseball/i)).toBeInTheDocument();
  });
});
