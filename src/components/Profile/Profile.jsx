import React from 'react';
import PropTypes from 'prop-types';
import EditProfile from './EditProfile';
import { UserContext } from '../../contexts/userContext';
import PageHeader from '../PageHeader';

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
    const { history } = this.props;
    return (
      <React.Fragment>
        {edit ? (
          <EditProfile toggleEdit={this.toggleEdit} {...user} updateUser={updateUser} history={history}/>
        ) : (
          <div className="page">
            <PageHeader title="Profile" />
            <button type="button" onClick={this.toggleEdit}>Edit</button>
            <button type="button" onClick={this.logout}>Logout</button>
          </div>
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
