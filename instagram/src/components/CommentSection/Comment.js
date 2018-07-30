import React from 'react';

const Comment = props => {
    return (
        <div className="comment">
            <p>{props.user}</p>
            <p>{props.text}</p>
        </div>
    );
};

export default Comment;