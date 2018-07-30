import React from 'react';
import Comment from './Comment';
import PropTypes from 'prop-types';

const CommentSection = props => {
    return (
        <div className="comments">
            {
                props.comments.map((comment, ind) =>
                <Comment key={ind} user={comment.username} text={comment.text} />)
            }
        </div>
    );
};

CommentSection.propTypes = {
    username: PropTypes.string,
    text: PropTypes.string,
};

export default CommentSection;