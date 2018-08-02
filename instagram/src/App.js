import React, { Component } from 'react';
import Authenticate from './components/Authentication/Authenticate.js';
import PostPage from './components/PostContainer/PostsPage.js';
import styled from 'styled-components';

const AppText=styled.div`
  text-align: center;
`
const App=Authenticate(
  class App extends Component {
  constructor() {
    super();
    this.state={
      username:''
    }
  }
  componentDidMount(){
    const user=localStorage.getItem('username');
    this.setState({username: user});
  }
  
  render() {
    return (
      <AppText>
        <PostPage/>
      </AppText>
    );
  }
}
);
export default App;
