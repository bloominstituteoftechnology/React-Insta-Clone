import React, { Component } from 'react';
// import logo from './logo.svg';

import SearchBar from './components/SearchBar.js';
import PostContainer from './components/PostContainer.js';

import dummyData from './dummy-data';

class App extends Component {
  state = {
    data: dummyData,
  }
  render() {
    return (
      <div>
        <div>
          <SearchBar />
        </div>
        {this.state.data.map(post => {
          return <PostContainer key={post.id}
                                id={post.id}
                                username={post.username}
                                imageUrl={post.imageUrl}
                                likes={post.likes}
                                timestamp={post.timestamp}
                                comments={post.comments}
                                />
        })}
      </div>
    );
  }
}

export default App;
