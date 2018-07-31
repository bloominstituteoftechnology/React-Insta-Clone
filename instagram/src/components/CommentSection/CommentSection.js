import React from 'react';
import PropTypes from 'prop-types';



const CommentsSection = props => {

  
    return(
        <div>
        <div>{props.username}</div>
        <div>{props.text}</div>
        <input placeholder="Add a comment . . ." type="text"/>
        </div>
    
    );

};

CommentsSection.propTypes = {
    props: PropTypes.shape({
        username: PropTypes.string,
        text: PropTypes.string
    })   
};

export default CommentsSection;
