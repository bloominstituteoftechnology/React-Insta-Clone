import React from 'react';


const CommentSection = (props) =>{
    return(
        <div>
            <span>{props.user}</span>
            <span>{props.comments}</span>
        </div>
    )
}

export default CommentSection