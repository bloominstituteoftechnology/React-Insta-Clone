import React from 'react';
import Post from './Post';
import PropTypes from 'prop-types';
import { Container } from '../styles/PostContainerStyles'

const PostContainer = props => {
  return (
    <Container>
      { props.users.map( user => <Post key={user.timestamp} user={user} /> ) }
    </Container>
  );
};

PostContainer.propTypes = {
  users: PropTypes.arrayOf(PropTypes.object)
}

export default PostContainer;