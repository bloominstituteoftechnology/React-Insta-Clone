import React from 'react';
import './App.css';


import dummyData from './dummy-data'; 

import PostContainer from './components/PostContainer/PostContainer'; 

import SearchBar from './components/SearchBar/SearchBar';

class App extends React.Component {
  constructor () {
    super(); 
    this.state= {
      posts: dummyData
    };
  }


render () {
  return (
    <div className="App">
      <SearchBar /> 

      {this.state.posts.map((dummyData) => (
        <p>
          <PostContainer post={dummyData}/> 
        </p>
      ))}

    </div>
  );
}
}

export default App;

