import React from 'react';
import { render } from '@testing-library/react';
import HeaderTextButton from './HeaderTextButton';

test('renders learn react link', () => {
  const { getByText } = render(<HeaderTextButton />);
  const linkElement = getByText(/LaForge/i);
  expect(linkElement).toBeInTheDocument();
});
