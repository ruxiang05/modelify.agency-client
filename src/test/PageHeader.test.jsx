/* Uses methods and/or components from react, history and enzyme */
import React from 'react';
import { shallow } from 'enzyme';
import { createMemoryHistory } from 'history';
import PageHeader from '../components/PageHeader';
import addModelIcon from '../assets/icons/user-plus.svg';

const history = createMemoryHistory({
  basename: '/',
  keyLength: 0,
});

describe('PageHeader', () => {
  it('should render PageHeader', () => {
    const wrapper = shallow(<PageHeader title="Title" />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should go back when clicking the back button', () => {
    history.push('/another');
    const wrapper = shallow(
      <PageHeader title="Title" backButton history={history} />,
    );
    const backButton = wrapper.find('.back-button').first();
    backButton.simulate('click');
    expect(history.location.pathname).toBe('/');
  });

  it('should go back to given route if goBackAction is provided', () => {
    const goBackAction = jest.fn(() => history.push('/another'));
    const wrapper = shallow(
      <PageHeader
        title="Title"
        backButton
        history={history}
        goBackAction={goBackAction}
      />,
    );
    const backButton = wrapper.find('.back-button').first();
    backButton.simulate('click');
    expect(history.location.pathname).toBe('/another');
  });

  it('should perform action when action button is clicked', () => {
    const action = jest.fn();
    const wrapper = shallow(
      <PageHeader
        title="Title"
        backButton
        history={history}
        action={action}
        actionAltText="alt"
        actionIcon={addModelIcon}
      />,
    );
    const actionButton = wrapper.find('.action-button').first();
    actionButton.simulate('click');
    expect(action).toHaveBeenCalled();
  });
});
