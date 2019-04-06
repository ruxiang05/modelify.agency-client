/* Uses methods and/or components from react, socket.io-client and enzyme */
import React from 'react';
import socket from 'socket.io-client';
import { shallow } from 'enzyme';
import Messages from '../components/Chat/Messages';

let wrapper;

const props = {
  socket,
  chat: {
    _id: '2',
    messages: [{ message: 'hi', user: '3' }],
    job: {
      _id: '1',
      title: 'title',
    },
  },
  user: {
    _id: '3',
  },
};

Messages.prototype.scrollToEnd = jest.fn();
socket.on = jest.fn();

beforeEach(() => {
  wrapper = shallow(<Messages {...props} />);
});

describe('MessageForm', () => {
  it('should render MessageForm', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should add new messages', async () => {
    const data = {
      message: 'hi',
      user: '4',
    };
    wrapper.instance().addMessage(data);
    await wrapper.update();
    expect(wrapper.state().messages.length).toBe(2);
  });
});
