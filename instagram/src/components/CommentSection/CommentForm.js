import React from 'react';

const CommentForm = props => {
  return (
    <div>
      <form id="style"> 
          <input type="text" placeholder="Add Comment"  onKeyPress={props.commentsEventHandler}/>
      </form>
    </div>
  );
};

export default CommentForm;

//onChange={props.searchPosts}