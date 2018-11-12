import React, { Fragment} from 'react';
import './Comment.css'


const CommentInput= props => {
  return (
    <Fragment>
      <input
        value={props.value}
        name="comment"
        type="text"
        className="add-comment fas fa-ellipses-h"
        onChange={props.handleChange}
        placeholder="Add a comment..."
      />
      <i className="fas fa-ellipsis-h"></i>
    </Fragment>
  )
}

export default CommentInput
