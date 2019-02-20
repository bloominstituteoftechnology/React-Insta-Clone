import React, { Component } from 'react';
import './App.css';
// import Login from './components/Login/Login'
import PostsPage from './components/PostContainer/PostsPage'
// import authenticate from './components/Authentication/authenticate'

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div className="App">
        
        <PostsPage />
        
      </div>
    );
  }
}


// export default authenticate(App)(Login);

export default App;