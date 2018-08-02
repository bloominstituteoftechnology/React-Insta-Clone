import React, { Component } from 'react';
import './App.css';
import Authenticate from './components/Authentication/Authenticate.js';
import PostPage from './components/PostContainer/PostsPage.js';
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
      <div className="App">
        <PostPage/>
      </div>
    );
  }
}
);
export default App;
