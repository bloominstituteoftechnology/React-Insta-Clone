import React from 'react';
import './App.css';
import dummyData from './dummy-data';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostsContainer';



class App extends React.Component {
  constructor() {
    super();
    this.state = {
      posts: dummyData
    };
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
