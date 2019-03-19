import React from 'react';
import { shallow } from 'enzyme';
import ProfileModelDetails from '../components/Profile/ProfileModelDetails';

let wrapper;

const user = {
  email: 'email@email.com',
  name: 'name',
  role: 'model',
  phoneNumber: '123',
  modelInfo: {
    dateOfBirth: '01/01/1970',
    address: '123 Street',
    characteristics: {
      eyes: 'blue',
      hair: 'blonde',
      skin: 'white',
    },
    measurements: {
      height: '170',
      weight: '50',
      chest: '90',
      waist: '60',
      hips: '90',
    },
  },
};

beforeEach(() => {
  wrapper = shallow(<ProfileModelDetails user={user} />);
});

describe('ProfileModelDetails', () => {
  it('renders ProfileModelDetails', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
