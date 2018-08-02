import React from 'react';

const Comment = props => {
    return ( 
        <div>
            <div className="commentContent">
                <span className="commentUser">{props.com.username}</span>{props.com.text}
            </div>
        </div>
     );
}
 
export default Comment;