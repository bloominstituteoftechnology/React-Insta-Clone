import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import PropTypes from 'prop-types';
import Post from './Post';
import styled from 'styled-components';

function PostContainer(props) {
  // console.log('post container', props.post);
  return (
    <ContainerPost>
      <Post post={props.post} />
      <CommentSection post={props.post} />
    </ContainerPost>
  );
}

PostContainer.propTypes = {
  post: PropTypes.shape({
    username: PropTypes.string.isRequired,
    thumbnailUrl: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired,
    timestamp: PropTypes.string.isRequired,
    comments: PropTypes.arrayOf(PropTypes.object),
  }),
};

export default PostContainer;

const ContainerPost = styled.div`
  width: 642px;
  border: 1px solid lightgray;
  margin: 10px 0;
`;
