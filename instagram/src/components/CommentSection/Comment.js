import React from 'react';
import PropTypes from 'prop-types';
import {CommentText, TrashIcon} from './CommentStyles';
export default function Comment({comment, id, postID, currentUser, removeComment}) {

  return (

    <div className='comment'>

      <CommentText><b>{comment.username}</b> {comment.text} {currentUser === comment.username ? <TrashIcon onClick={() => removeComment(postID, id)} className='far fa-trash-alt'></TrashIcon> : null}</CommentText>

    </div>

  );

}

Comment.propTypes = {

  comment: PropTypes.object

}
