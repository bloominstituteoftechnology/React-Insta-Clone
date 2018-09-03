import React from 'react';
import './PostContainer.css'
import PostFooterActions from './PostFooterActions';

const PostFooter = (props) => {
    return (
        <div className="footer">
            <PostFooterActions likes={props.likes} />
        </div>
    )
}

export default PostFooter;