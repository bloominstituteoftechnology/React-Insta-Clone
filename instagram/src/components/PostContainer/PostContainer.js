import React from 'react';
import Post from './Post';
import  CommentsSection from '../CommentsSection/CommentsSection.js';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const PostCont = styled.div `
  margin: 10px auto;
  max-width: 800px;
  width: 100%;
  border: 1px solid lightgray;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: white;
`;

const PostContainer = (props) => {
    return (
        <PostCont>
          <Post post = {props.post} />
          <CommentsSection commentsArray= {props.comments} />
        </PostCont>
      );
}

PostContainer.propTypes = {
  post: PropTypes.object,
  comments: PropTypes.arrayOf(PropTypes.object)
}
export default PostContainer;
