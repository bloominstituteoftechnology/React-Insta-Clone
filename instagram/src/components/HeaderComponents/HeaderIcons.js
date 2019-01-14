import React from 'react';

import './Header.css';

const HeaderIcons = props => {
  return (
    <div className="header-icons">
      <img src="images/discover.png" alt="Discover"/> <img src="images/heart.png" alt="Following data"/> <img src="images/user.png" alt="User settings"/>
    </div>
  )
};

export default HeaderIcons;