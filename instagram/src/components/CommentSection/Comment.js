import React from 'react';

function Comment(props) {
    return(
        <div>
            {props.comments.map((comment, index) => {
                return(
                    <div key={index}>
                        <h4>{comment.username}</h4>
                        <p>{comment.text}</p>
                    </div>
                    )
                })}
        </div>
    )};

export default Comment;