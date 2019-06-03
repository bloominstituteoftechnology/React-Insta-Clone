import React from 'react';
import PropTypes from 'prop-types';
    
import Comment from '../Comment/Comment';

const commentSection = (props) => {
    const { comment } = props;
    console.log(comment);
    return (
        <div>
            <Comment comment={comment}/>
        </div>
    )
}

commentSection.propTypes = {
    comment: PropTypes.shape({
        id: PropTypes.string.isRequired,
        username: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired
    })
}
export default commentSection;