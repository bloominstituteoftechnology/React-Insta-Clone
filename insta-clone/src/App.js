import React, { Component } from 'react';

import './App.css';
import dummyData from './dummy-data';
import Post from './Components/PostContainer/Post';
import SearchBar from './Components/SearchBar/SearchBar';
import PostContainer from './Components/PostContainer/PostContainer';

class App extends Component {
  constructor(){
    super();
    this.state = {
      post: dummyData,
      
    };
  }

  render() {
    return (
      <div className="App">
        <SearchBar/>
        {this.state.post.map(post =>{
return (
  <div className="App">
        <SearchBar />
        <PostContainer posts={this.state.posts} />
      </div>

)


        }
        )}


        


      </div>
    );
  }
}

export default App;
