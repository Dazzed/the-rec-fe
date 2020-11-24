import { render as reactRender } from '@testing-library/react';
import Home from '../pages/index';
import Adapter from 'enzyme-adapter-react-16';
import { mount as enzymeRender, configure } from 'enzyme';
import Router from 'next/router';

configure({ adapter: new Adapter() });
describe('Home', () => {
  it('Home page renders without crashing', () => {
    const { getByText } = reactRender(<Home />);
    expect(
      getByText('Whatever you need. Off the rack. On the record.')
    ).toBeInTheDocument();
  });
  it('Home page renders button without crashing', async () => {
    const wrapper = enzymeRender(<Home />);
    const { getByText } = reactRender(<Home />);
    await wrapper.find('.btn_add').simulate('click');
    expect(
      getByText('Read and change all your data on the websites you visit.')
    ).toBeInTheDocument();
  });
});


describe('Home', () => {
  const spies = {};
  beforeEach(() => {
    spies.routerChangeStart = jest.fn();
    Router.events.on('routeChangeStart', spies.routerChangeStart);
  });
  afterEach(() => {
    Router.events.off('routeChangeStart', spies.routerChangeStart);
  });
  test('Test the page redirect after click', async done => {
    const wrapper = enzymeRender(<Home />);
    await wrapper.find('.btn_add').simulate('click');
    await wrapper.find('#install-extension-link').simulate('click');
    expect(spies.routerChangeStart).toHaveBeenCalledWith('/login');
  });
});
