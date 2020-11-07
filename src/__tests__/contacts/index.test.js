import React from 'react';
import { render, fireEvent, screen } from '../../lib/utils/test-util';
import Contacts from '../../pages/contacts';

describe('Contacts', () => {
  it('Contact page renders without crashing', () => {
    const { getAllByRole } = render(<Contacts />, { initialState: {} });
    expect(screen.getAllByRole("button", { name: "Unfollow" })
    ).toBeTruthy();
  });
});
