import React from 'react';

const CommentSection = props => {
    return (
        <div>
            {props.comments.map((comment,index) => {
                return <p key={index} className="comment"><span className="bold-text">{comment.username}</span> {comment.text}</p>
            })}
            <hr />
            <input className='comment-input' type="text" placeholder="..add comment" />
        </div>
    )
}

export default CommentSection;