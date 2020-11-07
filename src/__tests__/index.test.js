import { render } from '@testing-library/react';
import Home from '../pages/index';

describe('Home', () => {
  it('Home page renders without crashing', () => {
    const { getByText } = render(<Home />);
    expect(
      getByText('Whatever you need. Off the rack. On the record.')
    ).toBeInTheDocument();
  });
});
