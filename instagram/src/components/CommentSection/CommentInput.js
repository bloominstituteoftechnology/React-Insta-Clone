import React from 'react';

const CommentInput = (props) => {
    return (  
               <form className="addCommentBoxButton">
                   <input value={props.typedComment} onChange={props.handleInput} placeholder="Add a comment..." />
                   <button onClick={props.addComment}>comment</button>
               </form>
            );
        }
   export default CommentInput;