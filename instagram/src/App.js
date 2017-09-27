import React, { Component } from 'react';
import './App.css';
import PostContainer from './postcontainer.js'
import postData from './application-data.js'
import SearchBar from './SearchBar'

class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: []
    }
  }
  componentDidMount(props) {
    this.setState (
        {
            posts: postData
        }
    );
}
  render() {
    return (
      <div className="App">
        <div className="search"><SearchBar /></div>
        {this.state.posts.map((post, index) => < PostContainer key={index} Post={post}/>)}
      </div>
    );
  }
}

export default App;
