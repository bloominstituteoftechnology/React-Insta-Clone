import React from 'react';
import Comment from './Comment';
import PropTypes from 'prop-types';

const CommentSection = (props) => {
    return (
        <div>
            {props.thisPost.comments.map((comment,index) => {
                return <Comment thisComment={comment} key={index} />
            })}
        </div>
    );
}

CommentSection.propTypes = {
    thisPost: PropTypes.shape({
        username: PropTypes.string.isRequired,
        thumbnailUrl: PropTypes.string.isRequired,
        imageUrl: PropTypes.string.isRequired,
        likes:  PropTypes.number.isRequired,
        timestamp: PropTypes.string.isRequired,
        comments: PropTypes.arrayOf(PropTypes.object).isRequired
    })
}

export default CommentSection;