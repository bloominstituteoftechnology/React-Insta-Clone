import React from 'react';

const CommentSection = (props) => {
    return (
        <div>
            {props.data.username} {' '} {props.data.text}
        </div>
    );
}


export default CommentSection;