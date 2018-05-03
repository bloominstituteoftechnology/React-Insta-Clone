import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: []
    }
  }

  componentDidMount() {
    this.setState({posts: dummyData})
  }

  

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Instagram</h1>
        </header>
        <SearchBar posts={this.state.posts}/>
        {this.state.posts.map((post) => <PostContainer key={post.username} post={post}/>)}
      </div>
    );
  }
}

export default App;
