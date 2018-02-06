import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data.js';
import SearchBar from './components/SearchBar/SearchBar.js';
import PostContainer from './components/PostContainer/PostContainer.js';


class App extends Component {
  constructor() {
    super();
    this.state = {
      appData:[]
    }
  }

  componentDidMount() {
    this.setState({appData: dummyData});
  }

  render() {
    return (
      <div>
        <SearchBar />
        <div className="App">
          {dummyData.map((data, i) => <PostContainer dummydata={data} key={i} />)}
        </div>
      </div>
    );
  }
}
 
export default App;
