import React from 'react';
import PropTypes from 'prop-types';

const Comments = props => {
    return (
        <div className = 'comments-wrapper'>
            <h2>{props.comments.username}</h2>
            <h2>{props.comments.text}</h2>
        </div>
    )
}

Comments.propTypes = {
    username: PropTypes.string,
    text: PropTypes.string
}
  

export default Comments;
//`Comment` component with the username of the poster as well as the post's text.