/* Uses methods and/or components from react and enzyme */
import React from 'react';
import { shallow } from 'enzyme';
import EditProfile from '../components/Profile/EditProfile';
import api from '../api';

jest.mock('../api.js');
let wrapper;

const props = {
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

const toggleEdit = jest.fn();
const updateUser = jest.fn();

beforeEach(() => {
  wrapper = shallow(
    <EditProfile
      {...props}
      toggleEdit={toggleEdit}
      updateUser={updateUser}
    />,
  );
});

describe('EditProfile', () => {
  it('should render EditProfile', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should handle input change', async () => {
    const event = {
      target: {
        name: 'eyes',
        value: 'green',
      },
    };
    wrapper.instance().handleChange(event);
    await wrapper.update();
    expect(wrapper.state().eyes).toBe('green');
  });

  it('should handle form submit', async () => {
    const event = {
      preventDefault: jest.fn(),
    };
    await wrapper.instance().handleSubmit(event);
    expect(api.users.editProfile).toHaveBeenCalled();
    expect(toggleEdit).toHaveBeenCalled();
    expect(updateUser).toHaveBeenCalled();
  });

  it('should not format state if user is not a model', async () => {
    const user = {
      email: 'email@email.com',
      name: 'name',
      role: 'agent',
      phoneNumber: '123',
      modelInfo: {
        dateOfBirth: '',
        address: '',
        characteristics: {
          eyes: '',
          hair: '',
          skin: '',
        },
        measurements: {
          height: '',
          weight: '',
          chest: '',
          waist: '',
          hips: '',
        },
      },
    };
    const event = {
      preventDefault: jest.fn(),
    };
    wrapper = shallow(
      <EditProfile
        {...user}
        toggleEdit={toggleEdit}
        updateUser={updateUser}
      />,
    );
    await wrapper.instance().handleSubmit(event);
    expect(api.users.editProfile).toHaveBeenCalled();
    expect(toggleEdit).toHaveBeenCalled();
    expect(updateUser).toHaveBeenCalled();
  });
});
