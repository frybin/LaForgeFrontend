import React from 'react';
import { render } from '@testing-library/react';
import BoxBackground from './BoxBackground';

test('renders learn react link', () => {
  const { getByText } = render(<BoxBackground />);
  const linkElement = getByText(/LaForge/i);
  expect(linkElement).toBeInTheDocument();
});
