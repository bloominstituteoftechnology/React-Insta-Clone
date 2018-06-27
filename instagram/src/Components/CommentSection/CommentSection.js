import React from 'react';
import PropTypes from 'prop-types';

const CommentSection = props => {

    return (
        <div className='comments-section'>
            <span>{props.comments.username}</span> 
            <span>{props.comments.text}</span>
        </div>
    );
}

CommentSection.propTypes = {
    comment: PropTypes.shape({
        username: PropTypes.string,
        text: PropTypes.string,
    })
}
 
export default CommentSection;