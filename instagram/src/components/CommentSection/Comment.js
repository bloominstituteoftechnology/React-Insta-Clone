import React from 'react';

const Comment = props => {
    return (
        <div className="comment">
            <p><span className="user">{props.user}</span> &thinsp; {props.text}</p>
        </div>
    );
};

export default Comment;