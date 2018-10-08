import React from 'react';
import PropTypes from 'prop-types';


const CommentSection = props => {
    return(
        <div/>
    )
}

CommentSection.propTypes = {
    comments: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string))
}

export default CommentSection;