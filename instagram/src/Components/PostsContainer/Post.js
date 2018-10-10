import React from 'react';
import './Posts.css';
import PostHeader from './PostHeader';
import CommentContainer from '../CommentSection/CommentSectionContainer';

const Post = props => {
    return (
        <div className="post-wrapper">
          <PostHeader 
          username={props.post.username}
          thumbnailUrl={props.post.thumbnailUrl}
          />
          <div className="post-img">
            <img alt="post thumb" className="post-image" src={props.post.imageUrl} />
          </div>
          <CommentContainer comments={props.post.comments} />
        </div>
    );
};

export default Post;