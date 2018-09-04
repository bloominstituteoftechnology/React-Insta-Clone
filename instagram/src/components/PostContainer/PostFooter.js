import React from 'react';
import './PostContainer.css'
import PostFooterActions from './PostFooterActions';

function PostFooter(props) {
    return (
        <div className="footer">
            <PostFooterActions likes={props.likes} />
        </div>
    )
}

export default PostFooter;