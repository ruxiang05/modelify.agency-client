/* Uses methods and/or components from react, prop-types, history and enzyme */
import React from 'react';
import { shallow, mount } from 'enzyme';
import { createBrowserHistory } from 'history';
import PropTypes from 'prop-types';
import Job from '../components/Job';
import { UserProvider } from '../contexts/userContext';
import api from '../api';

jest.mock('../api');

const contextTypes = {
  user: PropTypes.object,
};

const modelContext = {
  user: {
    role: 'model',
  },
};
const job = {
  status: 'pending',
  _id: '5c97b9cd0328e6b2aa76a361',
  model: '5c686eb24cb1b33456b0be59',
  agent: '5c686e904cb1b33456b0be58',
  title: 'Test',
  date: '2019-05-26T00:00:00.000Z',
  address: 'address',
  pay: 100,
  description: 'some description',
};

const location = {
  state: job,
};

const agentContext = {
  user: {
    role: 'agent',
  },
};

const history = createBrowserHistory({
  basename: '/',
  keyLength: 0,
});

let wrapper;
beforeAll(() => {
  Job.contextTypes = contextTypes;
});

beforeEach(() => {
  wrapper = mount(
    <UserProvider value={modelContext}>
      <Job location={location} history={history} />
    </UserProvider>,
  );
});

describe('JobCard', () => {
  it('should render JobCard', () => {
    wrapper = shallow(<Job location={location} history={history} />, {
      context: agentContext,
    });
    expect(wrapper).toMatchSnapshot();
  });

  it('should show action buttons Accept and Decline if user is a model', () => {
    const actionButtons = wrapper.find('.job-actions button');
    expect(actionButtons.length).toBe(2);
    expect(actionButtons.get(0).props.children).toBe('Decline');
    expect(actionButtons.get(1).props.children).toBe('Accept');
  });

  it('should show Complete button after accepting job', async () => {
    const acceptButton = wrapper.find('.job-actions button').at(1);
    await acceptButton.simulate('click');
    expect(wrapper.state().status).toBe('in progress');
    wrapper.update();
    expect(wrapper.find('.job-actions button').text()).toBe('Complete');
  });

  it('should not show any action button after completing the job', async () => {
    const acceptButton = wrapper.find('.job-actions button').at(1);
    await acceptButton.simulate('click');
    wrapper.update();
    const completeButton = wrapper.find('.job-actions button').first();
    await completeButton.simulate('click');
    wrapper.update();
    expect(wrapper.state().status).toBe('complete');
    expect(wrapper.find('.job-actions button').get(0)).toBeUndefined();
  });

  it('should not show any action button after declining the job', async () => {
    const declineButton = wrapper.find('.job-actions button').first();
    await declineButton.simulate('click');
    wrapper.update();
    expect(wrapper.state().status).toBe('declined');
    expect(wrapper.find('.job-actions button').get(0)).toBeUndefined();
  });

  it('should add job to google calendar', () => {
    wrapper.setState({ status: 'in progress' });
    wrapper.update();
    const addToCalendar = wrapper.find('.add-to-calendar button').first();
    addToCalendar.simulate('click');
    expect(api.googleCalendar.addEvent).toHaveBeenCalled();
  });
});
