import React from 'react';

const CommentSection = (props) => {
    const {username, text} = props.chatter;
    return (
        <div>
            {username}
            {text}
        </div>
    )
}

export default CommentSection;