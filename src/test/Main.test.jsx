import React from 'react';
import { shallow } from 'enzyme';
import Main from '../components/Main';

const user = {
  role: 'agent',
};

describe('Main', () => {
  it('should render Main', () => {
    const wrapper = shallow(<Main user={user} />);
    expect(wrapper).toMatchSnapshot();
  });
});
