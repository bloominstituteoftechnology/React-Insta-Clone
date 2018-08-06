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
        </div>
    );
};

export default Post;