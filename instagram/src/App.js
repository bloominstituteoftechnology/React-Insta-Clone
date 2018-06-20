import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import PostContainer from './Components/PostContainer/PostContainer';
import SearchBar from './Components/SearchBar/SearchBar';

class App extends Component {
  constructor() {
    
    super();
    this.state = {
      posts: []
    };
  }
  
  componentDidMount() {
   
    window.localStorage.setItem("Mounted", true);
    this.setState({ posts: dummyData }); 
  }
  render() {
    
    return (
      <div className="App">
        <SearchBar />
        <PostContainer posts={this.state.posts} />
      </div>
    );
  }
}

export default App;
