import React from 'react';
import PropTypes from 'prop-types';



const CommentsSection = props => {

  
    return(
        <div>
        <div>{props.comments.username}</div>
        <div>{props.comments.text}</div>
        <input placeholder="Add a comment . . ." type="text"/>
        </div>
    
    );

};

CommentsSection.propTypes = {
    comments: PropTypes.shape({
        username: PropTypes.string,
        comments: PropTypes.string
    })   
};

export default CommentsSection;
