import React, { Component } from 'react';
import './css/index.css';
import DummyData from './dummy-data.js';
import PostContainer from './components/PostContainer/PostContainer.js';
import SearchBar from './components/SearchBar/SearchBar.js';

class App extends Component {
  constructor() {
    super();
    this.state = { data: DummyData}
  }

  render() {
    return (
      <div className="app">
        <SearchBar />
        {console.log(this.state.data)}
        {this.state.data.map( (post) => {
            return <PostContainer
              key={post.timestamp}
              data={post}/>
        })}

      </div>
    );
  }
}

export default App;
