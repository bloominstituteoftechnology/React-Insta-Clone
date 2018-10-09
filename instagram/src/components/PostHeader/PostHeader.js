import React from 'react';
import { CardTitle } from 'reactstrap';
import './postheader.css';

const PostHeader = props => {
  const { username, thumbnailUrl } = props;
  return (
    <div className="postHeader">
      <div className="thumbNailImage">
        <img src={thumbnailUrl} alt="user profile" />
      </div>
      <CardTitle className="postHeaderTitle">{username}</CardTitle>
    </div>
  );
};

export default PostHeader;
