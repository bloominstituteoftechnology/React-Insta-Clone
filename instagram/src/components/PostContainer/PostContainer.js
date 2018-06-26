import React from 'react';
import PropTypes from 'prop-types';

const PostContainer = (props) => {
  return (
    <div>
      <div>{props.post.username}</div>
      {/* <div>{props.post.thumbnailUrl}</div>
      <div>{props.post.imageUrl}</div>
      <div>{props.post.likes}</div>
      <div>{props.post.timestamp}</div> */}
      {/* <div>{props.post.comments}</div> */}
      {props.post.map((comment) => <PostContainer key={props.post.username} comment={comment} />)}
    </div>
  );
};

export default PostContainer;

PostContainer.propTypes = {
  post: PropTypes.shape({
    username: PropTypes.string,
    thumbnailUrl: PropTypes.string,
    imageUrl: PropTypes.string,
    likes: PropTypes.number,
    timestamp: PropTypes.string,
    comments: PropTypes.array
  })
};
