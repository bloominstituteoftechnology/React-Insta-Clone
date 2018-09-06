import React, { Component } from 'react';
import './App.css';
import PostsPage from './components/PostContainer/PostsPage';
import Authenticate from './components/Authentication/Authenticate';
import styled from 'styled-components';



class App extends Component {
  constructor() {
    super();
    this.state = {
      postData: [],
      search: '',
    };
  }








  render() {
    return (

      <div className="App">
        <PostsPage

        />
      </div>
    )}

}




export default Authenticate(App);
