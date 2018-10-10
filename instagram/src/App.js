import React, { Component } from 'react';
import PostsPage from './components/PostContainer/PostsPage'
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      
    }
  }


  render() {
    return (
      <div className="App">
        <PostsPage />
      </div>
    );
  }
}

export default App;
