import React from 'react';


const PostHeader = props => {
    <div className="header-container">
        <div className="post-image">    
            <img src={props.thumbnailUrl} className="little-image"/>
        </div>
        <div className="username">{props.username}</div>
    
    </div>
}

export default PostHeader;