import React from 'react';
import PropTypes from 'prop-types';

const Comment = (props) =>{
    return(
        <div>
            <p className='username'>{props.comment.username}</p>
            <p className='comment'>{props.comment.text}</p>
        </div>
    )
}

Comment.propTypes = {
    comment: PropTypes.shape({
        username: PropTypes.string,
        comment: PropTypes.string,
    })
};

export default Comment;