import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data.js';
import SearchBar from './components/SearchBar/SearchBar.js';
import PostContainer from './components/PostContainer/PostContainer.js';


class App extends Component {
  constructor() {
    super();
    this.state = {
      appData:[], 
      searchPosts: []
    }
  }

  componentDidMount() {
    this.setState({appData: dummyData, searchPosts: dummyData});
  }

  render() {
    return (
      <div>
        <SearchBar />
        <div className="App">
          {dummyData.map((data, i) => <PostContainer key={i} dummydata={data} />)}
        </div>
      </div>
    );
  }
}
 
export default App;