/* Uses methods and/or components from react and enzyme */
import React from 'react';
import { shallow } from 'enzyme';
import JobList from '../components/JobList';

jest.mock('../api');

describe('JobList', () => {
  it('should render JobList', () => {
    const wrapper = shallow(<JobList />);
    expect(wrapper).toMatchSnapshot();
  });

  it('show a list of jobs', async () => {
    const wrapper = shallow(<JobList />);
    wrapper.instance().componentDidMount();
    await wrapper.update();
    expect(wrapper.state('jobs').length).toBe(1);
  });
});
