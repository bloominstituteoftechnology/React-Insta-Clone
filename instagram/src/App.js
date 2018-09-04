import React, { Component } from 'react';
import dummyData from './dummy-data';
import uuidv4 from 'uuid/v4';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from  './components/PostContainer/PostContainer';

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      dummy_data: dummyData
    }
  }
  render() {
    const {dummy_data} = this.state;
    return (
      <div className="App">
        <SearchBar />
        {
          dummy_data.map(post => {
            return (
              <PostContainer key={uuidv4()} postData={post} />
            )
          })
        }
      </div>
    );
  }
}

export default App;
