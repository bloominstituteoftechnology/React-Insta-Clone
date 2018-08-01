import React from 'react';
// import PropTypes from 'prop-types';
import './PostContainer.css';
import CommentSection from '../CommentSection/CommentSection';

const PostContainer = (props) => {
  console.log("PostContainer", props.comments)
  return <div className="postContainerDiv">{props.comments.map(comment => <CommentSection comment={comment}   key={comment.imageUrl} />)}</div>;
}


export default PostContainer;