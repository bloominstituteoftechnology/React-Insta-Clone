import React from 'react';
import CommentsSection from './CommentsSection';
import './post-container.css';

const PostContainer= props =>{
    return (
        <div className="post-container">
            <span>Post Container</span>
            {props.post.map(comments => (
                <CommentsSection
                comment={comments}
                toggleSingleItem={props.toggleSingleItem}
                />
                ))}
        </div>
    );
}

export default PostContainer;