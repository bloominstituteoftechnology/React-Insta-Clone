import React from 'react';
import './Header.css';

function HeaderTitle(props) {
  return (
    <div className="header-title">
      <div className="twitter-name">{props.twitterName}</div>
      <div className="twitter-screen-name">{props.twitterScreenName}</div>
      
      <div className="tweet-created-at">{props.tweetCreatedAt}</div>
    </div>
  );
}

export default HeaderTitle;