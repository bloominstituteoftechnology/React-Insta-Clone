import React from 'react';
// import PropTypes from 'prop-types';
import './PostContainer.css';
import CommentSection from '../CommentSection/CommentSection';

const PostContainer = (props) => {
  console.log(props)
  return <div className="postContainerDiv">{props.comments.map(comment => <CommentSection comment={comment} />)}</div>;
}


export default PostContainer;