/* Uses methods and/or components from react and enzyme */
import React from 'react';
import { shallow } from 'enzyme';
import Logo from '../components/Logo';

describe('Logo', () => {
  it('should render Logo', () => {
    const wrapper = shallow(<Logo />);
    expect(wrapper).toMatchSnapshot();
  });
});
