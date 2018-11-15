import React, { Component } from 'react';
import './App.css';
import PostsPage from './components/PostContainer/PostsPage';
import Authenticate from './Authentication/Authenticate';

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  
  render() {
    
    return (
      <div className="App">
        <PostsPage isLoggedIn={this.props.isLoggedIn}/>
      </div>
    );
  }
  
}

export default Authenticate(App);
