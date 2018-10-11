import React, { Component } from 'react';
import './App.css';
// import SearchBar from './components/SearchBar';
// import PostContainer from './components/PostContainer';
// import data from './dummy-data';
// import PropTypes from 'prop-types';
import PostsPage from './components/PostsPage'
import Authenticate from './components/Authentication/Authenticate'

class App extends Component {
  constructor() {
    super();
    this.state = {}
  }

 

  render() {
    return (
      <div className="App">
        <PostsPage />
      </div>
    );
  }
}


export default Authenticate(App);
