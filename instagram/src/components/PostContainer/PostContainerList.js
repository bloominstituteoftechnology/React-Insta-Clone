import React from 'react';
import PropTypes from 'prop-types';
import PostContainer from './PostContainer';
import './Style.css';

const PostContainerList = props => {
  return (
  <div className="post-container-list">
    {props.data.map( post => (
      <PostContainer key={post.timestamp} postContainer={post} />
    ))}
  </div>);
}

PostContainerList.propTypes = {
  data: PropTypes.array.isRequired
}

export default PostContainerList;