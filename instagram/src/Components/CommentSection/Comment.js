import React from 'react'; 

const NewComment = props => {
    return (
        <div className = "comment">
            <p><strong className = "strong">{props.commentUser}</strong>{props.commentText}</p>
        </div>
    )
}

export default NewComment;