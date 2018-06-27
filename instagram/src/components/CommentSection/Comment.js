import React from 'react';


const Comment = props => {
    return (
        <div>
            {props.commentUsername}
            {props.commentText}
        </div>        

    );
}
export default Comment;