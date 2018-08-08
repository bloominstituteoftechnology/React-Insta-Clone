import React, { Component } from "react";

import SearchBar from "./components/SearchBar/SearchBar";
import PostContainer from "./components/PostContainer/PostContainer";
import dummyData from "./dummy-data";
import Authenticate from "./components/Authentication/Authenticate";

import styled from "styled-components";
import "./App.css";



const StyledApp = styled.div`
  max-width: 800px;
  margin: 1.5% auto;
`;

const Auth = Authenticate(App);

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    this.setState({
      data: dummyData
    });
  }
  render() {
    
    return (
        <StyledApp>
          <SearchBar />
          {this.state.data.map(post => (
            <PostContainer
              className={post.username}
              key={post.username}
              post={post}
            />
          ))}
        </StyledApp>
      
      );
  }
}
    

export default Auth(App);
