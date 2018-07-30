import React from 'react';


const Comment = props => {
    return (  
        <div>
           <p className="comment"><span className="username">{props.username}</span>{props.text}</p>
        </div>
    );
}
 
export default Comment;