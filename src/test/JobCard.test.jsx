import React from 'react';
import { shallow } from 'enzyme';
import JobCard from '../components/JobCard';

describe('JobCard', () => {
  const job = {
    status: 'in progress',
    _id: '5c97b9cd0328e6b2aa76a361',
    model: '5c686eb24cb1b33456b0be59',
    agent: '5c686e904cb1b33456b0be58',
    title: 'Test',
    date: '2019-05-26T00:00:00.000Z',
    address: 'address',
    pay: 100,
    description: 'some description',
  };
  it('should render JobCard', () => {
    const wrapper = shallow(<JobCard job={job} />);
    expect(wrapper).toMatchSnapshot();
  });
});
