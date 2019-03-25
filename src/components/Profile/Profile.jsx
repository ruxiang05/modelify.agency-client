import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import EditProfile from './EditProfile';
import { UserContext } from '../../contexts/userContext';
import PageHeader from '../PageHeader';
import { ReactComponent as UnknownUserIcon } from '../../assets/icons/user-circle.svg';
import { ReactComponent as ForwardIcon } from '../../assets/icons/arrow-right.svg';
import ProfileModelDetails from './ProfileModelDetails';
import '../../styles/profile.scss';

class Profile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      edit: false,
    };

    this.logout = this.logout.bind(this);
    this.toggleEdit = this.toggleEdit.bind(this);
  }

  toggleEdit() {
    const { edit } = this.state;
    this.setState({ edit: !edit });
  }

  logout() {
    const { history } = this.props;
    const { handleLogout } = this.context;
    handleLogout();
    history.push('/login');
  }

  render() {
    const { edit } = this.state;
    const { user, updateUser } = this.context;
    const { name, phoneNumber, role, image } = user;
    const { history } = this.props;

    return (
      <React.Fragment>
        {edit ? (
          <Route to="/edit"><EditProfile toggleEdit={this.toggleEdit} {...user} updateUser={updateUser} history={history} /></Route>
        ) : (
          <React.Fragment>
            <PageHeader title="Profile" />
            <div className="page">
              <div className="profile-content">
                <div className="profile-details">
                  {image ? <img src={image} alt="Profile" /> : <UnknownUserIcon />}
                  <div>
                    <h1 className="profile-name">{name}</h1>
                    <p>{phoneNumber}</p>
                  </div>
                </div>
                {role === 'model' && <ProfileModelDetails user={user} />}
              </div>
              <div className="profile-actions">
                <button type="button" onClick={this.toggleEdit}>
                  Edit my profile
                  <ForwardIcon />
                </button>
                <button type="button" onClick={this.logout}>
                  Logout
                  <ForwardIcon />
                </button>
              </div>
            </div>
          </React.Fragment>
        )}
      </React.Fragment>
    );
  }
}
Profile.propTypes = {
  history: PropTypes.shape({}).isRequired,
};
Profile.contextType = UserContext;
export default Profile;
