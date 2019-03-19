import React from 'react';
import { shallow } from 'enzyme';
import NotFound from '../components/NotFound';

describe('NotFound', () => {
  it('should render NotFound', () => {
    const wrapper = shallow(<NotFound />);
    expect(wrapper).toMatchSnapshot();
  });
});
