import React from 'react';
import PropTypes from 'prop-types';
import Post from './Post';
import { Container, Card } from './PostsStyles';

const PostsContainer = props => {
  return (
    <Container>
      {props.posts.map(post =>
        <Card key={post.timestamp}>
          <Post post={post} />
        </Card>
      )}
    </Container>
  )
};

PostsContainer.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object)
};

export default PostsContainer;