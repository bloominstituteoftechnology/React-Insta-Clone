import React from "react";
import PostPage from '../PostContainer/PostPage';
import LoginPage from './LoginPage';

const withAuthenticate = App =>
  class extends React.Component {
    render() {
      if (localStorage.getItem("user")) {
        return <LoginPage/>;
      } else {
        return <PostPage  />;
      }
    }
  };

export default withAuthenticate;
