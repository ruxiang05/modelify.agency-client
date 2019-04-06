/* Uses methods and/or components from react and enzyme */
import React from 'react';
import { shallow } from 'enzyme';
import RadioFormInput from '../components/RadioFormInput';

const input = {
  id: '1',
  name: 'name',
  value: '',
  handleChange: jest.fn(),
  placeholder: 'placeholder',
};

describe('RadioFormInput', () => {
  it('should render RadioFormInput', () => {
    const wrapper = shallow(<RadioFormInput {...input} />);
    expect(wrapper).toMatchSnapshot();
  });
});
