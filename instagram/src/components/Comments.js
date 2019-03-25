import React from 'react';
import PropTypes from 'prop-types';

const Comments = props => {
    return(
        <div>
            {props.username} 
            {props.text}
        </div>
    );
}

Comments.propTypes= {
    username: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
}

export default Comments;