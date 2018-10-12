import React from 'react';
import { StyledInput } from '../Styles'

const CommentEntry = props => {

    return (
      <form className='comment-form' onSubmit={props.addNewComment}>
        <StyledInput
          comment={true}
          type='text'
          name='newComment'
          placeholder='Add a comment...' onChange={props.handleCommentChange} value={props.newComment}
/>
      </form>

    )

}

export default CommentEntry;
