import React from 'react';

const Comment = props => {
    return (
        <div>
            <div>
                {props.comment.username}
            </div>
            <div>
                {props.comment.name}
            </div>
        </div>
    )
}
 
export default Comment;