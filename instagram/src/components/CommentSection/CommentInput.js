import React from 'react';
 
function CommentInput(props) {
    return (
        <form>
            <input className="comment-input" type="text" placeholder="Add a comment..." />
        </form>   
    );
};

 export default CommentInput