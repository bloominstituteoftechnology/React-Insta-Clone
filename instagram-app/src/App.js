import React from 'react';
import './App.css';
// import SearchBar from './components/SearchBar';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/PostContainer.js';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      profile: dummyData
    };
  }
  
  render() {
    return (
      <div className="App">
        <p>test</p>
        <div>
          <PostContainer />
        </div>
      </div>
    );
  }
}

export default App;
