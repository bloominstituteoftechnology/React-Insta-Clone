import React from 'react';

const CommentSection = (props) => {
    console.log(props);
    return(
        <>
          <p>{props.comment.text}</p>
        </>
    )
}

export default CommentSection;