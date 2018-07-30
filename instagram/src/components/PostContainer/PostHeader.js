import React from 'react';

const PostHeader = props => {
    return (
        <div>
            <img className="thumbnail-img" src={props.thumbnail} alt={`${props.user}'s thumbnail.`} />
            <span className="user">{props.user}</span>
        </div>
    );
};

export default PostHeader;