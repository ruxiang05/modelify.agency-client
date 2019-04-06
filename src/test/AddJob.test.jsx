/* Uses methods and/or components from react and enzyme */
import React from 'react';
import { shallow } from 'enzyme';
import { createBrowserHistory } from 'history';
import AddJob from '../components/AddJob/AddJob';

jest.mock('../api.js');

const history = createBrowserHistory({
  basename: '/',
  keyLength: 0,
});

let wrapper;

beforeEach(() => {
  wrapper = shallow(<AddJob history={history} />);
});

describe('AddJob', () => {
  it('should render AddJob', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should go to next step', () => {
    expect(wrapper.state().step).toBe(1);
    wrapper.instance().nextStep();
    expect(wrapper.state().step).toBe(2);
  });

  it('should go to previous step', () => {
    wrapper.setState({ step: 2 });
    wrapper.instance().prevStep();
    expect(wrapper.state().step).toBe(1);
  });

  it('should select model and add job', async () => {
    history.push('/add-job');
    await wrapper.instance().selectModel('model');
    expect(wrapper.state().model).toBe('model');
    expect(history.location.pathname).toBe('/jobs');
  });

  it('should handleChange correctly', async () => {
    const event = {
      target: {
        name: 'title',
        value: 'some title',
      },
    };
    await wrapper.instance().handleChange(event);
    expect(wrapper.state().title).toBe('some title');
  });
});
