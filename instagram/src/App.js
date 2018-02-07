import React, { Component } from 'react';
// import logo from './logo.svg';

import SearchBar from './components/SearchBar.js';
import PostContainer from './components/PostContainer.js';
import PsuedoLogin from './components/PsuedoLogin.js';

import dummyData from './dummy-data';

class App extends Component {
  state = {
    data: dummyData,
    currentUser: 'default user',
  }
  login = (user) => {
    this.setState({ currentUser: user });
  }

  render() {
    return (
      <div className='main-container'>
        <div className='top'>
          <PsuedoLogin login={this.login}/>
          <SearchBar />
        </div>
        <div className='post-container'>
          {this.state.data.map(post => {
            return <PostContainer key={post.id}
                                  id={post.id}
                                  username={post.username}
                                  currentUser={this.state.currentUser}
                                  imageUrl={post.imageUrl}
                                  likes={post.likes}
                                  timestamp={post.timestamp}
                                  comments={post.comments}
                                  />
          })}
        </div>
      </div>
    );
  }
}

export default App;
