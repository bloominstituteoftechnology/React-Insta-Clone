import React from 'react';
import './Post.css';

const PostHeader = (props) => {
    return(
        <div className="post-header">
            <div className="thumbnail-wrapper">
                <img src={props.thumbailUrl} alt="post thumbnail" className="post-thumbnail"/>
            </div>
            <div>{props.username}</div>
        </div>
    );
    
}

export default PostHeader;