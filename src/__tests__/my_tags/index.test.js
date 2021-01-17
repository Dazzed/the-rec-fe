import React from 'react';
import { render, fireEvent, screen } from '../../lib/utils/test-util';
import MyTags from '../../pages/my-tags';

describe('MyTags', () => {
  it('MyTags page renders without crashing', () => {
    const { getAllByRole } = render(<MyTags />, { initialState: {} });
    expect(screen.getAllByRole("heading", { name: "Vitamer" })
    ).toBeTruthy();
  });
});

