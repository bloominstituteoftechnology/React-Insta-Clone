import React from 'react';

const PostHeader = props => {
    return (
        <div>
            <img src={props.thumbnail} alt="" />
            <span>{props.user}</span>
        </div>
    );
};

export default PostHeader;