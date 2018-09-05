import React from 'react';
import './PostContainer.css'
import PostFooterActions from './PostFooterActions';

// Footer of the post - shows the likes
function PostFooter(props) {
    return (
        <div className="footer">
            <PostFooterActions likes={props.likes} />
        </div>
    )
}

export default PostFooter;