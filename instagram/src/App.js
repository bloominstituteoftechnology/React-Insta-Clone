import React, { Component } from 'react';
import './App.css';
import PostsPage from './components/PostsContainer/PostsPage';
import Authenticate from './Authentication/Authenticate';

// import dummyData from './dummy-data';
// import PostsContainer from './components/PostsContainer/PostsContainer';
// import SearchBar from './components/SearchBar/SearchBarContainer';

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  // logIn = e => {
  //   //set a username on localStorage
  //   //check localStorage to see if user is logged in
  //   //force page to reload when user logs in -- unmount/mount component

  // }
 
  render() {
    return (
      <div className="App">
      
       <PostsPage />
      
      </div>
    );
  }
}

export default Authenticate(App);
