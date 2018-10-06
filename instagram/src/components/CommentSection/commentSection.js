import React from 'react';
import './commentsection.css';
import Comment from './Comment'
import PropTypes from 'prop-types';

const CommentSection = props => {
    return (
      <>
        <div className='comment-container'>
            <div>
                <img className = 'likeheart' src={require('../assets/loveheart.png')} alt={'likeheart'}></img>
                <img className = 'comment' src={require('../assets/comment.png')} alt={'comment'}></img>
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
        <input className='comment-input' type='text' placeholder='Comment' />
      </>  
    );
}

CommentSection.propTypes = {
    comments: PropTypes.arrayOf(PropTypes.object),
    likes: PropTypes.number
};

export default CommentSection;
