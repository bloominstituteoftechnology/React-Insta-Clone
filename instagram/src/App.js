import React, { Component } from 'react';
import './App.css';
import PostPage from './components/PostContainer/PostPage';
import Authenticate from './Authentication/Authenticate';
import Login from './components/Login/Login';
import { Button } from 'reactstrap';

class App extends Component {
  
  constructor() {
    super();

    this.state = {
      posts: [],
    }
  }

  render() {
    return (
      <div className="App">
        <Button color="danger">Hello</Button>
        {/* <Login login={this.login}/> */}
        <PostPage />
        
      </div>
    );
  }
}

export default Authenticate(App);