import React, { Component } from 'react';
import '../src/App.css';
// import ReactDOM from 'react-dom';
import SearchBar from '../components/SearchBar/SearchBar';
import PostsContainer from '../components/SearchBar/PostContainer';

class App extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     // posts: dummyData
  //   };
  // }

  render() {
    return (
      <div className="App">

        <SearchBar />
        <PostsContainer />
        {/* // posts={this.state.posts}
         /> */}
        
      </div>
      
    );
  }
}


export default App;
