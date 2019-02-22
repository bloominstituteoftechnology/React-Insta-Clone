import React, { Component } from 'react';
import PostsPage from "./components/PostComponents/MainPostsPage";
import Authenticate from "./Authentication/Authenticate";
import styled from 'styled-components';

const AppStyles =  styled.div`
  max-width: 1936px;
  width: 100%;
  margin: auto;
`;

class App extends Component {
  constructor() {
    super();
    this.state = {
      username: ""
    }
  }
  
  componentDidMount() {
    const user = localStorage.getItem("user");
    this.setState({ username: user });
  }

  render() {
    return (
      <AppStyles>
        <PostsPage />
      </AppStyles>
    );
  }
}

export default Authenticate(App);
