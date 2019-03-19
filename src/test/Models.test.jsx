import React from 'react';
import { shallow } from 'enzyme';
import { createBrowserHistory } from 'history';
import Models from '../components/Models';

const history = createBrowserHistory({
  basename: '/',
  keyLength: 0,
});
let wrapper;

beforeEach(() => {
  wrapper = shallow(<Models history={history} />);
});

describe('Models', () => {
  it('should render ModelList', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should redirect to /add-model', () => {
    wrapper.instance().redirectToAddModel();
    expect(history.location.pathname).toBe('/add-model');
  });
});
