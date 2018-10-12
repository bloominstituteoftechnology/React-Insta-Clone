import React from 'react';

const Comment = (props) => {
    return (
        <div>
            {props.user}
            {props.text}
        </div>
    )
}

Comment.propTypes = {
    user:propTypes.string,
    text:propTypes.string
}

export default Comment;