import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import { UserProvider } from './contexts/userContext';
import './styles/app.scss';
import './styles/common.scss';
import { getCurrentUser, logOut } from './auth';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: getCurrentUser(),
    };

    this.updateUser = this.updateUser.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  updateUser() {
    this.setState({ user: getCurrentUser() });
  }

  handleLogout() {
    logOut();
    this.setState({ user: null });
  }

  render() {
    const { user } = this.state;
    return (
      <UserProvider value={{ user, updateUser: this.updateUser, handleLogout: this.handleLogout }}>
        <div className="app">
          {user && <Header user={user} />}
          <Main user={user} />
        </div>
      </UserProvider>
    );
  }
}

export default App;
