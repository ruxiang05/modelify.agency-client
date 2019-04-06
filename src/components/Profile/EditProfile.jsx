/* Uses methods and/or components from react and prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import FormInput from '../FormInput';
import api from '../../api';
import { getToken, setToken } from '../../auth';
import PageHeader from '../PageHeader';

class EditProfile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: props.email,
      name: props.name,
      role: props.role,
      phoneNumber: props.phoneNumber,
      dateOfBirth: props.modelInfo.dateOfBirth,
      address: props.modelInfo.address,
      eyes: props.modelInfo.characteristics.eyes,
      hair: props.modelInfo.characteristics.hair,
      skin: props.modelInfo.characteristics.skin,
      height: props.modelInfo.measurements.height,
      weight: props.modelInfo.measurements.weight,
      chest: props.modelInfo.measurements.chest,
      waist: props.modelInfo.measurements.waist,
      hips: props.modelInfo.measurements.hips,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.formatModel = this.formatModel.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const {
      email, name, role, phoneNumber, ...modelInfo
    } = this.state;
    let user = {
      email, name, role, phoneNumber,
    };
    if (role === 'model') {
      user = { ...user, modelInfo: this.formatModel(modelInfo) };
    }
    const { toggleEdit, updateUser } = this.props;
    api.users.editProfile(getToken(), user).then((data) => {
      setToken(data.token);
      updateUser();
      toggleEdit();
    });
  }

  formatModel(model) {
    const {
      dateOfBirth, address, eyes, hair, skin, height, weight, chest, waist, hips,
    } = model;
    return {
      dateOfBirth,
      address,
      characteristics: {
        eyes,
        hair,
        skin,
      },
      measurements: {
        height,
        weight,
        chest,
        waist,
        hips,
      },
    };
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState(prevState => ({ ...prevState, [name]: value }));
  }

  render() {
    const {
      email, name, phoneNumber, role, dateOfBirth, address, eyes, hair, skin, height, weight, chest, waist, hips,
    } = this.state;
    const { toggleEdit } = this.props;
    return (
      <React.Fragment>
        <PageHeader title="Edit" backButton goBackAction={toggleEdit} />

        <div className="page">
          <form onSubmit={this.handleSubmit}>
            <h2>Account Details</h2>
            <FormInput
              type="text"
              name="email"
              title="Email"
              value={email}
              placeholder="Enter your email"
              handleChange={this.handleChange}
            />
            <FormInput
              type="text"
              name="name"
              title="Name"
              value={name}
              placeholder="Enter your name"
              handleChange={this.handleChange}
            />
            <FormInput
              type="text"
              name="phoneNumber"
              title="Phone"
              value={phoneNumber}
              placeholder="Enter your phone number"
              handleChange={this.handleChange}
            />
            {role === 'model' && (
            <React.Fragment>
              <p>Model Details</p>
              <FormInput
                type="date"
                name="dateOfBirth"
                title="Date Of Birth"
                value={dateOfBirth}
                handleChange={this.handleChange}
              />
              <FormInput
                type="text"
                name="address"
                title="Enter your address"
                value={address}
                placeholder="Address"
                handleChange={this.handleChange}
              />
              <h2>Characteristics</h2>
              <FormInput
                type="text"
                name="eyes"
                title="Eye Colour"
                value={eyes}
                placeholder="Enter your eye colour"
                handleChange={this.handleChange}
              />
              <FormInput
                type="text"
                name="hair"
                title="Hair colour"
                value={hair}
                placeholder="Enter your hair Colour"
                handleChange={this.handleChange}
              />
              <FormInput
                type="text"
                name="skin"
                title="Skin Colour"
                value={skin}
                placeholder="Enter your skin"
                handleChange={this.handleChange}
              />
              <h2>Measurements</h2>
              <FormInput
                type="text"
                name="height"
                title="Height"
                value={height}
                placeholder="Enter our height"
                handleChange={this.handleChange}
              />
              <FormInput
                type="text"
                name="weight"
                title="Weight"
                value={weight}
                placeholder="Enter our weight"
                handleChange={this.handleChange}
              />
              <FormInput
                type="text"
                name="chest"
                title="Chest"
                value={chest}
                placeholder="Enter our chest size"
                handleChange={this.handleChange}
              />
              <FormInput
                type="text"
                name="waist"
                title="Waist"
                value={waist}
                placeholder="Enter our waist size"
                handleChange={this.handleChange}
              />
              <FormInput
                type="text"
                name="hips"
                title="Hips"
                value={hips}
                placeholder="Enter your hip size"
                handleChange={this.handleChange}
              />
            </React.Fragment>
            )}
            <div className="form-submit">
              <input type="submit" value="Done" />
            </div>
          </form>
        </div>
      </React.Fragment>
    );
  }
}

EditProfile.propTypes = {
  email: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  phoneNumber: PropTypes.string.isRequired,
  modelInfo: PropTypes.shape({
    dateOfBirth: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    characteristics: PropTypes.shape({
      eyes: PropTypes.string.isRequired,
      hair: PropTypes.string.isRequired,
      skin: PropTypes.string.isRequired,
    }),
    measurements: PropTypes.shape({
      height: PropTypes.string.isRequired,
      weight: PropTypes.string.isRequired,
      chest: PropTypes.string.isRequired,
      waist: PropTypes.string.isRequired,
      hips: PropTypes.string.isRequired,
    }),
  }).isRequired,
  role: PropTypes.string.isRequired,
  toggleEdit: PropTypes.func.isRequired,
  updateUser: PropTypes.func.isRequired,
};

export default EditProfile;
