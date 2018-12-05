import React from 'react';

const Authenticate = PostsPage => Login => props => {
  if (props.isLoggedIn) {
    return <PostsPage {...props} />;
  }

  return <Login {...props} />;
};

export default Authenticate;