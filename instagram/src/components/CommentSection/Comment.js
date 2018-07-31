import React from 'react';
import './CommentSection.css';
import PropTypes from 'prop-types';


const Comment = props => {
    return (
        <div className='comment'>
            <p className='outside-user'><span className='user'>{props.user}</span>{props.text}</p>
        </div>
    );
};

Comment.propTypes = {
    user: PropTypes.string,
    text: PropTypes.string,
}

export default Comment;