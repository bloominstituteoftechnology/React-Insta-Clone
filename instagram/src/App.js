import React from 'react';
import PostPage from './Components/PostContainer/PostPage';
import Authenticate from './Components/Authentication/Authenticate';
import './App.css';

class App extends React.Component {
  constructor () {
    super (); 
    this.state = {}
  }
  
  render() {
    return (
      <div>
        <PostPage/>
      </div>
    );
  }
}

export default Authenticate(App);
