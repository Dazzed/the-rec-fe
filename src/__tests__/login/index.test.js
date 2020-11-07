import React from 'react';
import { render, fireEvent, screen } from '../../lib/utils/test-util';
import Login from '../../pages/login';

describe('Login', () => {
  it('Login page renders without crashing', () => {
    const { getByText } = render(<Login />, { initialState: {} });
    expect(getByText('Extension installed.')).toBeInTheDocument();
  });
});
