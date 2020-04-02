import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Home from './Home';
import Post from './Post';
import Profile from './Profile';
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer row">
      <div className="col-4 center item">
        <label>
          <FontAwesomeIcon icon="home" />
          <br />
          Home
        </label>
      </div>
      <div className="col-4 center item">
        <label>
          <FontAwesomeIcon icon="plus" />
          <br />
          Post
        </label>
      </div>
      <div className="col-4 center item">
        <label>
          <FontAwesomeIcon icon="user" />
          <br />
          Profile
        </label>
      </div>
    </div>
  );
}

export default Footer;
