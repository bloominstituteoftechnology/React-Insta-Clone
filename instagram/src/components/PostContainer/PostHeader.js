import React from 'react';


const PostHeader = props => {
    return (
        <div className="header-container">
            <div className="thumbnail-container">    
                <img src={props.thumbnailUrl} className="thumbnail" alt="little" />
            </div>
            <div className="username">{props.username}</div>
        
        </div>
    );
};

export default PostHeader;