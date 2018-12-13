import React from 'react';
import Post from './Post';

import './PostContainer.css';

const PostContainer = props => {
  return (
    <div className="postContainer">{ props.users.map(user => <Post key={user.username} user={user} />) }</div>
  );
};

export default PostContainer;