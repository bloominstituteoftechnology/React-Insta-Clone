import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import './Post.css';
function PostContainer(props) {
  return <CommentSection comments={props.post.comments} />;
}
export default PostContainer;
