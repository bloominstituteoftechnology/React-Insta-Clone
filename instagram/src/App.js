import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import dummyData from './dummy-data';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';
import PostsPage from './components/PostContainer/PostsPage';
import Authenticate from './components/Authentication/Authenticate';
import styled, {createGlobalStyle} from "styled-components";

const GlobalStyles = createGlobalStyle
` *{
  font-family: 'Open Sans', sans-serif;
}`;

class App extends Component {
  constructor(){
    super();
    this.state = {}
  }

  render() {
    return (
      <div className="App">
        <GlobalStyles />
        <PostsPage {...this.props} logout={this.props.logout} />

      </div>
    );
  }
}

export default Authenticate(App);
