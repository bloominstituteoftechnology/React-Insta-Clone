import React from 'react';

import CommentSection from '../CommentSection/CommentSection'; 

const PostContainer = props => {
  return (
    <div class="postContainer">
      <div class="postContent">
        <p>{props.post.username}</p>
      </div>

      <div class="commentContainer">
        {props.post.comments.map(comment => (
          <p>
            <CommentSection comment={comment} />
          </p>
        ))}
      </div>
    </div>
  );
};

export default PostContainer; 

