import React from 'react';
import { render } from '@testing-library/react';
import BlueBackground from './BlueBackground';

test('renders learn react link', () => {
  const { getByText } = render(<BlueBackground />);
  const linkElement = getByText(/LaForge/i);
  expect(linkElement).toBeInTheDocument();
});
