import React from 'react';

const CommentSection = props => {
    return (
        <div>
            { props.comment.text }
        </div>
    );
}

export default CommentSection;
