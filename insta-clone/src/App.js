import React, { Component } from 'react';

import './App.css';
import dummyData from './dummy-data';
import Post from './Components/PostContainer/Post';

class App extends Component {
  constructor(){
    super();
    this.state = {
      post: dummyData
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          
          <h1 className="App-title">Insta</h1>
<Post />
        </header>
        {this.state.post.map(post =>{
return (
<p className="App-intro" key={post.id}>
        {post.username} {post.thumbnailUrl} {post.imageUrl} {post.likes} {post.timestamp} 
          
        </p>

)


        }
        )}


        


      </div>
    );
  }
}

export default App;
