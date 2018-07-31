import React from 'react';

const Comment = (props) => {
    return (
        <div>
            {props.user}
            {props.text}
        </div>
    )
}

export default Comment;