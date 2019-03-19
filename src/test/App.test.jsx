import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';

let wrapper;

beforeEach(() => {
  wrapper = shallow(<App />);
});

describe('App', () => {
  it('renders App', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
