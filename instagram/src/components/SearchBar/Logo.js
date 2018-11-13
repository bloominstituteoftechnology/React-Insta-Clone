import React from 'react';

const Logo = props => {
  return (
    <div className='logo'>
      <i className="fab fa-instagram"></i>
      <div className="logo--vline">
        |
      </div>
      <div className="logo--text">
        InstaClone <span>- by YKrueng</span>
      </div>
    </div>
  );
}

export default Logo;