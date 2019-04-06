/* Uses methods and/or components from react and socket.io-client */
import React from 'react';
import io from 'socket.io-client';
import Header from './components/Header';
import Main from './components/Main';
import { UserProvider } from './contexts/userContext';
import { SocketProvider } from './contexts/socketContext';
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

  componentDidMount() {
    const { user } = this.state;
    this.socket = io(process.env.REACT_APP_API_URL);
    if (user) {
      this.socket.emit('online', user._id);
    }
  }

  updateUser() {
    const currentUser = getCurrentUser();
    this.socket.emit('online', currentUser._id);
    this.setState({ user: currentUser });
  }

  handleLogout() {
    logOut();
    this.setState({ user: null });
  }

  render() {
    const { user } = this.state;
    return (
      <UserProvider value={{ user, updateUser: this.updateUser, handleLogout: this.handleLogout }}>
        <SocketProvider value={{ socket: this.socket }}>
          <div className="app">
            {user && <Header user={user} />}
            <Main user={user} />
          </div>
        </SocketProvider>
      </UserProvider>
    );
  }
}

export default App;
