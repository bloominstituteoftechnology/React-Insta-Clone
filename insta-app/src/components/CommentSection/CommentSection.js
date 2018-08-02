import React from "react";
import styled from "styled-components"; 

const CommentContainer = styled.div`
height: auto; 
margin: 20px 0; 
`
const CommentSec = styled.div`
display: flex; 
flex-direction: row; 
`
const CommentUser = styled.p`
font-weight: 700; 
font-size: 12px;
margin-left: 10px;  
`
const Comment = styled.p`
font-size: 12px;
margin-left: 10px;  
`


//what is going on in the code
//I am creating a object called CommentSection.

const CommentSection = props => {
  return (
    <div className="comment-container">
      {props.comments.map((eachComment, index) => (
        <div key={index}>
          <CommentSec>
            <CommentUser>{eachComment.username}</CommentUser>
            <Comment>{eachComment.text}</Comment>
          </CommentSec>
        </div>
      ))}
    </div>
  );
}; 

export default CommentSection;
