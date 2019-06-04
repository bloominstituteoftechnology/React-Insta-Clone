import React from 'react';
import CommentSection from './CommentSection';

const PostContainer = props => {
  console.log(props);
  return (
    <div>
      {props.post.username}
      <CommentSection comments={props.post.comments} />
    </div>
  );
};

export default PostContainer;
