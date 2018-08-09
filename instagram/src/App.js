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
      data: dummyData
    });
  }

  handleSearchState = event => {
    this.setState({searchState: event.target.value})
    console.log
    const filteredUser = this.state.data.filter(user => user.username.includes(this.state.searchState) 
  ) 
   
};

  handleLogout = event => {
    console.log("hi")
    localStorage.removeItem('user')
    window.location.reload();
}

  render() {
    let p
    return (
        <StyledApp>
          
          {this.state.data.map(post => (
            
            <div>
            <PostContainer
              className={post.username}
              key={post.username}
              post={post}
            />
            
            <SearchBar user={this.state.data} handleLogout={this.handleLogout} />
            </div>
          ))}
        </StyledApp>
      
      );
  }
}
    

export default Authenticate(App);
