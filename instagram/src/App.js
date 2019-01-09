import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import PostContainer from './components/PostContainer/PostContainer';
import dummyData from './dummy-data';
import SearchBar from './components/SearchBar/SearchBar';
import PropTypes from "prop-types";
import PostsPage from './components/PostContainer/PostsPage';
import Authenticate from './components/Authentication/Authenticate';
import Login from './components/Login/Login';


class App extends Component {
  constructor (){
    super();
    this.state ={
      valid: false
      // userPosts: [],
      // filteredPosts: []
      // commentData: commentData
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
        </header>
        <PostsPage />
      </div>
    );
  }
}


  

App.propTypes = {
  dummyData: PropTypes.array,
}

export default Authenticate(App);
