import React from 'react';

const PostHeader = props => {
    return (
        <div>
            <img 
            src={props.thumbnailUrl} 
            alt="user-thumbnail"
            />
            {props.username}
        </div>
    );
}

export default PostHeader;