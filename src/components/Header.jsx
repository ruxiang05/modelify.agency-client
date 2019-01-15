import React from 'react';
import { Link } from 'react-router-dom';
import {ReactComponent as ListIcon} from '../assets/icons/list-ul.svg';
import {ReactComponent as ModelsListIcon} from '../assets/icons/users.svg';
import {ReactComponent as AddJobIcon} from '../assets/icons/plus-square.svg';
import {ReactComponent as ChatIcon} from '../assets/icons/comment-alt-lines.svg';
import {ReactComponent as ProfileIcon} from '../assets/icons/user.svg';
import '../styles/header.scss';

const Header = () => (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/jobs"><ListIcon/></Link>
          </li>
          <li>
            <Link to="/models"><ModelsListIcon/></Link>
          </li>
          <li>
            <Link to="/jobs/new"><AddJobIcon/></Link>
          </li>
          <li>
            <Link to="/chat"><ChatIcon/></Link>
          </li>
          <li>
            <Link to="/profile/"><ProfileIcon/></Link>
          </li>
        </ul>
      </nav>
    </header>
); 

export default Header;