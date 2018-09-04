import React from 'react';

function PostImg(props) {
    return(
        <div>
            <h4>{props.post.comments.username}</h4>
            <p>{props.post.comments.text}</p>
        </div>
    )
}

export default PostImg;