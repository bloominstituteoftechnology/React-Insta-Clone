import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import SearchBar from './components/SearchBar/SearchBar.js';
import PostContainer from './components/PostContainer/PostContainer.js';


class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: []
    }
  };

  componentDidMount() {
    this.setState({
      posts: dummyData
    })
  };

  render() {
    return (
      <div className="App">
        <SearchBar />
        <div className='PostsContainer'>
          {this.state.posts.map(post => {
            return (
              <PostContainer key={Math.random()} postInfo={post}/>
            )
          })}
        </div>
      </div>
    );
  }
}

export default App;
