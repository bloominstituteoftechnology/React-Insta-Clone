import React, { Fragment} from 'react';
import './Comment.css'


const CommentInput= props => {
  return (
    <Fragment>
      <form>
        <input
          value={props.value}
          name="comment"
          type="text"
          className="add-comment fas fa-ellipses-h"
          onChange={props.handleChange}
          placeholder="Add a comment..."

        />
        <button 
          htmlFor="comment"
          type="submit"
          onClick={props.addComment}
          className="fas fa-ellipsis-h"
        />
      </form>
    </Fragment>
  )
}

export default CommentInput
