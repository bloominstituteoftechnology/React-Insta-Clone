import React from 'react';
import Post from './Post';
import  CommentsSection from '../CommentsSection/CommentsSection.js';

const PostContainer = (props) => {
    return (
        <div className="post-container">
          <Post post = {props.post} />
          <CommentsSection commentsArray= {props.comments}/>
        </div>
      );
}

export default PostContainer;
