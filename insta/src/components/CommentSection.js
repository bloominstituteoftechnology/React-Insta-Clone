import React from 'react';
import Comment from './Comment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';

const CommentSection = props => {
    return (
      <>
        <div className='comment-container'>
            <div className='flex-column-container'>
                <FontAwesomeIcon className='icons' icon='heart' onClick={() => props.newLike(props.index)} />
                <FontAwesomeIcon className='icons comment' icon='comment' />
            </div>
            <div>
                <p>{props.likes} likes</p>
            </div>
            {props.comments.map(comment => (
                <div key={comment.id}>
                    <Comment comment={comment} />
                </div>
            ))}
        </div>
        <input className='comment-input' type='text' placeholder='Comment' value={props.commentInput} onChange={props.handleSubmit} onKeyPress={(e) => props.addNewComment(props.index, e)}/>   
      </>  
    );
}

CommentSection.propTypes = {
    comments: PropTypes.arrayOf(PropTypes.object),
    likes: PropTypes.number
};

export default CommentSection;