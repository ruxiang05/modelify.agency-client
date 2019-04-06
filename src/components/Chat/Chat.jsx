/* Uses methods and/or components from react and prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { UserConsumer } from '../../contexts/userContext';
import { SocketConsumer } from '../../contexts/socketContext';
import MessageForm from './MessageForm';
import Messages from './Messages';
import PageHeader from '../PageHeader';
import '../../styles/chat.scss';
import api from '../../api';
import { getToken } from '../../auth';

class Chat extends React.Component {
  constructor(props) {
    super(props);

    const { location } = this.props;
    const { chat } = location.state;
    this.state = {
      chat,
    };
  }

  componentDidMount() {
    const { chat } = this.state;
    api.chats.getMessages(getToken(), chat._id).then((res) => {
      const { messages } = res;
      this.setState({ chat: { ...chat, messages } });
    });
  }

  render() {
    const { history } = this.props;
    const { chat } = this.state;
    const { users } = chat;
    const chatWith = (user => users.filter(u => u._id !== user._id)[0]);
    return (
      <UserConsumer>
        {({ user }) => (
          <SocketConsumer>
            {({ socket }) => (
              <>
                <PageHeader backButton history={history} title={chatWith(user).name} />
                <div className="page">
                  <Messages socket={socket} user={user} chat={chat} />
                  <MessageForm user={user} socket={socket} chat={chat} />
                </div>
              </>
            )}
          </SocketConsumer>
        )}
      </UserConsumer>
    );
  }
}

Chat.propTypes = {
  location: PropTypes.shape({}).isRequired,
  history: PropTypes.shape({}).isRequired,
};

export default Chat;
