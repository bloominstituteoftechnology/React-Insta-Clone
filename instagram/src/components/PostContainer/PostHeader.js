import React from 'react';
import './PostContainer.css';

const PostHeader = props =>{
    return(
        <div className="user-header">
            <img className="user-thumbNail" src={props.thumbnailUrl} alt="" />
            <div className="user-name">{props.username}</div>
        </div>
    )
}

export default PostHeader;