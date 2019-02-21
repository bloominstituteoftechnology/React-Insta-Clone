import React from 'react';

/*
Passed as props from CommentSection.js

key={i} 
user={c.username} 
text={c.text}

*/

const Comment = props => {
    return (
        <div>
            <p className="comment-text"><strong>{props.user}</strong> {props.text}</p>
        </div>
    )
}

export default Comment