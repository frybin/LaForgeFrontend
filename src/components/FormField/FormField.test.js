import React from 'react';
import { render } from '@testing-library/react';
import FormField from './FormField';

test('renders learn react link', () => {
  const { getByText } = render(<FormField />);
  const linkElement = getByText(/LaForge/i);
  expect(linkElement).toBeInTheDocument();
});
