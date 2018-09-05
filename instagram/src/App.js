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
      data: [],
      searchState: []
    };
  }

  componentDidMount() {
    this.setState({
      data: dummyData,
      searchState: dummyData
    });
  }


  handleSearchState = event => { 
    const filteredUser = this.state.data.filter(user => {
      if (user.username.toLowerCase().includes(event.target.value)) {
        return user;
      }
    });
    this.setState({ searchState: filteredUser });
  }

  handleLogout = event => {
    console.log("hi");
    localStorage.removeItem("user");
    window.location.reload();
  };

  render() {
    
    return (
      <StyledApp>
        <SearchBar
          handleSearchState={this.handleSearchState}
          handleLogout={this.handleLogout}
        />
        {this.state.searchState.map(post => (
          <div>
            <PostContainer
              className={post.username}
              key={post.username}
              post={post}
            />
          </div>
        ))}
      </StyledApp>
    );
  }
}

export default Authenticate(App);
