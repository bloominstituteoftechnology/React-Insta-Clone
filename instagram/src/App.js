import React from 'react';
import PostPage from './Components/PostContainer/PostPage';
import Auth from './Components/Authentication/Authenticate'
import styled from 'styled-components';


const App = () => {
  return (
    <div>
      <PostPage />
    </div>
  );
};

export default Auth(App);