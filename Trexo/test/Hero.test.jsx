import React from 'react';
import { render, screen } from '@testing-library/react';
import Hero from '../src/landing_page/home/Hero';

describe('Hero component', () => {
  test('renders hero image', () => {
    render(<Hero />);
    const heroImage = screen.getByAltText('Hero');
    expect(heroImage).toBeInTheDocument();
  });
});

