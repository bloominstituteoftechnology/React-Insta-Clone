import React from 'react';
import PropTypes from 'prop-types';

const CommentSection = (props) => {
    
    return(
        <>
        
          <h3>{props.comment.username}</h3>
          <p>{props.comment.text}</p>
          
        </>
    );
}


    CommentSection.propTypes = {
        comment: PropTypes.objectOf(PropTypes.string).isRequired
    }


export default CommentSection