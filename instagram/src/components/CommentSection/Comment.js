import React from 'react';

const Comment = props =>{    
    return(
        <div className = "comment-content">         
            <span className = "comment-username">{props.name} </span>  
            <span className = "comment">{props.comment}</span>            
        </div>
    )         
}

export default Comment