import React from 'react';
import Post from './Post';
import PropTypes from 'prop-types';

import './PostContainer.css';

const PostContainer = props => {
  return (
    <div className="postContainer">{ props.users.map(user => <Post key={user.timestamp} user={user} />) }</div>
  );
};

PostContainer.propTypes = {
  users: PropTypes.arrayOf(PropTypes.object)
}

export default PostContainer;