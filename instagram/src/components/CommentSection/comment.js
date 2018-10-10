import React from 'react';
import PropTypes from 'prop-types';

const Coment = props => {
    return (
        <div className="comment">
            <h2>{props.comment.username}</h2>
            <p>{props.comment.text}</p>
            <span className="deleteComment" onClick={props.deleteComment}>✕</span>
        </div>
    )
}

Coment.propTypes = {
    comment: PropTypes.shape({
        username: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired
      })
}

export default Coment;