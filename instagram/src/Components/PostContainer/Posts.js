import React from 'react';
import PostHeader from './PostsHeader';
import CommentSection from '/Users/sparekh/Desktop/Lambda CS12/React-Insta-Clone/instagram/src/Components/CommentSection/CommentSection.js';
import './PostStyling.css';

const Posts = props => {
    return (
        <div className="posts-wrapper">
          <PostHeader username={props.post.username} thumbnailUrl={props.post.thumbnailUrl} />
          
          <div className="post-thumbnail-wrapper">
           <img alt="post-thumbnail" className="post-img" src={props.post.imageUrl} />
          </div>

          
        </div>

    )
}

export default Posts;