import React from 'react';
import socket from 'socket.io-client';
import { shallow } from 'enzyme';
import MessageForm from '../components/Chat/MessageForm';

let wrapper;

const props = {
  socket: {
    emit: jest.fn(),
  },
  user: {
    _id: '1',
  },
  chat: {
    _id: '2',
  },
};

beforeEach(() => {
  wrapper = shallow(<MessageForm {...props} />);
});

describe('MessageForm', () => {
  it('should render MessageForm', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should handle input change', async () => {
    const event = {
      target: {
        value: 'hi',
      },
    };
    wrapper.instance().handleChange(event);
    await wrapper.update();
    expect(wrapper.state().message).toBe('hi');
  });

  it('should send message', async () => {
    const event = {
      preventDefault: jest.fn(),
    };
    wrapper.setState({ message: 'hi' });
    await wrapper.update();
    wrapper.instance().sendMessage(event);
    expect(props.socket.emit).toHaveBeenCalled();
    expect(wrapper.state().message).toBe('');
  });

  it('should not send message if it is empty', () => {
    socket.emit = jest.fn();
    const event = {
      preventDefault: jest.fn(),
    };
    wrapper.instance().sendMessage(event);
    expect(socket.emit).not.toHaveBeenCalled();
  });
});
