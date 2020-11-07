import React from 'react';
import { render, fireEvent, screen } from '../../lib/utils/test-util';
import Dashboard from "../../pages/dashboard";

describe('Dashboard', () => {
  it('dashboard page renders without crashing', () => {
    const { getByText } = render(<Dashboard />, { initialState: {} });
    expect(getByText('Latest')).toBeInTheDocument();
  });
});
