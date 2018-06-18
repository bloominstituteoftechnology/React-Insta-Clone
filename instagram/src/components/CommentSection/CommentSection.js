import React from 'react';

const CommentSection = props => {
    return (
        <div>
            Comment
            {props.comments.map((comment, index) => (
                <div key={comment.username + index} className="user-comment">
                    <div className="user">
                        {comment.username}
                    </div>
                    <div className="comment">
                        {comment.text}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default CommentSection