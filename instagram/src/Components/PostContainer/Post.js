import React from 'react';
import PostHeader from './PostsHeader';
import CommentSection from '../CommentSection/CommentSection';
import './PostStyling.css';
import LikeAddition from './LikeAddition';

const Post = props => {
    return (
        <div className="posts-wrapper">
          <PostHeader 
            username={props.post.username} 
            thumbnailUrl={props.post.thumbnailUrl} 
            />
        <div className="post-thumbnail-wrapper">
           <img 
             alt="post-thumbnail" 
             className="post-img" 
             src={props.post.imageUrl} />
          </div>

          <CommentSection comments={props.post.comments} />
        </div>

    )
}

export default Post;