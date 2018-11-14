import React from 'react';
import PropTypes from 'prop-types';

const Comments = props => {
    return (
        <div className='comments'>
            Comments Go here
        </div>
    )
}

Comments.propTypes = {
    comments: PropTypes.arrayOf(PropTypes.shape({
        text: PropTypes.string,
        username: PropTypes.string
    }))
}

export default Comments;