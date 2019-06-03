import React from 'react';
import PropTypes from 'prop-types';
    
import Comment from '../Comment/Comment';

const commentSection = (props) => {
    const { comment } = props;
    return (
        <div>
            <Comment comment={comment}/>
        </div>
    )
}

commentSection.propTypes = {
    comment: PropTypes.shape({
        username: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired
    })
}
export default commentSection;