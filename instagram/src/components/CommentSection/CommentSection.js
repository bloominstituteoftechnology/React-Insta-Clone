import React from 'react';

const CommentSection = props => {
    return(
        <div>
            {props.comments.map((comment,i) =>
                <div key={i}>
                    <div>{props.username}</div>
                    <div>{props.text}</div>
                </div>
            )}
        </div>
    )
}

export default CommentSection;