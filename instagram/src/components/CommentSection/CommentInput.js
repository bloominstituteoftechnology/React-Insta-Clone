import React from 'react';


const CommentInput = (props) => {
  return (
    <form onSubmit={props.addNewComment}>
        <input type="text" name="name" placeholder="Add a comment..."
          value={props.comment}
          onChange={props.updateComment}/>
      <input type="submit" value=""  />
    </form>
  )
}

export default CommentInput
