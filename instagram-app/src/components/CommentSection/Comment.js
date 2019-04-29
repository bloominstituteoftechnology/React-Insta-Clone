import React from 'react';  

const Comment = props => {
    return (        
        <div class="Comment">
            <p>{props.comment.username}</p>
            <p>{props.comment.text}</p>
        </div>

        
    );
};
  
export default Comment; 