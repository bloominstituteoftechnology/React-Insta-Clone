import React from 'react';

const CommentSection = props => {
    return (
        <div>
            <div className="commentsContainer">
                {props.comments.map((c, index) => (
                    <div key={`${c.username}'s comment ${index}`}>
                        <p>
                            <span>{c.username}</span> {c.text}
                        </p>
                    </div>
                ))}
            </div>
            <div>
                <input type="text" placeholder="Add a comment..."/>
            </div>
        </div>
    )
}

export default CommentSection;