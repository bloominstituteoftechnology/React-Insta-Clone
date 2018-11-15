import React from 'react';
import PropTypes from 'prop-types';
import './PostContainer.css';
import styled from 'styled-components';

import PostHeader from './PostHeader';
import CommentSection from '../CommentSection/CommentSection';

const StyledPostContainer = styled.div`
  max-width: 50rem;
  border: 1px solid lightgray;
  border-radius: .3rem;
  background-color: white;
  margin-bottom: 1rem;
`;

const StyledImgContainer = styled.div`
  overflow: hidden;
  height: 300px;
  img {
    width: 100%;
  }
`;

const PostContainer = props => {
  return (
    <StyledPostContainer className="post--container">
      <PostHeader
        username={props.post.username}
        thumbnailUrl={props.post.thumbnailUrl}
      />
      <StyledImgContainer className="post--img">
        <img src={props.post.imageUrl} alt=""/>
      </StyledImgContainer>
      <CommentSection
        username={props.post.username}
        comments={props.post.comments}
        likes={props.post.likes}
        timestamp={props.post.timestamp}
        submitComment={(comment) => props.submitComment(
          comment,
          props.post.username,
          props.post.timestamp)}
        updateLikes={(u, t, n) => props.updateLikes(u, t, n)}
        handleRemoveComment={(i) => props.handleRemoveComment(
          props.post.username,
          props.post.timestamp,
          i)}
      />
    </StyledPostContainer>
  );
}

PostContainer.propTypes = {
  post: PropTypes.shape({
    username: PropTypes.string,
    thumbnailUrl: PropTypes.string,
    imageUrl: PropTypes.string,
    likes: PropTypes.number,
    timestamp: PropTypes.string,
    comments: PropTypes.arrayOf(PropTypes.shape({
      username: PropTypes.string,
      text: PropTypes.string,
    })),
  }).isRequired,
  submitComment: PropTypes.func.isRequired,
  handleRemoveComment: PropTypes.func.isRequired,
}

export default PostContainer;