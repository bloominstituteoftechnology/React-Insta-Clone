import React, { Component } from 'react';
import PostsPage from './components/PostsPage';
import Authenticate from './Authentication/Authenticate';
import styled from "styled-components";

class App extends Component {
  constructor() {
    super();
    this.state = {  
      username: ''
    }
  }
  componentDidMount() {
    const user = localStorage.getItem('user');
    this.setState({ username: user })
  }
  render() { 
    return ( 
      <PostsPage userName={this.state.username} />
     )
  }
}
 

export default Authenticate(App);