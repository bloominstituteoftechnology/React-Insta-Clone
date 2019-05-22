import React from 'react';
import PropTypes from 'prop-types';

const Comments = props => {
    return(
        <div className="yup">
           <strong> {props.username} </strong>
          <span>  {props.text} </span>
        </div>
    );
}

Comments.propTypes= {
    username: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
}

export default Comments;