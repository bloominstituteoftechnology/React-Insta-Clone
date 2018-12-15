import React from 'react';

const CommentSection = (props) => {
    return ( 
        <div>
            {props.comment.map(comment =>(
                <div>
                <h3 >{comment.username}</h3>
                <p>{comment.text}</p>
                </div>
            ))}
        </div>
     );
};
 
export default CommentSection;