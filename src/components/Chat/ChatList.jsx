import React from 'react';
import ChatCard from './ChatCard';
import PageHeader from '../PageHeader';
import api from '../../api';
import { getToken } from '../../auth';
import '../../styles/chat-list.scss';

class ChatList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      chats: [],
    };
  }

  componentDidMount() {
    const token = getToken();
    api.chats.getChats(token).then((res) => {
      const { chats } = res;
      this.setState({ chats });
    });
  }

  render() {
    const { chats } = this.state;
    return (
      <React.Fragment>
        <PageHeader title="Chats" />
        {chats ? (
          <ul className="page chats">
            {chats.map(chat => (
              <li key={chats.indexOf(chat)}>
                <ChatCard chat={chat} />
              </li>
            ))}
          </ul>
        ) : (
          <div>No chats yet</div>
        )}
      </React.Fragment>
    );
  }
}

export default ChatList;