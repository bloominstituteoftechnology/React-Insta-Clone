import React from 'react';

import './Header.css';

const HeaderLogos = props => {
  return (
    <div className="header-logos">
      <div className="header-img-logo">
        <img src="images/ig-logo.png" alt="Instagram logo"/>
      </div>
      <h1 className="header-txt-logo">Instagram</h1>
    </div>
  );
};

export default HeaderLogos;