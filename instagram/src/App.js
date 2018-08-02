import React from 'react';
import './App.css';
import dummyData from './dummy-data';
import PostPage from './components/PostContainer/PostPage';


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
      <PostPage posts={this.state.posts} />
      </div>
    );
  }
}

export default App;
