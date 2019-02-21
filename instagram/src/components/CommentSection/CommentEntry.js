import React from 'react';
import { InputStyles } from '../Styles'

const CommentEntry = props => {

    return (
      <form className='commentBox' onSubmit={props.addNewComment}>
        <InputStyles
          comment={true}
          type='text'
          name='newComment'
          placeholder=' Add a comment...' onChange={props.handleCommentChange} value={props.newComment}
/>
      </form>

    )

}

export default CommentEntry;
