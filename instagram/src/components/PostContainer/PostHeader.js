import React from 'react';

const PostContainer = (props) => {
    return (
        <>
            <img src={props.thumbnail} alt="user thumbnail" />
            <strong className="username">{props.username}</strong>
        </>
    )
}

export default PostContainer;