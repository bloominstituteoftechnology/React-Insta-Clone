import React from 'react';
import PropTypes from 'prop-types';

const Comments = props => {
    return(
        <div>
           <span> {props.username} </span> 
          <span>  {props.text} </span>
        </div>
    );
}

Comments.propTypes= {
    username: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
}

export default Comments;