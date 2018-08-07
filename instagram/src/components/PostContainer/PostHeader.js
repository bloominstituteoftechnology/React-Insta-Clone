import React from 'react';


const PostHeader = props => {
    return (
        <div className="header-container">
            <div className="post-image">    
                <img src={props.thumbnailUrl} className="little-image" alt="little" />
            </div>
            <div className="username">{props.username}</div>
        
        </div>
    );
};

export default PostHeader;