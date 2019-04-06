/* Uses methods and/or components from react and enzyme */
import React from 'react';
import { shallow } from 'enzyme';
import ChatCard from '../components/Chat/ChatCard';

const chat = {
  id: '1',
  job: {
    title: 'title',
  },
};

describe('ChatCard', () => {
  it('should render ChatCard', () => {
    const wrapper = shallow(<ChatCard chat={chat} />);
    expect(wrapper).toMatchSnapshot();
  });
});
