import React from 'react';

const CommentInput = (props) => {
    return (<div>   
               <form>
                   <input value={props.commentInput} onChange={props.handleInput} placeholder="Add a comment..." />
                   <button onClick={props.addComment}>comment</button>
               </form>
           </div>
    );
   };
   export default CommentInput;