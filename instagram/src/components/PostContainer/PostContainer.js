import React from 'react';
import CommentSection from '../CommentSection/CommentSection.js'
import PropTypes from 'prop-types';
//import Moment from 'react-moment';
import styled from 'styled-components'

const StyledAvatar = styled.img`
    border-radius: 50%;
    height: 30px;
    margin-right: 10px;
`;

const StyledPostTop = styled.div`
    display:flex;
    flex-direction: row;
    align-items: center;
    padding: 20px 20px;
`;

const StyledPostContainer = styled.div`
    box-sizing: border-box;
    padding: 15px 0 30px 0;
    border-right: 1px solid rgb(197, 197, 197);
    border-left: 1px solid rgb(197, 197, 197);
    border-top: 61px solid rgb(197, 197, 197);
    `;

const StyledPostuser = styled.div`
    font-weight: bold;
`    




const PostContainer = props => {
  return (
    <div>
      
      {props.data.map(post => {
        return (
          <StyledPostContainer>
            <StyledPostTop>
              <StyledAvatar src={post.thumbnailUrl} /> 
              <StyledPostuser>{post.username} </StyledPostuser>
            </StyledPostTop>
            <img src={post.imageUrl} />
            <CommentSection com={post} />
            </StyledPostContainer>
            )
          })}
    
    </div>
    
    )
  };
  
  
PostContainer.propTypes = {
        data: PropTypes.array
    }
    
export default PostContainer;