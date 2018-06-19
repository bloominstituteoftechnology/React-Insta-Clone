import React from 'react';
import Comment from './Comment';
import './CommentSection.css';
import PropTypes from 'prop-types';

const CommentSection = props => {
    return(
        <div className='comment-text' >
        {props.comments.map(comment => (
            <Comment commentInfo={comment} />
        ))}
         
         <form onSubmit={(event) => props.addComment(props.index, event)}>
         <input type="text"
            placeholder="Add a comment..."
            className="input"
            onChange={props.addCommentHandler}
            value={props.commentTemplate.text}
            />
        </form>
        </div>
    );
}

CommentSection.propTypes = {
    comments: PropTypes.arrayOf(
      PropTypes.shape({ text: PropTypes.string, username: PropTypes.string })
    )
  };

export default CommentSection;