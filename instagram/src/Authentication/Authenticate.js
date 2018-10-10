import React from 'react';

// HOC
const authenticate = PostPage => LoginPage => props => {
  if (props.loggedIn) {
    return <PostPage {...props} />;
  }

  return <LoginPage {...props} />;
};

export default authenticate;