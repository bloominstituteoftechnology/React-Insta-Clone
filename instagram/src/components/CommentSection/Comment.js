import React from 'react';
import "../../App.css"
import PropTypes from 'prop-types';

const Comment = props => {
    return (
        <div className="commentUser">
            <div className="user"> {props.user}</div> <div className="comment">{props.comments}
            </div>
            <a className='button' id='commentIcon'></a>

        </div>

    );
};

Comment.propTypes = {
    user: PropTypes.string.isRequired,
    comments: PropTypes.string.isRequired
}

export default Comment;