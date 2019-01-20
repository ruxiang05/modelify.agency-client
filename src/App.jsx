import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import { UserProvider } from './contexts/userContext';
import './styles/app.scss';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: null,
    };

    this.updateUser = this.updateUser.bind(this);
  }

  updateUser(user) {
    this.setState({ user });
  }

  render() {
    const { user } = this.state;
    return (
      <UserProvider value={{ user, updateUser: this.updateUser }}>
        <div className="app">
          <Header />
          <Main />
        </div>
      </UserProvider>
    );
  }
}

export default App;
