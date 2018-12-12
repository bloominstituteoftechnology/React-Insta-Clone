import React, { Component } from 'react';
import PostContainer from './components/PostContainer/PostContainer';

import dummyData from './dummy-data';

import './App.css';

console.log(dummyData);

const posts = dummyData.map(obj => <PostContainer key={Math.random()}
                                                  user={obj.username}
                                                  thumbnail={obj.thumbnailUrl}
                                                  image={obj.imageUrl}
                                                  time={obj.timestamp}
                                                  likes={obj.likes}
                                                  comments={obj.comments}/>)

class App extends Component {
    render() {
    return (
      <div className="App">
        {posts}
      </div>
    );
  }
}

export default App;
