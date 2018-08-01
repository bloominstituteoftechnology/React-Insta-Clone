import React from 'react';
import './PostStyling.css';

const PostHeader = props => {
    return (
        <div className="post-header"> 
        <div className="post-header-thumbnail">
           <img alt="post header img" className="post-thumbnail" src={props.thumbnailUrl} />
        </div>
        <div>
            {props.username}
        </div>
        </div>
    );
};

export default PostHeader;