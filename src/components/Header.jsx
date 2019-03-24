import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { ReactComponent as ListIcon } from '../assets/icons/list-ul.svg';
import { ReactComponent as ModelsListIcon } from '../assets/icons/users.svg';
import { ReactComponent as AddIcon } from '../assets/icons/plus-square.svg';
import { ReactComponent as ChatIcon } from '../assets/icons/comment-alt-lines.svg';
import { ReactComponent as ProfileIcon } from '../assets/icons/user.svg';
import '../styles/header.scss';

const Header = ({ user }) => (
  <header>
    <nav>
      <ul>
        <li>
          <Link to="/jobs">
            <ListIcon />
          </Link>
        </li>
        {user.role === 'agent' && (
        <li>
          <Link to="/models">
            <ModelsListIcon />
          </Link>
        </li>
        )}
        {user.role === 'agent' && (
        <li>
          <Link
            to="/jobs/new"
          >
            <AddIcon />
          </Link>
        </li>
        )}
        <li>
          <Link to="/chats">
            <ChatIcon />
          </Link>
        </li>
        <li>
          <Link to="/profile/">
            <ProfileIcon />
          </Link>
        </li>
      </ul>
    </nav>
  </header>
);

Header.propTypes = {
  user: PropTypes.shape({}).isRequired,
};

export default Header;
