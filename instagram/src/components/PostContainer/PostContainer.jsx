import React from 'react';
import Post from './Post';
import PropTypes from "prop-types";
import './PostContainer.css';
import styled from 'styled-components';

const PostWrapperComponent = styled.div`
position: relative;
top: 10px;
`;
const PostContainer = props => {
  return(
    <PostWrapperComponent>
     {props.data.map(post => <Post post={post} key={post.username} />)}      
    </PostWrapperComponent>
  );
};

PostContainer.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object)
};

export default PostContainer;