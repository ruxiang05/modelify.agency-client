/* Uses methods and/or components from react, prop-types, history and enzyme */
import React from 'react';
import { shallow } from 'enzyme';
import { createBrowserHistory } from 'history';
import PropTypes from 'prop-types';
import Profile from '../components/Profile/Profile';

jest.mock('../api.js');
let wrapper;

const contextTypes = {
  user: PropTypes.object,
  handleLogout: PropTypes.func,
};

const history = createBrowserHistory({
  basename: '/',
  keyLength: 0,
});

const location = {
  search: {
    code: 'test',
  },
};

const context = {
  handleLogout: jest.fn(),
  user: {
    email: 'email@email.com',
    name: 'name',
    role: 'agent',
    phoneNumber: '123',
  },
};

beforeAll(() => {
  Profile.contextTypes = contextTypes;
});

beforeEach(() => {
  wrapper = shallow(<Profile history={history} location={location} />, {
    context,
  });
});

describe('Profile', () => {
  it('should render Profile', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should toggle edit', () => {
    wrapper.instance().toggleEdit();
    expect(wrapper.state().edit).toBeTruthy();
  });

  it('should logout user', () => {
    wrapper.instance().logout();
    expect(context.handleLogout).toHaveBeenCalled();
    expect(history.location.pathname).toBe('/login');
  });

  it('should redirect to google auth', async () => {
    window.location.assign = jest.fn();
    await wrapper.instance().getAuthURL();
    expect(window.location.assign).toHaveBeenCalled();
  });
});
