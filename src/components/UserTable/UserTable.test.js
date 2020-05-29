import React from 'react';
import { render } from '@testing-library/react';
import UserTable from './UserTable';

test('renders learn react link', () => {
  const { getByText } = render(<UserTable />);
  const linkElement = getByText(/LaForge/i);
  expect(linkElement).toBeInTheDocument();
});
