import React from 'react';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/PostContainer';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: dummyData,
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
        </header>
        <div>
          {this.state.data.map(post => (
            <PostContainer  key={Math.random()} 
            postComments={post.comments} 
            postStarter={post.username}
            postThumb={post.thumbnailUrl}
            postImage={post.imageUrl}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
