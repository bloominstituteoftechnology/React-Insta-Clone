import React from 'react';

const CommentSection = (props) => {
    return ( 
        <div>
            {props.comment.map(comment =>(
                <p>{comment.username}</p>
            ))};
        </div>
     );
};
 
export default CommentSection;