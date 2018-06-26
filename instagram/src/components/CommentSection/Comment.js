import React from 'react';


const Comment = props => {
    return (
        <div>
            {props.post.comments.map(comment => (
                comment.username + comment.text
            ))}
            ENTER COMMENT
        </div>
        // <div>
        //     {props.commentText}
        //     {props.comments.commentUsername}
        //     ENTER COMMENT
        //  </div>
        // <div>
        //     {props.commentText}
        //     {props.comments.commentUsername}
        //     ENTER COMMENT
        //  </div>            

    );
}
export default Comment;