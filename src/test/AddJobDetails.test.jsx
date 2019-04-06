/* Uses methods and/or components from react and enzyme */
import React from 'react';
import { shallow } from 'enzyme';
import AddJobDetails from '../components/AddJob/AddJobDetails';

let wrapper;

const values = {
  model: '',
  title: '',
  date: '2019-04-08',
  address: '',
  pay: '',
  description: '',
  handleChange: jest.fn(),
};

const nextStep = jest.fn();

beforeEach(() => {
  wrapper = shallow(<AddJobDetails nextStep={nextStep} {...values} />);
});

describe('AddJobDetails', () => {
  it('should render AddJobDetails', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should go to next step', () => {
    wrapper
      .find('.form-submit input')
      .first()
      .simulate('click', { preventDefault() {} });
    expect(nextStep).toHaveBeenCalled();
  });
});
