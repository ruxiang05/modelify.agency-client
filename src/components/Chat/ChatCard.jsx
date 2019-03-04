import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../../styles/chat-card.scss';
import { ReactComponent as UnknownUserIcon } from '../../assets/icons/user-circle.svg';
import { ReactComponent as GoTo } from '../../assets/icons/arrow-right.svg';

const ChatCard = ({ chat }) => (
  <Link
    to={{
      pathname: `/chats/${chat._id}`,
      state: {
        chat,
      },
    }}
  >
    <div className="chat-card">
      <div className="content">
        <UnknownUserIcon />
        <div>{chat.job.title}</div>

      </div>
      <GoTo />
    </div>
  </Link>
);

ChatCard.propTypes = {
  chat: PropTypes.shape({}).isRequired,
};
export default ChatCard;
