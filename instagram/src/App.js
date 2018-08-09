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

  handleLogout = event => {
    console.log("hi")
    localStorage.removeItem('user')
    window.location.reload();
}

  render() {
    
    return (
        <StyledApp>
          <SearchBar handleLogout={this.handleLogout}/>
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
    

export default Authenticate(App);
