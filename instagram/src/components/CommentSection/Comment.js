import React from 'react';

const CommentSection = props => {
    return (
        <div>
            {props.comments.map(comment => {
                return <p className="comment"><span className="bold-text">{comment.username}</span> {comment.text}</p>
            })}
            <hr />
            <input className='comment-input' type="text" placeholder="..add comment" />
        </div>
    )
}

export default CommentSection;