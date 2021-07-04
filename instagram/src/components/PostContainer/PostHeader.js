import React from 'react';

const PostHeader = props => {
    return (
        <div className="post-header">
            <img className="user-thumbnail" src={props.thumbnail} alt="thumbnail"/>
            <p className="username">{props.username}</p>
        
        </div>
    );
}

export default PostHeader;