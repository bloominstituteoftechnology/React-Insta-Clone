import React from 'react';
import PostContainer from '../PostContainer/PostContainer';
import PropTypes from 'prop-types';

import styled from 'styled-components';


// import './PostList.css';

const StyledPostList = styled.div`
  max-width: 600px;
  margin: 0 auto;
`

const PostList = props => {
  if (!props.posts.length) {
    return <div>Loading ...</div>
  } else {
    return (
      <StyledPostList>
        {props.posts.map(post =>
          <PostContainer
            post={post}
            key={post.timestamp}
            addCommentHandler={props.addCommentHandler}
            addLikeHandler={props.addLikeHandler}
            newComment={props.newComment}
            inputEventHandler={props.inputEventHandler}
          />)}
      </StyledPostList>
    );
  }
}

PostList.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object)
}

export default PostList;