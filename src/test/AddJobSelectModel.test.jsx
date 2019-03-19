import React from 'react';
import { shallow } from 'enzyme';
import AddJobSelectModel from '../components/AddJob/AddJobSelectModel';

let wrapper;

beforeEach(() => {
  wrapper = shallow(<AddJobSelectModel />);
});

describe('AddJobSelectModel', () => {
  it('should render AddJobSelectModel', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
