import React from 'react';
import { shallow } from 'enzyme';
import ChatList from '../components/Chat/ChatList';

jest.mock('../api.js');

let wrapper;

beforeEach(() => {
  wrapper = shallow(<ChatList />);
});

describe('ChatList', () => {
  it('should render ChatList', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
