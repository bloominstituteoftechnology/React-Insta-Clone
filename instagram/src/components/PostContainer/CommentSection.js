import React from 'react';

const CommentSection = (props) => {
    return ( 
        <div>
            {props.userName.comments.map(comment =>{
                <p>{comment.username}</p>
            })}
        </div>
     );
}
 
export default CommentSection;