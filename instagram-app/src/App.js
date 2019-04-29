import React from 'react';
import './App.css';


import dummyData from './dummy-data'; 

import PostContainer from './components/PostContainer/PostContainer'; 

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

