import React from "react";
import PropTypes from "prop-types";
import "./Comment.css";
import styled from "styled-components";
const Comment = props => {
  const StyledComment = styled.div`
    //border: solid red 1px;
    text-align: left;
    padding-left: 2%;
    font-size: 1.4rem;
    margin-bottom: 10px;
    line-height: 1.8rem; .user {
      font-weight: 500;
       }
       .commententered{
        //border: solid red 1px;
        
       }
  `;

  return (
    <StyledComment>
      <span className="user">~{props.comment.username} </span>
      <span className="commententered">{props.comment.text}</span>
      
    </StyledComment>
  );
};

Comment.propTypes = {
  comment: PropTypes.shape({
    text: PropTypes.string,
    username: PropTypes.string
  })
};

export default Comment;
