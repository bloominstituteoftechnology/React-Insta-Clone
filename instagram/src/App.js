import React, { Component } from 'react';
import dummyData from './dummy-data';
import Search from './components/SearchBar/Search';
import Post from './components/PostContainer/Post';
//import Comment from './components/CommentSection/comment';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    }
  }
  componentDidMount() {
    this.setState({data: dummyData});
  }
  
  render() { 
    return (
      <div >
      <Post dummydata={this.state.data} />
        <Search />
      </div>
    );
  }
}

export default App;
