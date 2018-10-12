import React from 'react';
import Comment from './Comment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import FlexColumnContainer from '../Styles/Reusables/FlexColumnContainer'

const CommentSection = props => {
    return (
      <>
        <div className='comment-container'>
            <FlexColumnContainer>
                <FontAwesomeIcon className='icons' icon='heart' onClick={() => props.newLike(props.index)} />
                <FontAwesomeIcon className='icons comment' icon='comment' />
            </FlexColumnContainer>
            <div>
                <p>{props.likes} likes</p>
            </div>
            {props.comments.map(comment => (
                <div key={comment.id}>
                    <Comment comment={comment} />
                </div>
            ))}
        </div>
        <input 
            className='comment-input' 
            type='text' 
            placeholder='Comment' 
            value={props.commentInput} 
            onChange={props.handleSubmit} 
            onKeyPress={(e) => props.addNewComment(props.index, e)}
        />   
      </>  
    );
}

CommentSection.propTypes = {
    comments: PropTypes.arrayOf(PropTypes.object),
    likes: PropTypes.number
};

export default CommentSection;