import React from 'react';


const CommentSection = props => {
    return (
        <div>
            {props.comments.map((comment) => 
            {return (
                <div className="commentUsername">
                    {comment.username}
                    <div className="commentText">{comment.text}</div>
                </div>
                )}
            )}
            <input className="commentInput" type="text" placeholder="Comment..."></input>
        </div>
    )
}

export default CommentSection;