import React from 'react';
import CommentsSection from '../CommentsSection/CommentsSection';
import './PostContainer.css';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledPostContainer = styled.div`
  border: 1px solid black;
  width: 50%;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 50px;
  background-color: white;
`;

const Title = styled.div`
  display: flex;
  justify-content: flex-start;
  margin: 10px;
  width: 100%;
`;

const Thumbnail = styled.img`
  width: 5%;
  height: 10%;
  border-radius: 45px;
  margin: 10px;
  `;

const Img = styled.img`
  display: block;
  width: 100%;
`;

const PostContainer = props => {
  return (
    <StyledPostContainer>
      <Title>
        <Thumbnail src={props.data.thumbnailUrl} alt='Thumbnail'/>
        <p>{props.data.username}</p>
      </Title>
      <Img src={props.data.imageUrl} alt='main' />
      <CommentsSection data={props.data.comments} likes={props.data.likes} user={props.data.username}/>
    </StyledPostContainer>
  )
}

PostContainer.propTypes = {
  data: PropTypes.shape({
    username: PropTypes.string,
    thumbnailUrl: PropTypes.string,
    imageUrl: PropTypes.string,
    likes: PropTypes.number,
    timestamp: PropTypes.string,
    comments: PropTypes.arrayOf(PropTypes.shape({
      username: PropTypes.string,
      text: PropTypes.string
    }))
  })
};

export default PostContainer;
