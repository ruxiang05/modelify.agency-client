import React from 'react';
import { shallow } from 'enzyme';
import ModelList from '../components/ModelList';

jest.mock('../api.js');

describe('ModelList', () => {
  it('should render ModelList', async () => {
    const wrapper = shallow(<ModelList />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a list of models', async () => {
    const wrapper = shallow(<ModelList />);
    await wrapper.update();
    expect(wrapper.state().models.length).toBe(1);
    expect(wrapper.find('li').length).toBe(1);
  });
});
