/* Uses methods and/or components from react and enzyme */
import React from 'react';
import { shallow } from 'enzyme';
import Header from '../components/Header';

const user = {
  role: 'agent',
};

describe('Header', () => {
  it('should render Header', () => {
    const wrapper = shallow(<Header user={user} />);
    expect(wrapper).toMatchSnapshot();
  });
});
