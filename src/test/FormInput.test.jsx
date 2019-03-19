import React from 'react';
import { shallow } from 'enzyme';
import FormInput from '../components/FormInput';

const input = {
  title: 'title',
  name: 'name',
  type: 'text',
  value: '',
  handleChange: jest.fn(),
  placeholder: 'placeholder',
};

describe('FormInput', () => {
  it('should render FormInput', () => {
    const wrapper = shallow(<FormInput {...input} />);
    expect(wrapper).toMatchSnapshot();
  });
});
