import React from 'react';
import PropTypes from 'prop-types';

const CommentSection = (props) => {
    return(
        <>
          <p>{props.comment.text}</p>
        </>
    )
}

CommentSection.propTypes = {
    comment: PropTypes.arrayOf(
        PropTypes.shape({
            username: PropTypes.string,
            text: PropTypes.string,
        })
    ).isRequired
}

export default CommentSection;