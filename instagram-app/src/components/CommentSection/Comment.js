import React from 'react'; 
import PropTypes from 'prop-types'; 

import styled from 'styled-components'; 

const CommentWrapper = styled.div`
    display: flex; 
    flex-direction: row; 
    text-align: baseline; 
    align-items: center; 
    padding-left: 2%; 
`; 

const CommentUserName = styled.p`
  font-family: 'Oswald', sans-serif;
  font-size: 1.5rem; 
`; 

const CommentText = styled.p`
  font-family: 'Oswald', sans-serif;
  font-size: 1rem; 
  padding-left: 2%;
`; 


const Comment = props => {
    return (        
        <CommentWrapper>
            <CommentUserName>{props.comment.username} </CommentUserName>
            <CommentText>{props.comment.text}</CommentText>
        </CommentWrapper>

        
    );
};

Comment.propTypes = {
    comment: PropTypes.arrayOf(
      PropTypes.shape({
        username: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired
      })
    ).isRequired
  };
  
  // Just in case we haven't gotten data back, going to do a default prop array
  Comment.defaultProps = {
    comment: []
  };
  
export default Comment; 