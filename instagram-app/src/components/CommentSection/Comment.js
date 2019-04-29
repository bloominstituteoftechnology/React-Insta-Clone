import React from 'react';  

const Comment = props => {
    return (        
        <div class="Comment">
            <p>{props.username}</p>
            <p>{props.commentText}</p>
        </div>

        
    );
};
  
export default Comment; 