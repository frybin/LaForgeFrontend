import React from 'react';
import { render } from '@testing-library/react';
import TopBar from './TopBar';

test('renders learn react link', () => {
  const { getByText } = render(<TopBar />);
  const linkElement = getByText(/LaForge/i);
  expect(linkElement).toBeInTheDocument();
});
