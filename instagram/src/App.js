import React from 'react';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';
import dummyData from './dummy-data';
import './App.css';

class App extends React.Component {
  constructor() {
    super ();
    this.state = {
      data: dummyData,
      searchText: '',
      commentText: []
    }
  }

  render() {
    return (
      <div className="App">
        <SearchBar />

        <PostContainer posts={this.state.data} />

      </div>
    );
  }
}

export default App;