import React from 'react';
import { render, fireEvent, screen } from '../../lib/utils/test-util';
import MyRecs from '../../pages/my-recs';

describe('myRecs', () => {
  it('myRecs page renders without crashing', () => {
    const { getAllByRole } = render(<MyRecs />, { initialState: {} });
    expect(screen.getAllByRole("heading", { name: "Vitamer" })
    ).toBeTruthy();
  });
});

