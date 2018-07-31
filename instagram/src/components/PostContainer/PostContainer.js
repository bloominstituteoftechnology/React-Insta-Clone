import React from 'react';
import Post from './Post';
import  CommentsSection from '../CommentsSection/CommentsSection.js';
import './PostContainer.css';

const PostContainer = (props) => {
    return (
        <div className="post-container">
          <Post post = {props.post} />
          <CommentsSection commentsArray= {props.comments}/>
          <input className="add-comment" placeholder="Add a comment..." />
        </div>
      );
}

export default PostContainer;
