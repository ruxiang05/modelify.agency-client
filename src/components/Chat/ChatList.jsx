import React from 'react';
import ChatCard from './ChatCard';
import PageHeader from '../PageHeader';
import api from '../../api';
import { getToken } from '../../auth';
import '../../styles/chat-list.scss';
import NoData from '../NoData';

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
      console.log(res);
      this.setState({ chats });
    });
  }

  render() {
    const { chats } = this.state;
    return (
      <React.Fragment>
        <PageHeader title="Chats" />
        {chats.length ? (
          <ul className="page chats">
            {chats.map(chat => (
              <li key={chats.indexOf(chat)}>
                <ChatCard chat={chat} />
              </li>
            ))}
          </ul>
        ) : (
          <NoData>
            <p>You do not have chats yet</p>
          </NoData>
        )}
      </React.Fragment>
    );
  }
}

export default ChatList;
