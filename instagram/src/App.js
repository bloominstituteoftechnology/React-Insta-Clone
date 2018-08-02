import React, { Component } from "react";
import PostsPage from "./components/PostContainer/PostsPage";
import Authenticate from "./components/Authentication/Authenticate";
import styled from "styled-components";

// styled components
const AppWrapper = styled.div`
  text-align: center;
  height: 900px;
`;
class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {}
  render() {
    return (
      <AppWrapper>
        <PostsPage />
      </AppWrapper>
    );
  }
}

export default Authenticate(App);
