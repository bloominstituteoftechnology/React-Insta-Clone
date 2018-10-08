import React from 'react';


const CommentSection = props =>{ 
    return (
        <div>
            <p>{props.data.username}</p><p>{props.data.text}</p>

        </div>
    )
}

export default CommentSection;