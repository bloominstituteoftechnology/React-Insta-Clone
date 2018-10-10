import React from 'react';

function Comment(props) {
    return (
        <div className="comments-comment">
            <a
                className="post-username"
                href={'https://example.com/users/'+props.username}
            >
                {props.username}
            </a> <span>
                {props.children}
            </span>
        </div>
    )
}

export default Comment;
