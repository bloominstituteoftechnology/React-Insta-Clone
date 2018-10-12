import React from 'react';

const Comment = props => {
    return ( 
        <div>
        <h3>{props.username}</h3>
        <p className="text">{props.text}</p>
        </div>
     );
}
 
export default Comment;