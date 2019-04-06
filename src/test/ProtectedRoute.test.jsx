/* Uses methods and/or components from react and enzyme */
import React from 'react';
import { shallow } from 'enzyme';
import ProtectedRoute from '../components/ProtectedRoute';

const userContext = {
  user: {
    name: 'name',
  },
};

const Component = () => <div />;

describe('ProtectedRoute', () => {
  it('should render ProtectedRoute', () => {
    const wrapper = shallow(<ProtectedRoute component={Component} />, {
      context: userContext,
    });
    expect(wrapper.find(ProtectedRoute)).toMatchSnapshot();
  });
});
