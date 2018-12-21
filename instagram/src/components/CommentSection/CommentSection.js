import React from 'react';

const CommentSection = props => {
    console.log(props)
    return (
        <div>
            <div>
                <b>{props.comment.username} </b>{props.comment.text}
            </div>
                
        </div>
    )
}

export default CommentSection;
