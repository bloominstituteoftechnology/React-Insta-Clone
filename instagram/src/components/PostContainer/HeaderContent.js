import React from 'react';
import './Header.css';

function HeaderContent(props) {
  return (
    <div className="header-content">
      <h1 className="header-tweet-text">{props.tweetText}</h1>
    </div>
  );
}

export default HeaderContent;