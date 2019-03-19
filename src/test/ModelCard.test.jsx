import React from 'react';
import { shallow } from 'enzyme';
import PropTypes from 'prop-types';
import ModelCard from '../components/ModelCard';

const contextTypes = {
  selectModel: PropTypes.func,
};

const model = {
  name: 'name',
  _id: '1',
  email: 'email@email.com',
};

const selectModelContext = {
  selectModel: jest.fn(email => email),
};
let wrapper;
beforeAll(() => {
  ModelCard.contextTypes = contextTypes;
});

beforeEach(() => {
  wrapper = shallow(<ModelCard {...model} />, {
    context: selectModelContext,
  });
});

describe('ModelCard', () => {
  it('should render ModelCard', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render link if selectModel is not provided', () => {
    wrapper = shallow(<ModelCard {...model} />, {
      context: { selectModel: () => {} },
    });
    expect(wrapper.find('Link').length).toBe(1);
  });
  it('should select model if clicked', () => {
    const selectModelButton = wrapper.find('button').first();
    selectModelButton.simulate('click');
    expect(selectModelContext.selectModel).toHaveBeenCalled();
  });
});
