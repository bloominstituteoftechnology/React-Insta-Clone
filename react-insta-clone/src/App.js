import React, { Component } from 'react';
import './App.css';
import PostPage from './components/PostContainer/PostPage';
import Authenticate from './components/Authenticate/Authenticate';


class App extends Component {
  constructor() {
    super();
    this.state = {
      username: ''
    };
  }

  componentDidMount() {
    const user = localStorage.getItem("user");
    this.setState({ username: user });
  }
  
  render() {
    return (
      <div className="App">
          <PostPage />
      </div>
    );
  }
}


export default Authenticate(App);
