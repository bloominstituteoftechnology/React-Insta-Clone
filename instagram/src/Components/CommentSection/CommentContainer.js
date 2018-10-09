import React from 'react';
import PropTypes from 'prop-types';
import './CommentSection.css';
import Comment from './Comment';

const CommentContainer = ({comments}) => {
    return (
        <div className="comment-container">
            {comments.map((comment, i) => <Comment info={comment} key={i}/>)}
        </div>
    );
}

export default CommentContainer;

CommentContainer.propTypes = {
    comments: PropTypes.arrayOf(PropTypes.shape({
        username: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
    })),
}
