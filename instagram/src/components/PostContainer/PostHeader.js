import React from 'react';

const PostContainer = (props) => {
    return (
        <>
            <img src={props.thumbnail} alt="user thumbnail" />
            <strong>{props.username}</strong>
        </>
    )
}

export default PostContainer;