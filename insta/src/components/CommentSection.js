import React from 'react';
import Comment from './Comment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const CommentSection = props => {
    return (
      <>
        <div className='comment-container'>
            <div className='flex-column-container'>
                <FontAwesomeIcon className='icons' icon='heart' />
                <FontAwesomeIcon className='icons comment' icon='comment' />
            </div>
            <div>
                <p>{props.likes} likes</p>
            </div>
            {props.comments.map(comment => (
                <Comment comment={comment} />
            ))}
        </div>
        <input type='text' placeholder='Comment' />
      </>  
    );
}

export default CommentSection;