import React from 'react';
import { shallow } from 'enzyme';
import { createBrowserHistory } from 'history';
import Chat from '../components/Chat/Chat';

jest.mock('../api.js');

const agent = {
  id: '1',
  name: 'agent',
};

const model = {
  id: '2',
  name: 'model',
};

const chat = {
  id: '1',
  job: {
    title: 'title',
  },
  messages: [],
  users: [agent, model],
};

const location = {
  state: {
    chat,
  },
};

const history = createBrowserHistory({
  basename: '/',
  keyLength: 0,
});

const context = {
  user: agent,
  socket: {},
};

let wrapper;

beforeEach(() => {
  wrapper = shallow(<Chat location={location} history={history} />, {
    context,
  });
});

describe('Chat', () => {
  it('should render Chat', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
