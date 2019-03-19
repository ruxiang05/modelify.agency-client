import React from 'react';
import { shallow } from 'enzyme';
import PropTypes from 'prop-types';
import { createBrowserHistory } from 'history';
import Signup from '../components/Signup';
import api from '../api';

jest.mock('../api.js');

let wrapper;

const contextTypes = {
  updateUser: PropTypes.func,
};

const context = {
  updateUser: jest.fn(),
};

const history = createBrowserHistory({
  basename: '/',
  keyLength: 0,
});

const formSubmit = {
  email: 'email@email.com',
  password: '123',
  name: 'name',
  phoneNumber: '123',
  role: 'agent',
};

beforeAll(() => {
  Signup.contextTypes = contextTypes;
});

beforeEach(() => {
  wrapper = shallow(<Signup history={history} />, { context });
});

describe('Signup', () => {
  it('should render Signup', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should handle input change', async () => {
    const event = {
      target: {
        name: 'name',
        value: 'name',
      },
    };
    wrapper.instance().handleChange(event);
    await wrapper.update();
    expect(wrapper.state().name).toBe('name');
  });

  it('should handle form submit', async () => {
    const event = {
      preventDefault: jest.fn(),
    };
    wrapper.setState({ ...formSubmit });
    await wrapper.update();
    wrapper.instance().handleSubmit(event);
    expect(api.users.signup).toHaveBeenCalled();
  });

  it('should error if signup fails', async () => {
    const event = {
      preventDefault: jest.fn(),
    };
    api.users.signup = jest
      .fn()
      .mockImplementationOnce(() => Promise.reject(new Error('api error')));
    wrapper.setState({ ...formSubmit });
    await wrapper.update();
    wrapper.instance().handleSubmit(event);
    expect(api.users.signup).toHaveBeenCalled();
  });

  it('should error if signup is not ok', async () => {
    const event = {
      preventDefault: jest.fn(),
    };
    api.users.signup = jest.fn(() => Promise.resolve({ ok: false }));
    wrapper.setState({ ...formSubmit });
    await wrapper.update();
    wrapper.instance().handleSubmit(event);
    expect(api.users.signup).toHaveBeenCalled();
  });
});
