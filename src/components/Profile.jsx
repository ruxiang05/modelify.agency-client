import React from 'react';
import PropTypes from 'prop-types';
import { UserContext } from '../contexts/userContext';

class Profile extends React.Component {
  constructor(props) {
    super(props);

    this.logout = this.logout.bind(this);
  }

  logout() {
    const { history } = this.props;
    const { handleLogout } = this.context;
    handleLogout();
    history.push('/login');
  }

  render() {
    return (
      <button type="button" onClick={this.logout}>
                Logout
      </button>
    );
  }
}
Profile.propTypes = {
  history: PropTypes.shape({}).isRequired,
};
Profile.contextType = UserContext;
export default Profile;
