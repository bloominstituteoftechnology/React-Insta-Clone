import React from 'react';
import './Posts.css';

const PostHeader = props => {
    return (
        <div className="post-header">
           <div className="post-header-thumbnail">
             <img alt="post-header-thumb" className="post-header-img" src={props.thumbnailURL} />
           </div>
           <div className="post-header-user"></div>
           {props.username}
        </div>
    );
};

export default PostHeader;