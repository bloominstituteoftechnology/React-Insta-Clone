import React from 'react';
import './posts.css';

import CommentSection from './../CommentComponents/CommentSection';

const PostContainer = props => {
  return(
    <div className="post-container">
      Post container
      {props.post.comments.map(comment => <CommentSection comment={comment} />)}
    </div>
  );
};

export default PostContainer;
