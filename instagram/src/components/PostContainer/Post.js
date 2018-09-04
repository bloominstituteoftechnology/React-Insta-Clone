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
        
            <CommentSection 
            comments={props.post.comments}
            likes={props.post.likes} 
            />
        </div>
    );
};
 export default Post;