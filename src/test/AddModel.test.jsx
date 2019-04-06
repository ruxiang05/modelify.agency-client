/* Uses methods and/or components from react, history and enzyme */
import React from 'react';
import { shallow } from 'enzyme';
import { createBrowserHistory } from 'history';
import AddModel from '../components/AddModel';
import api from '../api';

jest.mock('../api.js');

let wrapper;

const history = createBrowserHistory({
  basename: '/',
  keyLength: 0,
});

const formSubmit = {
  email: 'email@email.com',
};

beforeEach(() => {
  wrapper = shallow(<AddModel history={history} />);
});

describe('AddModel', () => {
  it('should render AddModel', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should handle input change', async () => {
    const event = {
      target: {
        value: 'email@email.com',
      },
    };
    wrapper.instance().handleChange(event);
    await wrapper.update();
    expect(wrapper.state().email).toBe('email@email.com');
  });

  it('should handle form submit', async () => {
    const event = {
      preventDefault: jest.fn(),
    };
    wrapper.setState({ ...formSubmit });
    await wrapper.update();
    wrapper.instance().handleSubmit(event);
    expect(api.agents.addModel).toHaveBeenCalled();
    expect(history.location.pathname).toBe('/models');
  });
});
