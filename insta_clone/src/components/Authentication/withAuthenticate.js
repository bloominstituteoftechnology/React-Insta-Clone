import React from 'react';

const withAuthenticate = (PostPage, Login) => props => {
  if (localStorage.getItem('username')) {
    return <PostPage {...props} />;
  }
  return <Login {...props} />;
};

export default withAuthenticate;
