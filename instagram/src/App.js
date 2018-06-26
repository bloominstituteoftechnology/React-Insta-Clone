import React, { Component } from 'react';
import './App.css';
import CommentSection from './components/CommentSection/CommentSection';
import PostContainer from './components/PostContainer/PostContainer';
import SearchBar from './components/SearchBar/SearchBar';
import dummyData from './dummy-data';
class App extends Component {
  constructor () {
    super();
    this.state = {
      data: dummyData,
    }
  }
  render() {
    return (
      <div className="App">
        <SearchBar />
        {
          this.state.data.map(obj => {
            return (
              <PostContainer 
                key={obj.username}
                oneUser={obj}
              />
            );
          })
        }
      </div>
    );
  }
}

export default App;
