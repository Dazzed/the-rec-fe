import React from 'react';
import { render, fireEvent, screen } from '../../lib/utils/test-util';
import DealerProfile from '../../pages/dealer-profile';

describe('dealerProfile', () => {
  it('dealerProfile page renders without crashing', () => {
    const { getByText } = render(<DealerProfile />, { initialState: {} });
    expect(screen.getByText('Lisa H.')).toBeInTheDocument();
  });
});
