import React from 'react';
import PostHeader from './PostHeader';
import CommentSection from '../CommentSection/CommentSectionContainer';
 
function Post(props) {
    return (
        <div className="post-border">
            <PostHeader 
            username={props.post.username}
            thumbnailUrl={props.post.thumbnailUrl}
            />
            <div className="post-img-wrapper">
            <img src={props.post.imageUrl} alt="post-content" className="post-img" />
            </div>
        
            <CommentSection comment={props.post.comments} />
        </div>
    );
};
 export default Post;