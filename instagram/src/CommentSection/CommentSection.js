import React from 'react';
import Comment from './Comment';

const CommentSection = props => {

    /*The CommentSection component will receive the array of comments as props 
    and render a Comment component with the username of the poster 
    as well as the post's text. Additionally, there should be an input box 
    that allows users to submit a new comment for any post. 
    We'll work on posting new comments tomorrow.
    */
  
   let commentID = -1;
    return (
        <div>
            <div className = 'comment-likes'>
            <h2>{props.data.likes} likes</h2>
            </div>
            {props.comments.map(comment => (
                <Comment comment={comment} key={commentID += 1} />
            ))}
            
        </div>
    )
}

export default CommentSection;