import React from 'react';

import './UserImage.css';
import Logo from './dishebh.jpg';

const UserImage = () => {
  return (
    <div>
      <img alt="User profile" src={ Logo } height="100px" width="100px" />
    </div>
  );
}

export default UserImage;
