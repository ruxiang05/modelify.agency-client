import React from 'react';
import PropTypes from 'prop-types';
import PageHeader from './PageHeader';
import { ReactComponent as UnknownUserIcon } from '../assets/icons/user-circle.svg';
import ProfileModelDetails from './Profile/ProfileModelDetails';
import '../styles/profile.scss';

class ModelProfile extends React.Component {
  constructor(props) {
    super(props);

    const { location } = this.props;
    this.state = {
      model: location.state,
    };
  }

  render() {
    const { history } = this.props;
    const { model } = this.state;
    const { name, phoneNumber } = model;
    return (
      <React.Fragment>
        <PageHeader title="Profile" backButton history={history} />
        <div className="page">
          <div className="profile-details">
            <div className="profile-basic-details">
              <UnknownUserIcon />
              <div>
                <h1 className="profile-name">{name}</h1>
                <p>{phoneNumber}</p>
              </div>
            </div>
            <ProfileModelDetails user={model} />
          </div>
        </div>
      </React.Fragment>
    );
  }
}
ModelProfile.propTypes = {
  location: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
};
export default ModelProfile;
