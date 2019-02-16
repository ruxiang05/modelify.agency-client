import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import EditProfile from './EditProfile';
import { UserContext } from '../../contexts/userContext';
import PageHeader from '../PageHeader';
import { ReactComponent as UnknownUserIcon } from '../../assets/icons/user-circle.svg';

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
    const { name, phoneNumber } = user;
    const { history } = this.props;

    return (
      <React.Fragment>
        {edit ? (
          <Route to="/edit"><EditProfile toggleEdit={this.toggleEdit} {...user} updateUser={updateUser} history={history} /></Route>
        ) : (
          <React.Fragment>
            <PageHeader title="Profile" />
            <div className="page">
              <div className="profile-details">
                <UnknownUserIcon />
                <p>{name}</p>
                <p>{phoneNumber}</p>
              </div>
              <button type="button" onClick={this.toggleEdit}>Edit</button>
              <button type="button" onClick={this.logout}>Logout</button>
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
