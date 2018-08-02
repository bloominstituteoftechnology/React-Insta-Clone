import React from 'react';

const Comment = (props) => {
    return ( 
        <div>
            <div>{props.com.username}</div>
            <div>{props.com.text}</div>
        </div>
     );
}
 
export default Comment;