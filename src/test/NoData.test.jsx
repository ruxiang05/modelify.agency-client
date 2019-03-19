import React from 'react';
import { shallow } from 'enzyme';
import NoData from '../components/NoData';

describe('NoData', () => {
  it('should render NoData', () => {
    const wrapper = shallow(<NoData>Missing data</NoData>);
    expect(wrapper).toMatchSnapshot();
  });
});
