import React from 'react';
import './CommentSection.css'
import PropTypes from 'prop-types';
import styled from 'styled-components'

const CommentDiv = styled.div `
margin-bottom: 10px ;
`
const CommentSpan = styled.div `
margin-bottom: 5px ;
`

const Comment = (props) => {
 return(
  <CommentDiv>
   {props.comments.map((comment, index) => <div key={index}>
    <CommentSpan>{comment.username}:    
     {" "} 
     {comment.text} 
    </CommentSpan>
   </div>)}
  </CommentDiv>
 )
}

Comment.PropTypes = {
 comments: PropTypes.array.isRequired
}

export default Comment