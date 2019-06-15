import React from 'react';
import './App.css';
import SearchBar from './components/SearchBar/Search';
import Post from './components/PostContainer/Post';

import dummyData from './dummy-data';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: dummyData
    }
  }

  render() {
    return (
      <div className="app">
        <SearchBar />
        <Post data={this.state.data} />
      </div>
    );
  }
}

export default App;
